import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import Sponsers from "../../common/Sponsors";
const EventDetailsPage: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const title = state.title;
  const description = state.description;
  const dateAndTime = state.dateAndTime;
  const image = state.image;
  const address = state.location;
  const status = state.eventType;
  return (
    <>
      <div className="relative h-[90vh] w-[100%] overflow-hidden">
        <div className="bg-[url('/img/common/ProjectDetailsBg.png')] bg-cover bg-no-repeat bg-center w-full h-[70vh] flex items-center justify-center">
          <h1 className="w-[100%] text-center uppercase text-white text-3xl md:text-5xl font-kameron">
            {status} Events
          </h1>
        </div>
        <div className="absolute left-[10%] top-[60%] bg-white w-[80%] py-12 px-8 font-kameron text-xl md:text-2xl text-primary-blueText border-2 border-primary-blueText">
          <h1>
            Event : <span className="text-black pl-1">{title}</span>
          </h1>
          <h1>
            Date:{" "}
            <span className="text-black">
              {dayjs.unix(dateAndTime.seconds).format("DD/MM/YYYY (dddd)")}
            </span>
          </h1>
          <h1>
            Location: <span className="text-black pl-1">{address}</span>
          </h1>
        </div>
      </div>
      <div className="h-fit xl:px-24 lg:px-16 md:px-12 px-6 pt-6 my-8">
        <h1 className="text-primary-blueText text-2xl md:text-3xl lg:text-5xl font-kameron pb-16 text-center">
          {title}
        </h1>
        <div className="w-full md:w-1/2 float-right">
          <img src={image} alt="project-image" className="w-full pl-6 h-auto" />
        </div>
        <div
          className="text-justify text-xl "
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <Sponsers />
    </>
  );
};
export default EventDetailsPage;
