/* eslint-disable jsx-a11y/label-has-associated-control */
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
// import { useRouter } from "next/router";
import LoadingSpinner from "@/common/LoadingSpinner";
import { type FormSchema } from "@/components/forms/project-form";
import PublicationForm from "@/components/forms/publication-form";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../../../../firebase";

const AdminPublicationEdit = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;

	const [data, loading, error] = useDocumentData(
		doc(
			db,
			"publications",
			(pathname.split("/").pop() ?? "not-found") as string
		)
	);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<PublicationForm
			initialData={
				{
					...data,
				} as unknown as FormSchema & { id: string }
			}
		/>
	);
};

export default AdminPublicationEdit;
