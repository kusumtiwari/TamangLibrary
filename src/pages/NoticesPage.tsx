import dayjs from "dayjs";
import { db } from "../../firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ErrorPage from "../common/ErrorPage";
import LoadingSpinner from "../common/LoadingSpinner";

const NoticesPage: React.FC = () => {
  const noticesQuery = query(
    collection(db, "notice"),
    orderBy("dateAndTime", "desc")
  );
  const [notices, loading, error] = useCollectionData(noticesQuery, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!loading && error) {
    return <p>{JSON.stringify(error, null, 2)}</p>;
  }

  const latestNotice = notices && notices.length > 0 ? notices[0] : null;

  return (
    <div className="">
      <div className="h-96 bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center justify-center">
        <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-900 font-bold text-shadow-white">
          STAY INFORMED, STAY CONNECTED
        </div>
        <div className="text-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-blue-950">
          Your source for important updates and notices
        </div>
      </div>

      {latestNotice && (
        <>
          <div className="mt-12 relative h-[30vh]">
            <div className="uppercase text-primary-blueText text-xl md:text-md lg:text-xl text-center h-28 pt-8 bg-secondary-detailsBackground">
              <h1 className="border-2 border-primary-blueText bg-white mt-2 mx-auto max-w-fit p-12 text-center items-center">
                {dayjs
                  .unix(latestNotice.dateAndTime.seconds)
                  .format("DD/MM/YYYY (dddd)")}
              </h1>
            </div>
          </div>

          <div className="text-center font-bold text-3xl text-primary-blueText text-uppercase pt-8">
            #1 NOTICE
          </div>
          <h2 className="text-center text-xl font-bold text-primary-blueText text-uppercase pt-8">
            {latestNotice.title.toUpperCase()}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: latestNotice.description }}
            className="p-16 text-justify"
          ></div>
        </>
      )}

      <div className="mt-0 bg-secondary-detailsBackground h-32"></div>

      <div className="text-center font-bold text-3xl text-primary-blueText text-uppercase pt-8">
        PAST NOTICE
      </div>

      {notices?.slice(1).map((notice, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? "" : "bg-secondary-detailsBackground"
          }`}
        >
          <div className="text-center font-bold text-lg text-primary-blueText text-uppercase pt-8">
            {dayjs.unix(notice.dateAndTime.seconds).format("DD/MM/YYYY")}
          </div>
          <h2 className="text-center text-xl font-bold text-primary-blueText text-uppercase pt-8">
            {notice.title.toUpperCase()}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: notice.description }}
            className="p-16 text-justify"
          ></div>
        </div>
      ))}

      <div className="h-32"></div>
    </div>
  );
};
export default NoticesPage;
