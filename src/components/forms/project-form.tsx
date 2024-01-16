/* eslint-disable jsx-a11y/label-has-associated-control */
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { nanoid } from "nanoid";
import { useUploadFile } from "react-firebase-hooks/storage";
import { useFieldArray, useForm } from "react-hook-form";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import * as z from "zod";
import { db, storage } from "../../../firebase";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

const formSchema = z.object({
	title: z.string().optional(),
	startDate: z.date().optional(),
	endDate: z.date().optional(),
	status: z.enum(["ONGOING", "UPCOMING", "COMPLETED"]).optional(),
	budget: z.coerce.number().optional(),
	description: z.string().optional(),
	image: z.string().optional(),
	glimpses: z.array(
		z.object({
			url: z.string(),
		})
	),
});

export type FormSchema = typeof formSchema._type;

interface ProjectFormProps {
	initialData?: FormSchema & {
		id: string;
	};
}

const emptyData: FormSchema = {
	startDate: new Date(),
	endDate: new Date(),
	status: "ONGOING",
	title: "",
	budget: 0,
	description: "",
	image: "",
	glimpses: [],
};

const ProjectForm = ({ initialData }: ProjectFormProps) => {
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData ?? emptyData,
	});

	const {
		fields: glimpsesFields,
		append: appendGlimpses,
		remove: removeGlimpses,
	} = useFieldArray({
		control: form.control,
		name: "glimpses",
	});

	const onSubmit = async (values: FormSchema) => {
		const randomId = nanoid();

		if (initialData) {
			await updateDoc(doc(db, "projects", initialData.id ?? "not-found"), {
				...values,
				updatedAt: serverTimestamp(),
			});
			await navigate("/admin/projects");
			return;
		}

		await setDoc(doc(db, "projects", randomId), {
			id: randomId,
			...values,
			createdAt: serverTimestamp(),
		});

		await navigate("/admin/projects");
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8">
				<h1 className="text-3xl font-bold">Project</h1>
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
					name="status"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Status</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger>
										<SelectValue
											className="w-full"
											placeholder="Select a status"
										>
											{field.value ?? "Select an option"}
										</SelectValue>
									</SelectTrigger>
									<SelectContent>
										{["ONGOING", "UPCOMING", "COMPLETED"].map((status) => (
											<SelectItem value={status} key={status}>
												{status}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{form.watch("status") === "COMPLETED" && (
					<FormField
						control={form.control}
						name="budget"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Budget</FormLabel>
								<FormControl>
									<Input type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

				{form.watch("status") !== "UPCOMING" && (
					<FormField
						control={form.control}
						name="startDate"
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
				)}

				{form.watch("status") !== "UPCOMING" && (
					<FormField
						control={form.control}
						name="endDate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>End Date</FormLabel>
								<FormControl>
									<DatePicker date={field.value} setDate={field.onChange} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

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
					name="image"
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

				{form.watch("status") === "COMPLETED" && (
					<div>
						<h2 className="border-b-2 mb-4 pb-2 pt-4">
							Add Glimpses of the project
						</h2>
						{glimpsesFields.map((glimpse, index) => (
							<div key={glimpse.id}>
								<section
									className="flex flex-col sm:flex-row gap-4"
									key={glimpse.id}
								>
									<div className="flex-1">
										<FormField
											control={form.control}
											name={`glimpses.${index}.url`}
											render={({ field }) => {
												const [uploadFile, uploading] = useUploadFile();
												return (
													<FormItem>
														<FormLabel>
															Glimpse Image{" "}
															{uploading
																? "Uploading..."
																: form.watch(`glimpses.${index}.url`) && (
																		<a
																			target="_blank"
																			href={form.watch(`glimpses.${index}.url`)}
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
																	const downloadURL = await getDownloadURL(
																		result.ref
																	);
																	form.setValue(
																		`glimpses.${index}.url`,
																		downloadURL
																	);
																}}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												);
											}}
										/>
									</div>
									<div className="flex items-end">
										<Button
											type="button"
											variant="destructive"
											onClick={() => removeGlimpses(index)}
										>
											DELETE
										</Button>
									</div>
								</section>
							</div>
						))}
						<Button
							type="button"
							className="mt-4"
							onClick={() => {
								appendGlimpses({
									url: "",
								});
							}}
						>
							Add New Glimpse
						</Button>
					</div>
				)}

				<div className="flex justify-end">
					<Button
						type="button"
						className="mr-4 min-w-20 bg-white text-black border border-black"
						onClick={() => navigate("/admin/projects")}
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

export default ProjectForm;
