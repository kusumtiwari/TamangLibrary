import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import dayjs from "dayjs";
import "react-alice-carousel/lib/alice-carousel.css";

import LoadingSpinner from "../../common/LoadingSpinner";

import { db } from "../../../firebase";
import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ViewmoreBtn from "../../common/ViewmoreBtn";
import ViewlessBtn from "../../common/ViewlessBtn";

const CompletedProjects: React.FC = () => {
const matchesMedium = useMediaQuery("(min-width: 768px)");
  const [isViewMoreBtnClicked, setIsViewMoreBtnClicked] =
    useState<Boolean>(false);

  const onViewBtnClick = () => {
    setIsViewMoreBtnClicked(!isViewMoreBtnClicked);
  };
  const projectsQuery = query(
    collection(db, "projects"),
    where("status", "==", "COMPLETED")
  );
  const [projects, loading, error] = useCollectionData(projectsQuery, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!loading && error) {
    return <p>{JSON.stringify(error, null, 2)}</p>;
  }
 
  const firstTwoProjects = projects ? projects.slice(0, 2) : [];
  return (
    <div className="text-primary-blueText my-12 bg-secondary-detailsBackground w-full font-playfair">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center">
        Completed Projects
      </h1>
      <div className="py-12">
        {!isViewMoreBtnClicked ?
          firstTwoProjects?.map((items: any,index:number) => {
            return (
              <div className={`flex items-center py-8 flex-col lg:flex-row justify-between w-[100%] px-12 ${matchesMedium && index % 2 ==0 ? 'flex-row' : 'lg:flex-row-reverse'}`} key={index}>
                <div className="w-[92%] md:w-[60%] lg:w-[40%] h-[45vh] my-auto">
                  <img
                    src={items.image}
                    alt="completed-project"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[95%] md:w-[75%] lg:w-[50%] playfair-display pt-6 lg:pt-0 flex flex-col justify-center">
                  <h1 className="text-primary-blue text-2xl">
                    Project Title:{" "}
                    <span className="text-black">{items.title}</span>
                  </h1>
                  <h1 className="text-primary-blue text-2xl">
                    Duration:{" "}
                    <span className="text-black">
                      {" "}
                      {dayjs.unix(items.startDate.seconds).format("DD/MM/YYYY")}
                    </span>
                    <span className="text-black"> - </span>
                    <span className="text-black">
                      {dayjs.unix(items.endDate.seconds).format("DD/MM/YYYY")}
                    </span>
                  </h1>
                  <h1 className="text-primary-blue text-2xl">
                    Budget:<span className="text-black pl-1">NRS {items.budget}</span>
                  </h1>
                  <p className="py-8 text-justify text-black font-semibold">{items.description}</p>
                </div>
              </div>
            );
          }) :  projects?.map((items: any,index:number) => {
            return (
              <div className={`flex items-center flex-col lg:flex-row justify-between w-[100%] px-12 ${matchesMedium && index % 2 ==0 ? 'flex-row' : 'flex-row-reverse'}`} key={index}>
                <div className="w-[92%] md:w-[60%] lg:w-[40%] h-[45vh] my-auto">
                  <img
                    src={items.image}
                    alt="completed-project"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[95%] md:w-[75%] lg:w-[50%] playfair-display pt-6 lg:pt-0">
                  <h1 className="text-primary-blue text-2xl">
                    Project Title:{" "}
                    <span className="text-black">{items.title}</span>
                  </h1>
                  <h1 className="text-primary-blue text-2xl">
                    Duration:{" "}
                    <span className="text-black">
                      {" "}
                      {dayjs.unix(items.startDate.seconds).format("DD/MM/YYYY")}
                    </span>
                    <span className="text-black"> - </span>
                    <span className="text-black">
                      {dayjs.unix(items.endDate.seconds).format("DD/MM/YYYY")}
                    </span>
                  </h1>
                  <h1 className="text-primary-blue text-2xl">
                    Budget:<span className="text-black pl-1">NRS {items.budget}</span>
                  </h1>
                  <p className="py-8 text-justify text-black font-semibold">{items.description}</p>
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
export default CompletedProjects;
