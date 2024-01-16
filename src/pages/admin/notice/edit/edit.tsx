/* eslint-disable jsx-a11y/label-has-associated-control */
import { Timestamp, doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "@/common/LoadingSpinner";
import NoticeForm from "@/components/forms/notice-form";
import { type FormSchema } from "@/components/forms/project-form";
import { useLocation } from "react-router-dom";
import { db } from "../../../../../firebase";

const AdminNoticeEdit = () => {
	const location = useLocation();
	const { pathname } = location;

	const [data, loading, error] = useDocumentData(
		doc(db, "notice", (pathname.split("/").pop() ?? "not-found") as string)
	);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	console.log(data);
	return (
		<NoticeForm
			// @ts-ignore
			initialData={
				{
					...data,
					dateAndTime: (data?.dateAndTime as Timestamp)?.toDate(),
				} as unknown as FormSchema & { id: string }
			}
		/>
	);
};

export default AdminNoticeEdit;
