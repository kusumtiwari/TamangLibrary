import { useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface BookPublication {
  id: number;
  image: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

const myBookPublication: BookPublication[] = [
  {
    id: 1,
    image: "/img/LibraryPubBook.png",
    title: "Language Preservation Practice in Nepal",
    author: "Amrit Yonjan, Krishna Prasad Dahal",
    date: "October 2023",
    description:
      "The study focused on language preservation practices of Nepal in terms of legal and constitutional provisions and their implication. Policy formulation is not only sufficient for preserving endangered languages because implementation mechanisms cannot effectively function in developing and underdeveloped nations like Nepal.",
  },
  {
    id: 2,
    image: "/img/LibraryPubBook.png",
    title: "National Wide Recognized",
    author: "George Washington",
    date: "September 2020",
    description:
      "All inside our Amsterdam it hides watery eyes. The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different communities in Nepal.",
  },
];

const LibraryPublication: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChanged = (e: { item: number }) => {
    setActiveIndex(e.item);
  };

  const renderPrevButton = () => {
    return (
      <button
        className={`${
          activeIndex === 0
            ? "w-4 h-4 bg-primary-carouselBtnBg"
            : "w-[70px] bg-primary-wideCarouselBtn "
        }  text-white py-2 rounded-full mt-8`}
      ></button>
    );
  };

  const renderNextButton = (): JSX.Element => {
    return (
      <button
        className={`${
          activeIndex === 1
            ? " w-4 h-4 bg-primary-blueText"
            : "w-[70px] bg-primary-wideCarouselBtn"
        }  text-white py-2 rounded-full mt-8`}
      ></button>
    );
  };

  return (
    <div className="font-kameron">
      <h1
        className="uppercase text-primary-blueText text-4xl lg:text-5xl text-center text-with-shadow font-perpetua"
        style={{ letterSpacing: "4px" }}
      >
        Library Publication
      </h1>
      <div className="bg-secondary-detailsBackground my-20 px-8 md:px-24 pt-10 pb-16">
        <div className="flex justify-center py-6 items-center text-primary-blueText mb-4">
          <IoNewspaperOutline className="text-3xl mr-5 " />
          <h1 className="text-3xl">LATEST</h1>
        </div>
        <AliceCarousel
          disableDotsControls
          infinite
          mouseTracking
          onSlideChanged={handleSlideChanged}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        >
          {myBookPublication.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-primary-blueText flex-col-reverse lg:flex-row w-full"
            >
              <div className="lg:w-[60%]">
                <h1 className="uppercase text-2xl text-center lg:text-left py-4 md:py-0 md:text-3xl lg:w-[70%]">
                  {item.title}
                </h1>
                <div className="flex uppercase py-6 items-center lg:w-[70%]">
                  <h1 className="pr-3 text-black text-base font-semibold">
                    Author:
                  </h1>
                  <h1 className="text-xl font-bold">{item.author}</h1>
                </div>
                <h1 className="pb-4 text-black">{item.date}</h1>
                <p
                  className="leading-[1.5] lg:w-[100%] text-base text-black text-justify"
                  style={{ lineHeight: "32px" }}
                >
                  {item.description}
                </p>
              </div>
              <div className="h-[40vh] w-full lg:w-[20%] rounded-lg bg-white flex items-center justify-center my-3 shadow-md cursor-pointer hover:scale-105 transition ease-in-out duration-400">
                <img
                  src={item.image}
                  alt="Publication image"
                  className="h-[90%] w-[90%] shadow-container object-fit"
                />
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default LibraryPublication;
