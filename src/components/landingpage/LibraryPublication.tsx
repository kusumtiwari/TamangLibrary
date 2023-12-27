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
const myBookPubication: BookPublication[] = [
  {
    id: 1,
    image: "/img/LibraryPubBook.png",
    title: "language preservation practise in nepal",
    author: "Amrit Yonjan, Krishna Prasad Dahal",
    date: "October 2023",
    description:
      "The study focused on language preservation practices of Nepal in term of legal and constitutional provisions and its implication. Policy formulation is not only sufficient for preserving endangered languages because implementation mechanisms cannot effectively function in developing and under developed nation like Nepal.",
  },
  {
    id: 2,
    image: "/img/LibraryPubBook.png",
    title: "National Wide Recognized",
    author: "George Washington",
    date: "Septemper 2020",
    description:
      "ALl inside our amsterdam it hides watery eyes.The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal.",
  },
];

const LibraryPublication: React.FC = () => {
  return (
    <div className="my-12">
      <h1 className="uppercase text-primary-blueText text-2xl md:text-4xl lg:text-5xl text-center text-with-shadow font-thin">
        Library Publication
      </h1>
      <div className="bg-secondary-detailsBackground my-20 px-8 md:px-24 pt-4 pb-16">
        <div className="flex justify-center py-6 items-center text-primary-blueText mb-16">
          <IoNewspaperOutline className="text-3xl mr-5 " />
          <h1 className="text-3xl">LATEST</h1>
        </div>
        <AliceCarousel disableButtonsControls infinite mouseTracking>
          {myBookPubication.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between items-center text-primary-blueText flex-col-reverse lg:flex-row"
              >
                <div className="">
                  <h1 className="uppercase text-2xl text-center lg:text-justify py-4 md:py-0 md:text-3xl">
                    {item.title}
                  </h1>
                  <div className="flex uppercase py-6">
                    <h1 className="pr-3 text-black text-base">Author:</h1>
                    <h1 className="text-sm font-bold">{item.author}</h1>
                  </div>
                  <h1 className="pb-4 text-black">{item.date}</h1>
                  <p
                    className="leading-[1.5] lg:w-[80%] text-base text-black text-justify"
                    style={{ lineHeight: "32px" }}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="h-[28vh] w-[40%]">
                  <img
                    src={item.image}
                    alt="Publication image"
                    className="h-full w-full"
                  />
                </div>
              </div>
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default LibraryPublication;
