import { useState } from "react";

import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import LoadingSpinner from "../../common/LoadingSpinner";

import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { db } from "../../../firebase";
import { collection, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ViewmoreBtn from "../../common/ViewmoreBtn";
import ViewlessBtn from "../../common/ViewlessBtn";

const RelatedEvents: React.FC = () => {
  const [isViewMoreBtnClicked, setIsViewMoreBtnClicked] =
    useState<Boolean>(false);
  const [isLeftbtnClicked, setIsLeftbtnClicked] = useState<Boolean>(false);
  const [isRightbtnClicked, setIsRightbtnClicked] = useState<Boolean>(false);
  const navigate = useNavigate();
  const onReadMoreClick = () => {
    navigate("/events");
    window.scroll(0, 0);
  };
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

  const projectsQuery = query(collection(db, "upcomingEvents"));
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
  const firstThreeProjects = projects ? projects.slice(0, 3) : [];
  return (
    <div className="mt-24">
      <h1
        className=" text-primary-blueText font-extrabold text-4xl md:text-5xl text-center pb-24 text-with-shadow font-perpetua"
        style={{ letterSpacing: "2px" }}
      >
        Related Events
      </h1>
      <div className="w-[100%] z-10">
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
            {firstThreeProjects?.map((item, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col text-primary-blueText cursor-pointer relative"
                >
                  <div className="bg-primary-blueText rounded-full border-2 border-white h-16 w-16 md:h-24 md:w-24 absolute top-0 left-8 z-20 flex items-center justify-center">
                    <h1 className="text-white font-bold font-perpetua">
                      {dayjs.unix(item.dateAndTime.seconds).format("D MMM")}
                    </h1>
                  </div>
                  <div className="w-[100vw] h-[75vh] relative">
                    <img
                      src={item.image}
                      alt="ongoing-project"
                      className="w-[100%] h-[90%] object-fit object-center absolute top-10"
                    />
                  </div>
                  <div className="w-[100%] font-kameron px-6 md:px-16 pt-6">
                    <h1 className="text-black font-bold text-2xl  cursor-pointer py-6 font-kameron">
                      {item.title}
                    </h1>

                    <div className="flex text-xl">
                      <IoLocationOutline className="text-primary-blueText" />
                      <h1 className="ml-2 text-black text-xl font-kameron">
                        {item.location}
                      </h1>
                    </div>
                    <div className="flex my-6 text-xl">
                      <SlCalender />
                      <h1 className="ml-2 text-black font-kameron">
                        {dayjs
                          .unix(item.dateAndTime.seconds)
                          .format("dddd | D MMMM |")}
                      </h1>
                    </div>
                    <div
                      className="w-[95%] text-justify text-2xl text-black"
                      style={{ lineHeight: "34px" }}
                    >
                      {item.description.length > maxLength ? (
                        <>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.description.slice(0, maxLength),
                            }}
                            style={{ lineHeight: "50px" }}
                          ></div>
                          <span
                            className="text-primary-blueText underline cursor-pointer"
                            onClick={onReadMoreClick}
                          >
                            ....Read More
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
                  className="flex flex-col justify-between items-center text-primary-blueText"
                >
                  <div className="w-[100%] h-[60vh]">
                    <img
                      src={item.image}
                      alt="ongoing-project"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[100%] pt-12 mb-24 px-6 md:px-16">
                    <h1 className="text-black font-bold text-2xl md:text-4xl font-playfair text-center pb-8 cursor-pointer">
                      {item.title}
                    </h1>
                    <div className="flex text-xl">
                      <IoLocationOutline />
                      <h1 className="ml-2 text-black">{item.location}</h1>
                    </div>
                    <div className="flex my-3 text-xl">
                      <SlCalender />
                      <h1 className="ml-2 text-black">
                        {dayjs
                          .unix(item.dateAndTime.seconds)
                          .format("dddd | D MMMM |")}
                      </h1>
                    </div>
                    <div
                      className="w-[95%] text-justify text-xl md:text-2xl text-black"
                      style={{ lineHeight: "32px" }}
                    >
                      {item.description.length > maxLength ? (
                        <>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.description.slice(0, maxLength),
                            }}
                          ></div>
                          <span
                            className="text-primary-blueText underline cursor-pointer"
                            onClick={onReadMoreClick}
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
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div onClick={onViewBtnClick} className="my-20">
        {isViewMoreBtnClicked ? <ViewlessBtn /> : <ViewmoreBtn />}
      </div>
    </div>
  );
};
export default RelatedEvents;
