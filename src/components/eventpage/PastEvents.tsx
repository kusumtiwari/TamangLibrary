import { useState, useContext } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import dayjs from "dayjs";
import "react-alice-carousel/lib/alice-carousel.css";
import { Timestamp } from "firebase/firestore/lite";
import LoadingSpinner from "../../common/LoadingSpinner";

import { db } from "../../../firebase";
import { collection, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ViewmoreBtn from "../../common/ViewmoreBtn";
import ViewlessBtn from "../../common/ViewlessBtn";
import { UserContext } from "../../context/Context";

interface PastEvents {
  dateAndTime: Timestamp;
  description: string;
  image: string;
  location: string;
  title: string;
}
const PastEvents: React.FC = () => {
  const contextValue = useContext(UserContext);
  const handleEventPageNavigation = contextValue?.handleEventPageNavigation;
  const handleClick = (obj: PastEvents, event: string) => {
    if (handleEventPageNavigation) {
      handleEventPageNavigation(obj, event);
    } else {
      console.error("handleEventPageNavigation is undefined");
    }
  };
  const [isViewMoreBtnClicked, setIsViewMoreBtnClicked] =
    useState<Boolean>(false);
  const matchesMedium = useMediaQuery("(min-width: 768px)");
  const onViewBtnClick = () => {
    setIsViewMoreBtnClicked(!isViewMoreBtnClicked);
  };
  const projectsQuery = query(collection(db, "pastEvents"));
  const [projects, loading, error] = useCollectionData(projectsQuery, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!loading && error) {
    return <p>{JSON.stringify(error, null, 2)}</p>;
  }
  const maxLength: number = 500;
  const firstSixProjects = projects ? projects.slice(0, 6) : [];
  return (
    <div>
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center text-primary-blueText font-playfair">
        Past Events
      </h1>
      <div className="py-12 px-8 flex flex-wrap">
        {!isViewMoreBtnClicked
          ? firstSixProjects?.map((items: any, index: number) => {
              return (
                <div
                  className={`flex py-8 flex-col justify-between w-[100%] lg:w-[30%] px-4 md:px-12 `}
                  key={index}
                >
                  <div className="w-[100%] h-[45vh] relative">
                    <img
                      src="/Blueline-2.png"
                      alt="blue-line"
                      className="absolute bottom-1 left-[80%]"
                    />
                    <img
                      src={items.image}
                      alt="completed-project"
                      className="w-full h-full absolute bottom-[6%] left-[3%]"
                      onClick={() => handleClick(items, "past")}
                    />
                  </div>
                  <div className="w-[100%] playfair-display pt-6 lg:pt-0 flex flex-col justify-center">
                    <h1 className="text-primary-blue text-2xl text-primary-blueText">
                      {items.title}
                    </h1>
                    <h1 className="text-primary-blue text-2xl">
                      {dayjs
                        .unix(items.dateAndTime.seconds)
                        .format("dddd | Do MMMM, YYYY | hh:mmA")}
                    </h1>
                    <div className="py-8 text-justify text-black font-semibold">
                      {items.description.length > maxLength ? (
                        <>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: items.description.slice(0, maxLength),
                            }}
                          ></div>
                          <span className="text-primary-blueText underline cursor-pointer pl-2">
                            Read More
                          </span>
                        </>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: items.description,
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          : projects?.map((items: any, index: number) => {
              return (
                <div
                  className={`flex items-center flex-col lg:flex-row justify-between px-4 md:px-12 py-12   }`}
                  key={index}
                >
                  <div className="w-[95%] md:w-[60%] lg:w-[40%] h-[45vh] my-auto relative">
                    <img
                      src="/Blueline-2.png"
                      alt="blue-line"
                      className="absolute bottom-1 left-[86%]"
                    />
                    <img
                      src={items.image}
                      alt="completed-project"
                      className="w-full h-full absolute bottom-[5%]"
                      onClick={() => handleClick(items, "past")}
                    />
                  </div>
                  <div className="w-[95%] md:w-[75%] lg:w-[50%] playfair-display pt-6 lg:pt-0">
                    <h1 className="text-primary-blue text-2xl text-primary-blueText">
                      {items.title}
                    </h1>
                    <h1 className="text-primary-blue text-2xl">
                      {dayjs
                        .unix(items.dateAndTime.seconds)
                        .format("dddd | Do MMMM, YYYY | hh:mmA")}
                    </h1>
                    <div className="py-8 text-justify text-black font-semibold">
                      {items.description.length > maxLength ? (
                        <>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: items.description.slice(0, maxLength),
                            }}
                          ></div>
                          <span className="text-primary-blueText underline cursor-pointer pl-2">
                            Read More
                          </span>
                        </>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: items.description,
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div onClick={onViewBtnClick} className="py-8">
        {isViewMoreBtnClicked ? <ViewlessBtn /> : <ViewmoreBtn />}
      </div>
    </div>
  );
};

export default PastEvents;
