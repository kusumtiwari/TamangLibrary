import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TiPen } from "react-icons/ti";
import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";

interface NewArrivals {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
  description: string;
  rating: number;
}

const myNewArrivals: NewArrivals[] = [
  {
    id: 1,
    image: "/Newarrivals/book1.png",
    title: "raniban",
    author: "Krishna Murari gautam",
    price: 500,
    description:
      "Krishna Murari Gautam or popularly known as the Chatyang Master is a writer, poet, comedian and social activist of Nepal. He founded a NGO called Ageing Nepal dedicated to the betterment of the ageing population which was awarded in 2020.",
    rating: 4,
  },
  {
    id: 2,
    image: "/Newarrivals/book2.png",
    title: "Palpasa Cafe",
    author: "Narayan Wagle, Shyam Kumar Rai",
    price: 800,
    description:
      "A novel by Nepali author Narayan Wagle. It tells te story of an artist, Drishya, during the height of the Nepalese Civil War.",
    rating: 2,
  },
  {
    id: 3,
    image: "/Newarrivals/book3.png",
    title: "Ritu bichar",
    author: "lekhnath paudyal",
    price: 1500,
    description:
      "Lekhnath Paudyal is regarded as the founding father of modern Nepali poetry litrerature (Kabi Shiromani) in the twentieth. The best of Lekhnath's poems adhered to the old-fashioned conventions of Sanskrit poetics (kavya).",
    rating: 3,
  },
  {
    id: 4,
    image: "/Newarrivals/book1.png",
    title: "raniban",
    author: "Krishna Murari gautam",
    price: 500,
    description:
      "Krishna Murari Gautam or popularly known as the Chatyang Master is a writer, poet, comedian and social activist of Nepal. He founded a NGO called Ageing Nepal dedicated to the betterment of the ageing population which was awarded in 2020.",
    rating: 4,
  },
  {
    id: 5,
    image: "/Newarrivals/book2.png",
    title: "Palpasa Cafe",
    author: "Narayan Wagle, Shyam Kumar Rai",
    price: 800,
    description:
      "A novel by Nepali author Narayan Wagle. It tells te story of an artist, Drishya, during the height of the Nepalese Civil War.",
    rating: 5,
  },
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const NewArrivals: React.FC = () => {
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
    <div className="bg-secondary-detailsBackground text-primary-blueText px-16 py-8">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl text-center py-12">
        New Arrivals
      </h1>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        renderPrevButton={() => {
          return (
            <button
              className={`px-1 py-1 mr-10 md:mr-6 lg:mr-0 rounded-md ${
                isLeftbtnClicked
                  ? "border border-primary-blueText"
                  : "bg-gray-300"
              }  mt-6 absolute bottom-0 right-[20%]`}
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
              } mt-6 absolute bottom-0 right-[16%]`}
              onClick={onRightbtnClick}
            >
              <MdArrowForwardIos className="w-5 h-5 text-primary-blueText" />
            </button>
          );
        }}
      >
        {myNewArrivals.map((items) => {
          return (
            <div key={items.id} className="lg:ml-10">
              <img
                src={items.image}
                alt="newarrival-book"
                className="my-8 w-[75%] md:w-[55%]"
              />
              <div className="flex items-center text-xl uppercase">
                <IoBookOutline className="w-8 h-8" />
                <h1 className="ml-2">{items.title}</h1>
              </div>
              <div className="flex items-center py-5 text-xl uppercase">
                <TiPen className="w-8 h-8" />
                <h1 className="ml-2">{items.author}</h1>
              </div>
              <h1 className="text-xl font-bold">NPR {items.price}</h1>
              <h1 className="w-[95%] md:w-[90%] py-5 text-justify">
                {items.description}
              </h1>
              <div className="flex mb-8">
                <div className="flex">
                  {Array.from({ length: Number(items.rating) }).map(
                    (item, index) => (
                      <LiaStarSolid
                        key={index}
                        className="text-primary-blueText h-5 w-5"
                      />
                    )
                  )}
                </div>
                <div className="flex">
                  {Array.from({ length: Number(5 - items.rating) }).map(
                    (item, index) => (
                      <LiaStarSolid
                        key={index}
                        className="text-gray-600 h-5 w-5"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};
export default NewArrivals;
