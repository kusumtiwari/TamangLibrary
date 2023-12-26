import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";

interface Ongoingprojects {
  id: number;
  image: string;
  title: string;
  description: string;
}

const myOngoingprojects: Ongoingprojects[] = [
  {
    id: 1,
    image: "/img//Ongoingproject-img1.png",
    title:
      "Lost And Found - The Struggle to preserve Nepal Linguistic Heritage",
    description:
      "At last count, in 2019, Nepal had 129 spoken languages, but even as new ones are identified, others are becoming extinct. At least 24 of the languages and dialects in Nepal have become “endangered,” and the next three ones on the verge of disappearing are Dura, Kusunda, and Tillung, each of which has only one speaker left. Learn more",
  },

  {
    id: 2,
    image: "/img/LibraryDetailsImage/LibraryDetailsimg1.png",
    title: "Language preservation practices in nepal",
    description:
      "The study focused on language preservation practices of Nepal in term of legal and constitutional provisions and its implication. Policy formulation is not only sufficient for preserving endangered languages because implementation mechanisms cannot effectively function in developing and under developed nation like Nepal.",
  },
];
const OngoingProjects: React.FC = () => {
  const [isLeftbtnClicked, setIsLeftbtnClicked] = useState<Boolean>(false);
  const [isRightbtnClicked, setIsRightbtnClicked] = useState<Boolean>(false);

  const onLeftbtnClick = () => {
    setIsLeftbtnClicked(true);
    setIsRightbtnClicked(false);
  };

  const onRightbtnClick = () => {
    setIsLeftbtnClicked(false);
    setIsRightbtnClicked(true);
  };
  return (
    <div className="my-12 text-primary-blueText px-4 md:px-12 lg:px-16">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl text-center py-16">
        ongoing projects
      </h1>

      <AliceCarousel
        infinite
        mouseTracking
        disableDotsControls
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
        {myOngoingprojects.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-between flex-col md:flex-row"
            >
              <div className="w-[82%] md:w-[40%] h-[50vh] mb-12 md:mb-0">
                <img
                  src={item.image}
                  alt="ongoing-project"
                  className="w-full h-full"
                />
              </div>

              <div className="bg-secondary-detailsBackground py-12 px-4 md:px-8 text-black w-[82%] md:w-[50%]">
                <h1 className="text-2xl md:text-3xl font-playfair pb-4 ">
                  {item.title}
                </h1>
                <p className="font-kameron text-base">{item.description}</p>
              </div>
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default OngoingProjects;
