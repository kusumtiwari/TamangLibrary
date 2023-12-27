import { useLocation } from "react-router-dom";

import DonationPage from "./DonationPage";
const UpcomingProjectDetailsPage = () => {
  const location = useLocation();
  const { state } = location;
  const title = state.title;
  const description = state.description;
  const image = state.image;
  return (
    <div>
      <div className="w-full h-[65vh] bg-[url('../../img/common/UpcomingProjectsBg.png')] flex items-center justify-center ">
        <h1 className="text-center text-white text-4xl md:text-5xl font-semibold">
          Upcoming Projects
        </h1>
      </div>
      <div className="py-8 px-8 md:px-12">
        <h1 className="text-2xl text-primary-blueText font-bold">{title}</h1>
        <p className="text-black pb-8 pt-4" style={{ lineHeight: "32px" }}>
          {description}
        </p>
        <div className="w-[100%] h-[55vh]">
          <img
            src={image}
            alt="upcoming-project-image"
            className="w-full h-full"
          />
        </div>
        <p className="text-black pt-8" style={{ lineHeight: "32px" }}>
          {description}
        </p>
      </div>
      <h1 className="py-16 text-primary-blueText font-bold text-2xl md:text-3xl uppercase text-center w-[100%]">
        Projects Awaiting Your Support
      </h1>
      <DonationPage />
    </div>
  );
};
export default UpcomingProjectDetailsPage;
