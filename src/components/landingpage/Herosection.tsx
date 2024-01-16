import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import "./../../utils/custom.css";

interface Item {
  id: number;
  image: string;
}

const myItems: Item[] = [
  {
    id: 1,
    image: "/img/herosection/image1.png",
  },
  {
    id: 2,
    image: "/img//herosection/image2.png",
  },
  {
    id: 3,
    image: "/img/herosection/image1.png",
  },
  {
    id: 4,
    image: "/img/herosection/image2.png",
  },
  {
    id: 5,
    image: "/img/herosection/image1.png",
  },
  {
    id: 5,
    image: "/img/herosection/image2.png",
  },
];

const Herosection: React.FC = () => {
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
    <div className="my-12 carousel-container h-[75vh] relative">
      <div className="h-[60vh] rounded-t-lg rounded-b-lg">
        <div className="custom-css">
          <AliceCarousel
            autoPlay
            autoPlayInterval={1500}
            autoWidth
            mouseTracking
            controlsStrategy="alternate"
            disableDotsControls={true}
            renderPrevButton={() => {
              return (
                <button
                  className={`px-1 py-1 mr-10 md:mr-6 lg:mr-0 rounded-md ${
                    isLeftbtnClicked
                      ? "border border-primary-blueText"
                      : "bg-secondary-detailsBackground"
                  }  mt-6 absolute right-[13%] `}
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
                      : "bg-secondary-detailsBackground"
                  } mt-6 absolute right-[9%]`}
                  onClick={onRightbtnClick}
                >
                  <MdArrowForwardIos className="w-5 h-5  text-primary-blueText" />
                </button>
              );
            }}
          >
            {myItems.map((item) => {
              return (
                <div
                  className="carousel-item w-[95vw] md:w-[70vw] lg:w-[40vw] h-[60vh] slanted-div rounded-full"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt="carousel-image"
                    className="w-[95%] h-full"
                  />
                </div>
              );
            })}
          </AliceCarousel>
        </div>
      </div>
      <img
        src="/img/common/decorater2.png"
        alt="decorater"
        className="absolute top-[85%] right-0 w-26 h-26"
      />
    </div>
  );
};
export default Herosection;
