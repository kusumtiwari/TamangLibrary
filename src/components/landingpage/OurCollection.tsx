import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
interface Collection {
  id: number;
  image: string;
  category: string;
  pages: number;
}

const myCollection: Collection[] = [
  {
    id: 1,
    image: "/img/Collection-images/collectionimage1.png",
    category: "Novel",
    pages: 80,
  },
  {
    id: 2,
    image: "/img/Collection-images/collectionimage2.png",
    category: "history",
    pages: 100,
  },
  {
    id: 3,
    image: "/img/Collection-images/collectionimage3.png",
    category: "poem",
    pages: 400,
  },
  {
    id: 4,
    image: "/img/Collection-images/collectionimage1.png",
    category: "Novel",
    pages: 80,
  },
  {
    id: 5,
    image: "/img/Collection-images/collectionimage2.png",
    category: "history",
    pages: 100,
  },
];
const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 4 },
};

const OurCollection: React.FC = () => {
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
    <div className="my-16 relative h-[90vh]">
      <h1 className="uppercase text-primary-blueText text-2xl md:text-4xl lg:text-5xl text-center h-[60%]  pt-12 bg-secondary-detailsBackground">
        Collection
      </h1>
      <div className="bg-transparent lg:mx-6 absolute top-[30%] w-[98%]">
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
                }  mt-6 absolute right-[13%] `}
                onClick={onLeftbtnClick}
              >
                <MdArrowBackIos className="w-6 h-6 text-primary-blueText ml-1" />
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
                } mt-6 absolute right-[9%]`}
                onClick={onRightbtnClick}
              >
                <MdArrowForwardIos className="w-6 h-6 text-primary-blueText" />
              </button>
            );
          }}
        >
          {myCollection.map((items) => {
            return (
              <div
                key={items.id}
                className="border border-b-4 border-blue-900 border-l-2 border-r-2 border-transparent relative"
              >
                <img
                  src={items.image}
                  alt="collection-image"
                  className="w-[94%] md:w-[75%] h-[50vh]"
                />
                <img
                  src="/img/Collection-images/Collection-image-blueline.png"
                  alt="blue-line"
                  className="absolute bottom-0  h-[30vh] w-[94%] md:w-[75%]"
                />
                <div className="border-2 border-black text-black text-base text-center font-semibold uppercase py-3 w-[40%] absolute top-[50%] left-[15%] bg-white">
                  {items.category} ({items.pages})
                </div>
              </div>
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default OurCollection;
