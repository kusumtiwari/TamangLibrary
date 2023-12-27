import { useState, useLayoutEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface Items {
  id: number;
  image: string;
  year: number;
  title: string;
  description: string;
}
const myItems: Items[] = [
  {
    id: 1,
    image: "/img/herosection/image1.png",
    year: 2021,
    title: "Establishment of Tamang Library",
    description:
      "The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal. research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity",
  },
  {
    id: 2,
    image: "/img/herosection/image2.png",
    year: 2022,
    title: "Establishment of Tamang Library",
    description:
      "The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal. research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity",
  },
  {
    id: 3,
    image: "/img/herosection/image1.png",
    year: 2023,
    title: "Establishment of Tamang Library",
    description:
      "The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal. research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity",
  },
];
const LegacyLandmarks: React.FC = () => {
  const [activeIndex, setactiveIndex] = useState<number | null>(1);
  const changeActiveindex = (index: number) => setactiveIndex(index);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="my-16 text-primary-blueText px-8 md:px-12 w-full">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center">
        Legacy Landmarks
      </h1>
      <AliceCarousel
        autoWidth
        mouseTracking
        disableButtonsControls
        disableDotsControls={!isSmallScreen}
      >
        {myItems.map((item, index) => (
          <div
            className={`flex w-[90vw] md:w-[48vw] lg:w-[32vw] cursor-pointer ${
              index === 1 ? "flex-col-reverse" : "flex-col"
            } ${index === activeIndex ? "opacity-100" : "opacity-40"}`}
            onMouseOver={() => changeActiveindex(index)}
          >
            <div className="flex">
              <div
                className={`flex ${
                  index === 1 ? "flex-col-reverse mt-10 ml-2" : "flex-col"
                }`}
              >
                <h1 className="font-bold text-2xl my-2">{item.year}</h1>
                <div className="w-4 h-4 rounded-full bg-primary-blueText ml-1" />
                <img
                  src="/img/common/DottedLines.png"
                  alt="dotted-lines"
                  className="h-[30vh] w-[0.1vw] ml-3"
                />
                <img
                  src="/img/common/Circle.png"
                  alt="circle"
                  className="w-7 h-7"
                />
              </div>
              <div className="w-[100%] mt-10 h-[30vh]">
                {index == activeIndex && (
                  <div className="border border-primary-blueText h-0.2 w-[100%]"></div>
                )}
                <h1 className="font-bold py-2 text-lg">{item.title}</h1>
                <p
                  className="w-[90%] py-4 text-justify"
                  style={{ lineHeight: "30px" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
            <div className="flex">
              {index !== activeIndex && (
                <img
                  src="/img/common/straightline.png"
                  alt="straight-line"
                  className={`h-[20vh] ml-2`}
                />
              )}
              <img
                src="/img/herosection/image1.png"
                alt="image"
                className="h-[35vh] w-[98%] mt-4"
              />
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
};

export default LegacyLandmarks;
