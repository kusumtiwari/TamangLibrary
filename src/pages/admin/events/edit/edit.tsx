/* eslint-disable jsx-a11y/label-has-associated-control */
import { Timestamp, doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
// import { useRouter } from "next/router";
import LoadingSpinner from "@/common/LoadingSpinner";
import EventForm from "@/components/forms/event-form";
import { type FormSchema } from "@/components/forms/project-form";
import { useLocation } from "react-router-dom";
import { db } from "../../../../../firebase";

const AdminEventEdit = () => {
	const location = useLocation();
	const { pathname } = location;

	const [data, loading, error] = useDocumentData(
		doc(db, "events", (pathname.split("/").pop() ?? "not-found") as string)
	);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	console.log(data);
	return (
		<EventForm
			// @ts-ignore
			initialData={
				{
					...data,
					dateAndTime: (data?.dateAndTime as Timestamp)?.toDate(),
					status: data?.status as FormSchema["status"],
				} as unknown as FormSchema & { id: string }
			}
		/>
	);
};

export default AdminEventEdit;
