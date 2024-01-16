/* eslint-disable jsx-a11y/label-has-associated-control */
import { Timestamp, doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
// import { useRouter } from "next/router";
import LoadingSpinner from "@/common/LoadingSpinner";
import EventForm from "@/components/forms/event-form";
import { type FormSchema } from "@/components/forms/project-form";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../../../../firebase";
import NewArrivalForm from "@/components/forms/newArrival-form";

const AdminNewArrivalEdit = () => {
	const navigate = useNavigate();
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
