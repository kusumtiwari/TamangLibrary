import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import Sponsers from "../../common/Sponsors";
const ProjectDetailsPage: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const title = state.title;
  const budget = state.budget;
  const description = state.description;
  const endDate = state.endDate;
  const startDate = state.startDate;
  const status = state.status;
  const image = state.image;

  return (
    <div>
      <div className="relative h-[95vh] w-[100%] overflow-hidden">
        <div className="bg-[url('../../public/ProjectDetailsBg.png')] bg-cover bg-no-repeat bg-center w-full h-[70vh] flex items-center justify-center">
          <h1 className="w-[100%] text-center uppercase text-white text-3xl md:text-5xl font-kameron">
            {status} Projects
          </h1>
        </div>
        <div className="absolute left-[5%] top-[50%] bg-white w-[90%] py-12 px-8 font-kameron text-xl md:text-3xl text-primary-blueText border-2 border-primary-blueText">
          <h1>
            Project Title : <span className="text-black pl-1">{title}</span>
          </h1>
          <h1>
            Duration:{" "}
            <span className="text-black pl-1">
              {" "}
              {dayjs.unix(startDate.seconds).format("DD/MM/YYYY")}
            </span>
            <span className="text-black"> - </span>
            <span className="text-black">
              {dayjs.unix(endDate.seconds).format("DD/MM/YYYY")}
            </span>
          </h1>
          <h1>
            Budget: <span className="text-black pl-1">NRS {budget}</span>
          </h1>
        </div>
      </div>
      <h1 className="text-primary-blueText text-2xl md:text-3xl lg:text-5xl font-kameron pb-4 text-center">
        {title}
      </h1>
      <div className="px-8 md:px-12 flex font-playfair justify-between">
        <div className="w-[55%]">
          <p className="text-justify text-xl md:text-2xl py-8">
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </p>
        </div>
        <img src={image} alt="project-image" className="my-6 h-[50vh]" />
      </div>
      <Sponsers />
    </div>
  );
};
export default ProjectDetailsPage;
