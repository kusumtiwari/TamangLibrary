import { useState } from "react";

import "react-alice-carousel/lib/alice-carousel.css";

import { Timestamp } from "firebase/firestore/lite";
import LoadingSpinner from "../../common/LoadingSpinner";

import { db } from "../../../firebase";
import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ViewmoreBtn from "../../common/ViewmoreBtn";
import ViewlessBtn from "../../common/ViewlessBtn";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface UpcomingProjects {
  budget: number;
  description: string;
  endDate: Timestamp;
  image: string;
  startDate: Timestamp;
  status: string;
  title: string;
}
const UpcomingProjects: React.FC = () => {
  const [isViewMoreBtnClicked, setIsViewMoreBtnClicked] =
    useState<Boolean>(false);
  const [isLeftbtnClicked, setIsLeftbtnClicked] = useState<Boolean>(false);
  const [isRightbtnClicked, setIsRightbtnClicked] = useState<Boolean>(false);

  const onViewBtnClick = () => {
    setIsViewMoreBtnClicked(!isViewMoreBtnClicked);
  };
  const onLeftbtnClick = () => {
    setIsLeftbtnClicked(true);
    setIsRightbtnClicked(false);
  };

  const onRightbtnClick = () => {
    setIsLeftbtnClicked(false);
    setIsRightbtnClicked(true);
  };
  const projectsQuery = query(
    collection(db, "projects"),
    where("status", "==", "UPCOMING")
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
  return (
    <div className="my-12 py-12 px-4 md:px-8 lg:px-12">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center">
        Upcoming Projects
      </h1>
      <div>
      {!isViewMoreBtnClicked ? (
          <AliceCarousel
            disableDotsControls
            infinite
            mouseTracking
            autoWidth
            renderPrevButton={() => {
              return (
                <button
                  className={`px-1 py-1 mr-10 md:mr-6 lg:mr-0 rounded-md ${
                    isLeftbtnClicked
                      ? "border border-primary-blueText"
                      : "bg-gray-300"
                  }  mt-6 absolute top-[95%] right-[16%]`}
                  onClick={onLeftbtnClick}
                >
                  <MdArrowBackIos className="w-5 h-5 text-primary-blueText ml-1" />
                </button>
              );
            }}
            renderNextButton={() => {
              return (
                <button
                  className={`px-1 py-1 rounded-md ${
                    isRightbtnClicked
                      ? "border border-primary-blueText"
                      : "bg-gray-300"
                  } mt-6 absolute top-[95%] right-[13%]`}
                  onClick={onRightbtnClick}
                >
                  <MdArrowForwardIos className="w-5 h-5 text-primary-blueText" />
                </button>
              );
            }}
          >
            {projects?.map((item, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center text-primary-blueText w-[95vw] md:w-[45vw]"
                >
                  <div className="w-[90%] md:w-[60%] h-[50vh]">
                    <img
                      src={item.image}
                      alt="ongoing-project"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[95%] md:w-[60%] pt-12">
                    <p className="w-[100%] text-justify font-playfair text-xl font-semibold text-black">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </AliceCarousel>
        ) : (
          <>
            {projects?.map((item, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center text-primary-blueText w-[95vw]"
                >
                  <div className="w-[80%] md:w-[60%] h-[55vh]">
                    <img
                      src={item.image}
                      alt="ongoing-project"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[80%] md:w-[60%] pb-12 py-6">
                    <p className="w-[100%] font-playfair text-xl font-semibold text-black">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div onClick={onViewBtnClick} className="py-12">
        {isViewMoreBtnClicked ? <ViewlessBtn /> : <ViewmoreBtn />}
      </div>
    </div>
  );
};
export default UpcomingProjects;
