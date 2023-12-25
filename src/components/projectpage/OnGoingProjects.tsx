import { db } from "../../../firebase";
import { DocumentData, collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "../../common/LoadingSpinner";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState, useContext } from "react";
import ViewmoreBtn from "../../common/ViewmoreBtn";
import ViewlessBtn from "../../common/ViewlessBtn";

import { UserContext } from "../../context/Context";
const OnGoingProjects: React.FC = () => {
  const contextValue = useContext(UserContext);
  const handleProjectPageNavigation = contextValue?.handleProjectPageNavigation;
  const handleClick = (obj: DocumentData) => {
    if (handleProjectPageNavigation) {
      handleProjectPageNavigation(obj);
    } else {
      console.error("handleProjectPageNavigation is undefined");
    }
  };
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
    where("status", "==", "ONGOING")
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
  const maxLength: number = 800;
  return (
    <div className="text-primary-blueText my-12">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center">
        OnGoing Projects
      </h1>
      <div>
        {!isViewMoreBtnClicked ? (
          <AliceCarousel
            disableDotsControls
            infinite
            mouseTracking
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
            {/* TODO: need to fix */}

            {projects?.map((item, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center text-primary-blueText cursor-pointer"
                >
                  <div
                    className="w-[95%] md:w-[60%] h-[60vh]"
                    onClick={() => handleClick(item)}
                  >
                    <img
                      src={item.image}
                      alt="ongoing-project"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[90%] md:w-[60%] pt-12">
                    <h1
                      className="text-black font-bold text-2xl md:text-4xl font-playfair text-center pb-8 cursor-pointer"
                      onClick={() => handleClick(item)}
                    >
                      {item.title}
                    </h1>
                    <p className="w-[100%] text-justify font-playfair text-xl font-semibold text-black">
                      {item.description.length > maxLength ? (
                        <>
                          {item.description.slice(0, maxLength)}
                          <span
                            className="text-primary-blueText underline cursor-pointer pl-2"
                            onClick={() => handleClick(item)}
                          >
                            Read More
                          </span>
                        </>
                      ) : (
                        item.description
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </AliceCarousel>
        ) : (
          <>
            {/* TODO: need to fix */}
            {/* @ts-ignore */}
            {projects?.map((item: OnGoingProjects, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center text-primary-blueText"
                >
                  <div
                    className="w-[60%] h-[50vh]"
                    onClick={() => handleClick(item)}
                  >
                    <img
                      src={item.image}
                      alt="ongoing-project"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[100%] md:w-[60%] pt-12">
                    <h1
                      className="text-black font-bold text-2xl md:text-4xl font-playfair text-center pb-8 cursor-pointer"
                      onClick={() => handleClick(item)}
                    >
                      {item.title}
                    </h1>
                    <p className="w-[100%] text-justify font-playfair text-xl font-semibold text-black">
                      {item.description.length > maxLength ? (
                        <>
                          {item.description.slice(0, maxLength)}
                          <span
                            className="text-primary-blueText underline cursor-pointer pl-2"
                            onClick={() => handleClick(item)}
                          >
                            Read More
                          </span>
                        </>
                      ) : (
                        item.description
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div onClick={onViewBtnClick} className="py-8">
        {isViewMoreBtnClicked ? <ViewlessBtn /> : <ViewmoreBtn />}
      </div>
    </div>
  );
};
export default OnGoingProjects;
