import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface Sponsers {
  id: number;
  image: string;
}

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 4 },
};
const mySponsers: Sponsers[] = [
  {
    id: 1,
    image: "/Sponsers/Sponsers3.png",
  },
  {
    id: 2,
    image: "/Sponsers/Sponsers2.png",
  },
  {
    id: 3,
    image: "/Sponsers/Sponsers1.png",
  },
  {
    id: 4,
    image: "/Sponsers/Sponsers4.png",
  },
  {
    id: 5,
    image: "/Sponsers/Sponsers1.png",
  },
  {
    id: 2,
    image: "/Sponsers/Sponsers2.png",
  },
];

const Sponsers: React.FC = () => {
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
    <div className="my-8 mb-32 overflow-hidden">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl text-center py-12 text-primary-blueText">
        Sponsored
      </h1>
      <div className="bg-secondary-detailsBackground py-12 relative flex items-center justify-center px-auto w-[100vw] h-[40vh]">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls={true}
          renderPrevButton={() => {
            return (
              <button
                className={`px-1 py-1 mr-10 md:mr-6 lg:mr-0 rounded-md ${
                  isLeftbtnClicked
                    ? "border border-primary-blueText"
                    : "bg-gray-300"
                }  mt-6 absolute right-[13%] top-[130%]`}
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
                } mt-6 absolute right-[10%] top-[130%]`}
                onClick={onRightbtnClick}
              >
                <MdArrowForwardIos className="w-5 h-5 text-primary-blueText" />
              </button>
            );
          }}
        >
          {mySponsers.map((items) => {
            return (
              <div
                key={items.id}
                className="border border-b-4 border-blue-900 border-l-2 border-r-2 border-transparent flex items-center justify-center"
              >
                <img
                  src={items.image}
                  alt="collection-image"
                  className="w-1/2"
                />
              </div>
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default Sponsers;
