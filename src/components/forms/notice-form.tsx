/* eslint-disable jsx-a11y/label-has-associated-control */
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import * as z from "zod";
import { db } from "../../../firebase";
import { Button } from "../ui/button";
import { DatePicker } from "../ui/date-picker";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
	title: z.string().min(1, { message: "Title is required" }),
	description: z.string().min(1, { message: "Description is required" }),
	dateAndTime: z.date({ required_error: "Please select a date" }),
});

export type FormSchema = typeof formSchema._type;

interface NoticeFormProps {
	initialData?: FormSchema & {
		id: string;
	};
}

const emptyData: FormSchema = {
	title: "",
	description: "",
	dateAndTime: new Date(),
};

const NoticeForm = ({ initialData }: NoticeFormProps) => {
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData ?? emptyData,
	});

	const onSubmit = async (values: FormSchema) => {
		const randomId = nanoid();

		if (initialData) {
			await updateDoc(doc(db, "notice", initialData.id ?? "not-found"), {
				...values,
				updatedAt: serverTimestamp(),
			});
			await navigate("/admin/notice");
			return;
		}

		await setDoc(doc(db, "notice", randomId), {
			id: randomId,
			...values,
			createdAt: serverTimestamp(),
		});

		await navigate("/admin/notice");
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8">
				<h1 className="text-3xl font-bold">Notice</h1>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								{typeof window !== "undefined" && <ReactQuill {...field} />}
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="dateAndTime"
					render={({ field }) => (
						<FormItem>
							<FormLabel>StartDate</FormLabel>
							<FormControl>
								<DatePicker date={field.value} setDate={field.onChange} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex justify-end">
					<Button
						type="button"
						className="mr-4 min-w-20 bg-white text-black border border-black"
						onClick={() => navigate("/admin/notice")}
					>
						<IoIosArrowBack className="mr-2" />
						Back
					</Button>
					<Button type="submit" className="min-w-20">
						Submit
						<IoIosArrowForward className="ml-2" />
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default NoticeForm;
