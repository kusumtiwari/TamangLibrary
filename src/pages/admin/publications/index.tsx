/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import LoadingSpinner from "@/common/LoadingSpinner";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { db } from "../../../../firebase";

const AdminPublication = () => {
	const [data, loading, error] = useCollectionData(
		collection(db, "publications")
	);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<>
			<div>
				<h1 className="text-3xl font-bold mb-8 pl-2">Publications</h1>
				<div className="flex justify-end p-4">
					<Link to="/admin/publications/create">
						<div className="flex gap-2 items-center border border-black rounded-md p-2">
							Create New <IoIosCreate />
						</div>
					</Link>
				</div>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-60">Title</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data?.map((publication) => (
							<TableRow className="border-2" key={nanoid()}>
								<TableCell className="border-2 p-2">
									{publication.title}
								</TableCell>
								<TableCell className="flex flex-row gap-2 justify-center items-center align-middle">
									<Link to={`/admin/publications/edit/${publication.id}`}>
										<Button variant="outline">
											<AiOutlineEdit />
										</Button>
									</Link>

									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button variant="destructive">
												<AiOutlineDelete />
											</Button>
										</AlertDialogTrigger>
										<AlertDialogContent>
											<AlertDialogHeader>
												<AlertDialogTitle>
													Are you absolutely sure?
												</AlertDialogTitle>
												<AlertDialogDescription>
													This action cannot be undone. This will permanently
													delete your data from our database.
												</AlertDialogDescription>
											</AlertDialogHeader>
											<AlertDialogFooter>
												<AlertDialogCancel>Cancel</AlertDialogCancel>
												<AlertDialogAction
													onClick={async () => {
														await deleteDoc(
															doc(db, "publications", publication.id)
														);

														toast.info("Publication deleted");
													}}
												>
													Continue
												</AlertDialogAction>
											</AlertDialogFooter>
										</AlertDialogContent>
									</AlertDialog>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</>
	);
};

export default AdminPublication;
