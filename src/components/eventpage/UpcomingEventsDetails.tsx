import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { LuClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";

import RegistrationForm from "../eventpage/RegistrationForm";
const UpcomingEventDetails: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const title = state.title;
  const description = state.description;
  const dateAndTime = state.dateAndTime;
  const image = state.image;
  const address = state.location;
  // const firstHalfLength = Math.ceil(description.length / 2);
  // const firstHalf = description.slice(0, firstHalfLength);
  // const secondHalf = description.slice(firstHalfLength);
  return (
    <>
      {/* bug: cant make the child div absolute , while made absolute, the second child i.e the one below the child which is supposed to be absolute comes right before the top image  */}
      <div className="h-fit relative">
        <div className="w-full h-[50vh]">
          <img
            src="/img/common/UpcomingEventsBg.png"
            alt="upcoming-events-topimage"
            className="w-full h-full"
          />
        </div>
        <div className="bg-gray-100 py-12 px-8 shadow-md mx-6 md:mx-12 my-16 z-20 h-fit absolute top-9">
          <h1 className="text-2xl text-primary-blueText uppercase font-semibold pt-4 md:px-4">
            {title}
          </h1>
          <div className="flex justify-between md:w-[100%] lg:w-[80%] flex-col lg:flex-row py-6 md:px-4">
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
          <div className=" h-fit px-4">
            <div className="w-full md:w-1/2 float-right mb-4 md:mb-0">
              <img
                src={image}
                alt="project-image"
                className="w-full h-auto md:pl-6"
              />
            </div>
            <div
              className="text-justify text-xl w-full"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
          <div className="flex items-center justify-center w-full pt-12">
            <button className="text-primary-blueText border-2 border-primary-blueText px-3 py-2 rounded-lg hover:text-white hover:bg-primary-blueText ease-in-out duration-300 transform">
              Register to participate
            </button>
          </div>
        </div>
      </div>
      <RegistrationForm />
    </>
  );
};
export default UpcomingEventDetails;
