import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
interface Collection {
  id: number;
  image: string;
}

const myCollection: Collection[] = [
  {
    id: 1,
    image: "/Collection-images/collection-img1.png",
  },
  {
    id: 2,
    image: "/Collection-images/collection-img2.png",
  },
  {
    id: 3,
    image: "/Collection-images/collection-img3.png",
  },
  {
    id: 4,
    image: "/Collection-images/collection-img1.png",
  },
  {
    id: 5,
    image: "/Collection-images/collection-img2.png",
  },
];
const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 4},
};

const OurCollection: React.FC = () => {
    const [isLeftbtnClicked, setIsLeftbtnClicked] = useState<Boolean>(false);
    const [isRightbtnClicked, setIsRightbtnClicked] = useState<Boolean>(false);

    const onLeftbtnClick = () => {
        setIsLeftbtnClicked(true);
        setIsRightbtnClicked(false);
    }

    const onRightbtnClick = () => {
        setIsLeftbtnClicked(false);
        setIsRightbtnClicked(true);
    }
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
            return(
                <button className={`px-1 py-1 mr-10 md:mr-6 lg:mr-0 rounded-md ${isLeftbtnClicked ? 'border border-primary-blueText' : 'bg-gray-300'}  mt-6 absolute right-[13%] `} onClick={onLeftbtnClick}>
               <MdArrowBackIos className="w-6 h-6 text-primary-blueText ml-1"/>
                </button>
            )
        }}
        renderNextButton={() => {
            return(
                <button className={`px-1 py-1 rounded-md ${isRightbtnClicked ? 'border border-primary-blueText' : 'bg-gray-300'} mt-6 absolute right-[9%]`} onClick={onRightbtnClick}>
               <MdArrowForwardIos className="w-6 h-6 text-primary-blueText"/>
                </button>
            )
        }}
        >
          {myCollection.map((items) => {
            return (
              <div
                key={items.id}
                className="border border-b-4 border-blue-900 border-l-2 border-r-2 border-transparent"
              >
                <img src={items.image} alt="collection-image" className="w-[85%] md:w-[80%]"/>
              </div>
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default OurCollection;
