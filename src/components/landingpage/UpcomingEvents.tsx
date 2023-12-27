import { useContext } from "react";

import { LuClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";

import { db } from "../../../firebase";
import { Timestamp, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import dayjs from "dayjs";
import LoadingSpinner from "../../common/LoadingSpinner";

import { UserContext } from "../../context/Context";

interface UpcomingEvents {
  id: number;
  image: string;
  title: string;
  description: string;
  location: string;
  dateAndTime: Timestamp;
}

const maxLength = 150;
const UpcomingEvents: React.FC = () => {
  const contextValue = useContext(UserContext);
  const handleEventPageNavigation = contextValue?.handleEventPageNavigation;
  const handleClick = (obj: UpcomingEvents, event: string) => {
    if (handleEventPageNavigation) {
      handleEventPageNavigation(obj, event);
    } else {
      console.error("handleEventPageNavigation is undefined");
    }
  };
  const data = collection(db, "upcomingEvents");
  const [upcomingEvents, upcomingEventsLoading, upcomingEventsError] =
    useCollectionData(data, {
      snapshotListenOptions: { includeMetadataChanges: true },
    });
  return (
    <div className="my-16 px-4 md:px-8 overflow-hidden">
      <h1 className="uppercase text-with-shadow text-primary-blueText text-2xl md:text-4xl lg:text-5xl text-center bg-secondary-detailsBackground py-16 my-8">
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
              className={`flex items-center text-primary-blueText my-24 overflow-hidden flex-col-reverse md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              key={index}
            >
              <div className="w-[95%] md:w-[50%] md:pl-12 h-[55vh]">
                <h1
                  className="text-2xl md:text-3xl mt-8 md:mt-0 cursor-pointer"
                  onClick={() =>
                    handleClick(item as UpcomingEvents, "Upcoming")
                  }
                >
                  {item.title}
                </h1>
                <div className="text-black py-6 w-[100%] md:w-[80%] text-lg text-justify">
                  {item.description.length > maxLength ? (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.description.slice(0, maxLength),
                        }}
                      ></div>
                      <span
                        className="text-primary-blueText underline cursor-pointer"
                        onClick={() =>
                          handleClick(item as UpcomingEvents, "Upcoming")
                        }
                      >
                        Read More
                      </span>
                    </>
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></div>
                  )}
                </div>
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
              <div className="w-[95%] md:w-[45%] h-[55vh]">
                <img
                  src={item.image}
                  alt="upcoming-event"
                  className="w-full h-full cursor-pointer object-cover"
                  onClick={() =>
                    handleClick(item as UpcomingEvents, "Upcoming")
                  }
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
