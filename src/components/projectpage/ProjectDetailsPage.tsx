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
    <>
      <div className="relative h-[90vh] w-[100%]">
        <div className="bg-[url('../../public/img/common/ProjectDetailsBg.png')] bg-cover bg-no-repeat bg-center w-full h-[70vh] flex items-center justify-center">
          <h1 className="w-[100%] text-center uppercase text-white text-3xl md:text-5xl font-kameron">
            {status} Projects
          </h1>
        </div>
        <div className="absolute left-[10%] top-[60%] bg-white w-[80%] p-4 lg:p-12 md:p   -12 font-kameron text-xl md:text-2xl text-primary-blueText border-2 border-primary-blueText">
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
      <div className=" h-fit xl:px-36 lg:px-24 md:px-12 px-6 pt-6 ">
        <h1 className="text-primary-blueText text-2xl md:text-3xl lg:text-5xl font-kameron pb-4 text-center">
          {title}
        </h1>
        <div className="w-full md:w-1/2 float-right">
          <img
            src={image}
            alt="project-image"
            className="w-full h-auto md:pl-6"
          />
        </div>
        <div
          className="text-justify text-xl"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <Sponsers />
    </>
  );
};
export default ProjectDetailsPage;
