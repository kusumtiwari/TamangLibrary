import { IoBookOutline, IoNewspaperOutline } from "react-icons/io5";
import { PiNotebookBold } from "react-icons/pi";
import { LuStickyNote } from "react-icons/lu";

interface LibraryItems {
  id: number;
  title: string;
  number: number;
  description: string;
  icon: JSX.Element;
}

const myLibraryItems1: LibraryItems[] = [
  {
    id: 1,
    title: "books",
    number: 2000,
    description:
      "The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal.",
    icon: <IoBookOutline />,
  },

  {
    id: 2,
    title: "magazines",
    number: 450,
    description:
      "The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal.",
    icon: <IoNewspaperOutline />,
  },
];

const myLibraryItems2: LibraryItems[] = [
  {
    id: 3,
    title: "Journal",
    number: 15,
    description:
      "The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal.",
    icon: <PiNotebookBold />,
  },

  {
    id: 4,
    title: "documentation",
    number: 450,
    description:
      "The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal.",
    icon: <LuStickyNote />,
  },
];

const LibraryDetails: React.FC = () => {
  return (
    <div className="px-8 md:px-12 lg:px-16 py-12 flex justify-between text-primary-blueText flex-col md:flex-row">
      <div className="grid grid-cols-1 gap-2 md:w-[40%]">
        {myLibraryItems1.map((item) => {
          return (
            <div className="mb-12" key={item.id}>
              <div className="flex items-center text-3xl md:justify-end py-4">
                <h1 className="uppercase">
                  {item.title} ({item.number})
                </h1>
                <div className="ml-2">{item.icon}</div>
              </div>
              <p className="text-base">{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="flex my-8 md:my-0 md:flex-col">
        <img src="/LibraryDetailsimg3.png" alt="library-detail" className="my-6"/>
        <img src="/LibraryDetailsimg1.png" alt="library-detail" className="mb-3"/>
        <img src="/LibraryDetailsimg2.png" alt="library-detail" className="mb-3"/>
      </div>

      <div className="grid grid-cols-1 gap-2 md:w-[40%]">
        {myLibraryItems2.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex text-3xl py-4">
                <h1 className="uppercase">
                  {item.title} ({item.number})
                </h1>
                <div className="ml-2">{item.icon}</div>
              </div>
              <p className="text-base">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LibraryDetails;
