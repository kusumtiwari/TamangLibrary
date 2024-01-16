/* eslint-disable jsx-a11y/label-has-associated-control */
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "@/common/LoadingSpinner";
import NewArrivalForm from "@/components/forms/newArrival-form";
import { type FormSchema } from "@/components/forms/project-form";
import { useLocation } from "react-router-dom";
import { db } from "../../../../../firebase";

const AdminNewArrivalEdit = () => {
	const location = useLocation();
	const { pathname } = location;

	const [data, loading, error] = useDocumentData(
		doc(db, "newArrivals", (pathname.split("/").pop() ?? "not-found") as string)
	);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	console.log(data);
	return (
		<NewArrivalForm
			initialData={
				{
					...data,
				} as unknown as FormSchema & { id: string }
			}
		/>
	);
};

export default AdminNewArrivalEdit;
