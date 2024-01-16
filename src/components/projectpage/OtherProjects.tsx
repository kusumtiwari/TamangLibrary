import { useState, useContext } from "react";

import "react-alice-carousel/lib/alice-carousel.css";

import LoadingSpinner from "../../common/LoadingSpinner";

import { db } from "../../../firebase";
import { DocumentData, collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ViewmoreBtn from "../../common/ViewmoreBtn";
import ViewlessBtn from "../../common/ViewlessBtn";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { UserContext } from "../../context/Context";

const OtherProjects: React.FC = () => {
  const contextValue = useContext(UserContext);
  const handleProjectPageNavigation =
    contextValue?.handleUpComingProjectNavigation;
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
  const handleClick = (obj: DocumentData) => {
    if (handleProjectPageNavigation) {
      handleProjectPageNavigation(obj);
    } else {
      console.error("handleProjectPageNavigation is undefined");
    }
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
  const maxLength: number = 200;
  return (
    <>
      <div className="bg-secondary-detailsBackground mt-12 py-8">
        <h1
          className="uppercase text-primary-blueText font-extrabold text-center text-4xl md:text-5xl py-16 text-with-shadow font-perpetua"
          style={{ letterSpacing: "2px" }}
        >
          other projects
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
                    className="flex flex-col justify-between items-center text-primary-blueText w-[95vw] md:w-[50vw]"
                  >
                    <div className="w-[90%] md:w-[60%] h-[50vh] cursor-pointer flex relative">
                      <img
                        src="/img/common/Union.png"
                        alt="blue-text"
                        className="h-[60%] absolute bottom-0"
                      />
                      <img
                        src={item.image}
                        alt="ongoing-project"
                        className="w-full h-full absolute left-[3%] bottom-[5%] object-cover object-center"
                      />
                    </div>
                    <div className="w-[95%] md:w-[75%] pt-4">
                      <p className="w-[100%] font-playfair font-semibold text-2xl md:text-3xl text-black text-center cursor-pointer py-4 min-h-[14vh]">
                        {item.title}
                      </p>
                      <p className="text-black text-xl py-4 text-justify">
                        {item.description.length < maxLength ? (
                          <>{item.description}</>
                        ) : (
                          <>
                            {item.description.slice(0, maxLength)}
                            <span
                              className="text-primary-blueText underline cursor-pointer pl-1"
                              onClick={() => handleClick(item)}
                            >
                              Read More
                            </span>
                          </>
                        )}
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
                    <div className="w-[80%] md:w-[60%] h-[55vh] cursor-pointer relative">
                      <img
                        src="/img/common/Union.png"
                        alt="blue-line"
                        className="absolute bottom-0"
                      />
                      <img
                        src={item.image}
                        alt="ongoing-project"
                        className="w-full h-full absolute left-[2%] bottom-[4%] object-cover object-center"
                      />
                    </div>
                    <div className="w-[80%] md:w-[60%] pb-12 py-12">
                      <p className="w-[100%] font-playfair text-2xl md:text-3xl font-semibold text-black cursor-pointer text-center py-4">
                        {item.title}
                      </p>
                      <p className="text-black text-xl py-4 text-justify">
                        {item.description.length < maxLength ? (
                          <>{item.description}</>
                        ) : (
                          <>
                            {item.description.slice(0, maxLength)}
                            <span
                              className="text-primary-blueText underline cursor-pointer pl-1"
                              onClick={() => handleClick(item)}
                            >
                              Read More
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div onClick={onViewBtnClick} className="pt-12">
        {isViewMoreBtnClicked ? <ViewlessBtn /> : <ViewmoreBtn />}
      </div>
    </>
  );
};
export default OtherProjects;
