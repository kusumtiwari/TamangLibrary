import { useState, useContext } from "react";
import dayjs from "dayjs";
import "react-alice-carousel/lib/alice-carousel.css";
import LoadingSpinner from "../../common/LoadingSpinner";

import { db } from "../../../firebase";
import { DocumentData, collection, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ViewmoreBtn from "../../common/ViewmoreBtn";
import ViewlessBtn from "../../common/ViewlessBtn";
import { UserContext } from "../../context/Context";
const PastEvents: React.FC = () => {
  const contextValue = useContext(UserContext);
  const handleEventPageNavigation = contextValue?.handlePastEventPageNavigation;
  const [isViewMoreBtnClicked, setIsViewMoreBtnClicked] =
    useState<Boolean>(false);
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
  const handleClick = (obj: DocumentData) => {
    if (handleEventPageNavigation) {
      handleEventPageNavigation(obj);
    } else {
      console.error("handleEventPageNavigation is undefined");
    }
  };
  return (
    <div>
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center text-primary-blueText font-playfair">
        Past Events
      </h1>
      <div className="py-12 px-8 flex flex-wrap">
        {!isViewMoreBtnClicked
          ? firstSixProjects?.map((items: DocumentData, index: number) => {
              return (
                <div
                  className={`flex py-8 flex-col justify-between w-[100%] lg:w-[33%] px-4 md:px-12 `}
                  key={index}
                >
                  <div className="w-[100%] h-[45vh] relative">
                    <img
                      src="/img/common/Blueline-2.png"
                      alt="blue-line"
                      className="absolute bottom-0 left-[79%]"
                    />
                    <img
                      src={items.image}
                      alt="completed-project"
                      className="w-full h-full absolute bottom-2 object-cover cursor-pointer"
                      onClick={() => handleClick(items)}
                    />
                  </div>
                  <div className="w-[100%] playfair-display pt-6 lg:pt-0 flex flex-col justify-center">
                    <h1
                      className="text-primary-blue text-2xl text-primary-blueText cursor-pointer"
                      onClick={() => handleClick(items)}
                    >
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
                          <span
                            className="text-primary-blueText underline cursor-pointer"
                            onClick={() => handleClick(items)}
                          >
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
          : projects?.map((items: DocumentData, index: number) => {
              return (
                <div
                  className={`flex items-center flex-col lg:flex-row justify-between px-4 md:px-12 py-12   }`}
                  key={index}
                >
                  <div className="w-[95%] md:w-[60%] lg:w-[40%] h-[45vh] my-auto relative">
                    <img
                      src={items.image}
                      alt="completed-project"
                      className="w-full h-full object-cover"
                      onClick={() => handleClick(items)}
                    />
                  </div>
                  <div className="w-[95%] md:w-[75%] lg:w-[50%] playfair-display pt-6 lg:pt-0">
                    <h1
                      className="text-primary-blue text-2xl text-primary-blueText cursor-pointer"
                      onClick={() => handleClick(items)}
                    >
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
                          <span
                            className="text-primary-blueText underline cursor-pointer"
                            onClick={() => handleClick(items)}
                          >
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
      <div onClick={onViewBtnClick} className="pb-12">
        {isViewMoreBtnClicked ? <ViewlessBtn /> : <ViewmoreBtn />}
      </div>
    </div>
  );
};

export default PastEvents;
