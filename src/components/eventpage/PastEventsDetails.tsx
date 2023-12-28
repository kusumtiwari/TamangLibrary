import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { LuClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
import Sponsers from "../../common/Sponsors";
import Partners from "../../common/Partners";

import { useState } from "react";

const PastEventDetails: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const title = state.title;
  const description = state.description;
  const dateAndTime = state.dateAndTime;
  const image = state.image;
  const address = state.location;
  const glimpse = state.glimpse;
  const firstSixImages = glimpse.slice(0, 6);

  const [isbtnClicked, setIsbtnClicked] = useState(false);
  const onBtnClick = () => setIsbtnClicked(!isbtnClicked);
  return (
    <>
      <div className="w-full h-[50vh]">
        <img
          src="/img/common/PastEventsDetailsBg.png"
          alt="upcoming-events-topimage"
          className="w-full h-full"
        />
      </div>
      <div className="pl-6">
        <h1 className="text-2xl text-primary-blueText uppercase font-semibold pt-12 md:px-4 pb-4">
          {title}
        </h1>
        <div className="flex justify-between md:w-[100%] lg:w-[80%] flex-col lg:flex-row md:px-4">
          <div className="flex items-center text-xl">
            <SlCalender className="text-primary-blueText md:w-6 lg:w-5  md:h-6 lg:h-5" />
            <h1 className="ml-2">
              {dayjs.unix(dateAndTime.seconds).format("dddd | DD MMMM YYYY")}
            </h1>
          </div>
          <div className="flex items-center text-xl my-6">
            <LuClock className="text-primary-blueText  md:w-6 lg:w-5  md:h-6 lg:h-5" />
            <h1 className="ml-2">
              {dayjs.unix(dateAndTime.seconds).format("hh:mm A")}
            </h1>
          </div>
          <div className="flex items-center text-xl">
            <MdOutlineLocationOn className="text-primary-blueText  md:w-6 lg:w-5  md:h-6 lg:h-5" />
            <h1 className="ml-2">{address}</h1>
          </div>
        </div>
      </div>
      <Partners />
      <div className="h-fit px-10 md:px-24 py-12">
        <div className="w-full md:w-1/3 float-right mb-4 md:mb-0">
          <img
            src={image}
            alt="pastevents-details"
            className="w-full h-[45vh] md:pl-6"
          />
        </div>
        <div
          className="text-justify text-xl w-full"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <div className="my-24 px-12 h-fit">
        <h1 className="text-with-shadow text-primary-blueText text-3xl md:text-5xl text-center py-8 ">
          GLIMPSE OF THE EVENT
        </h1>
        <div className="bg-secondary-detailsBackground py-6">
          <div className="flex justify-center items-center flex-wrap w-full py-8">
            {!isbtnClicked
              ? firstSixImages.map((item: string, index: number) => {
                  return (
                    <div
                      className="w-[100%] md:w-[50%] lg:w-[30%] mx-4 my-6"
                      key={index}
                    >
                      <img
                        src={item}
                        alt="glimpse-image"
                        className="w-full h-[40vh]"
                      />
                    </div>
                  );
                })
              : glimpse.map((item: string, index: number) => {
                  return (
                    <div className="w-[30%] mx-4 my-6" key={index}>
                      <img
                        src={item}
                        alt="glimpse-image"
                        className="w-full h-[40vh]"
                      />
                    </div>
                  );
                })}
          </div>
          <div
            className="flex items-center justify-center"
            onClick={onBtnClick}
          >
            <button className="text-primary-blueText border-2 border-primary-blueText px-3 py-2 rounded-lg hover:text-white hover:bg-primary-blueText ease-in-out duration-300 transform">
              {isbtnClicked ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </div>
      <Sponsers />
    </>
  );
};
export default PastEventDetails;
