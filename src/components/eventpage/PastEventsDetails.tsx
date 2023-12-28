import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { LuClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
const PastEventDetails: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const title = state.title;
  const description = state.description;
  const dateAndTime = state.dateAndTime;
  const image = state.image;
  const address = state.location;
  return (
    <>
      <div className="w-full h-[50vh]">
        <img
          src="/img/common/PastEventsDetailsBg.png"
          alt="upcoming-events-topimage"
          className="w-full h-full"
        />
      </div>
    </>
  );
};
export default PastEventDetails;
