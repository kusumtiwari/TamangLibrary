/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Timestamp, doc } from "firebase/firestore";
// import { useRouter } from "next/router";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectForm, { type FormSchema } from "@/components/forms/project-form";
import { db } from "../../../../../firebase";
import LoadingSpinner from "@/common/LoadingSpinner";

const AdminProjectEdit = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;

	const [data, loading, error] = useDocumentData(
		doc(db, "projects", (pathname.split("/").pop() ?? "not-found") as string)
	);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	console.log(data);
	return (
		<ProjectForm
			initialData={
				{
					...data,
					startDate: (data?.startDate as Timestamp)?.toDate(),
					endDate: (data?.endDate as Timestamp)?.toDate(),
					status: data?.status as FormSchema["status"],
				} as unknown as FormSchema & { id: string }
			}
		/>
	);
};

export default AdminProjectEdit;
