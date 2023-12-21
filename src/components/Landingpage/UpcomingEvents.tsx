import { LuClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";

import { db } from "../../../firebase";
import { Timestamp, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import dayjs from "dayjs";
import LoadingSpinner from "../../common/LoadingSpinner";

interface UpcomingEvents {
  id: number;
  image: string;
  title: string;
  description: string;
  location: string;
  dateAndTime: Timestamp;
}

const UpcomingEvents: React.FC = () => {
  const data = collection(db, "upcomingEvents");
  const [upcomingEvents, upcomingEventsLoading, upcomingEventsError] =
    useCollectionData(data, {
      snapshotListenOptions: { includeMetadataChanges: true },
    });
 return (
    <div className="my-16 px-4 md:px-8">
      <h1 className="uppercase text-primary-blueText text-2xl md:text-4xl lg:text-5xl text-center bg-secondary-detailsBackground py-16 my-8">
        Upcoming Events
      </h1>

      {upcomingEventsLoading ? (
        <LoadingSpinner />
      ) : (
        !upcomingEventsError &&
        upcomingEvents?.map((item, index) => {
          const jsDate = item.dateAndTime.toDate();

          return (
            <div
              className="flex items-center text-primary-blueText my-24 overflow-hidden flex-col-reverse md:flex-row"
              key={index}
            >
              <div className="w-[95%] md:w-[50%] md:pl-12">
                <h1 className="text-2xl md:text-3xl mt-8 md:mt-0">
                  {item.title}
                </h1>
                <p className="text-black py-6 w-[100%] md:w-[80%] text-lg">
                  {item.description}
                </p>
                <div className="flex items-center">
                  <MdOutlineLocationOn className="mr-2 " />
                  <p>{item.location}</p>
                </div>
                <div className="flex items-center py-6">
                  <SlCalender className="mr-2" />
                  <p>{dayjs(jsDate).format("MMMM D, YYYY")}</p>
                </div>
                <div className="flex items-center">
                  <LuClock className="mr-2" />
                  <p>
                    {dayjs(jsDate).format("h:mm A")} ||{" "}
                    {dayjs(jsDate).format("dddd")}
                  </p>
                </div>
              </div>
              <div className="w-[95%] md:w-[45%] lg:w-[42%] h-[50vh]">
                <img
                  src={item.image}
                  alt="upcoming-event"
                  className="w-full h-full"
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UpcomingEvents;
