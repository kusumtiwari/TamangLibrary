/* eslint-disable jsx-a11y/label-has-associated-control */
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { nanoid } from "nanoid";
// import { useRouter } from "next/router";
import { useUploadFile } from "react-firebase-hooks/storage";
import { useForm } from "react-hook-form";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import * as z from "zod";
import { db, storage } from "../../../firebase";
import { Button } from "../ui/button";
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
	title: z.string().optional(),
	image: z.string().optional(),
});

export type FormSchema = typeof formSchema._type;

interface PublicationFormProps {
	initialData?: FormSchema & {
		id: string;
	};
}

const emptyData: FormSchema = {
	title: "",
	image: "",
};

const PublicationForm = ({ initialData }: PublicationFormProps) => {
	// const router = useRouter();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData ?? emptyData,
	});

	const onSubmit = async (values: FormSchema) => {
		const randomId = nanoid();

		if (initialData) {
			await updateDoc(doc(db, "publications", initialData.id ?? "not-found"), {
				...values,
				updatedAt: serverTimestamp(),
			});
			await navigate("/admin/publications");
			return;
		}

		await setDoc(doc(db, "publications", randomId), {
			id: randomId,
			...values,
			createdAt: serverTimestamp(),
		});

		await navigate("/admin/publications");
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8">
				<h1 className="text-3xl font-bold">Publication</h1>
				{/* Text Example */}
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
					name="image"
					// @ts-ignore
					render={({ field }) => {
						const [uploadFile, uploading] = useUploadFile();
						return (
							<FormItem>
								<FormLabel>
									Overview Image{" "}
									{uploading
										? "Uploading..."
										: form.watch("image") && (
												<a
													target="_blank"
													href={form.watch("image")}
													className="hover:underline"
												>
													(Preview)
												</a>
										  )}
								</FormLabel>
								<FormControl>
									<Input
										type="file"
										onChange={async (e) => {
											const file = e.target.files
												? e.target.files[0]
												: undefined;
											if (!file) {
												toast.error("An Error Occured");
												return;
											}
											const result = await uploadFile(
												ref(storage, `${nanoid()}.jpg`),
												file,
												{
													contentType: "image/jpeg",
												}
											);
											if (!result?.ref) {
												toast.error("An Error Occured");
												return;
											}
											const downloadURL = await getDownloadURL(result.ref);
											form.setValue("image", downloadURL);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<div className="flex justify-end">
					<Button
						type="button"
						className="mr-4 min-w-20 bg-white text-black border border-black"
						onClick={() => navigate("/admin/publications")}
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

export default PublicationForm;