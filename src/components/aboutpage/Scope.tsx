import { useState } from "react";
import ScopeContent from "./ScopeContent";
import ScopeDetails from "./ScopeDetails";
import { useMediaQuery } from "@react-hook/media-query";
interface ScopeInfo {
  id: number;
  title: string;
  image: string;
  description: string;
}

const myScopeInfo: ScopeInfo[] = [
  {
    id: 1,
    title: "free education",
    image: "/herosection/image1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Learn more",
  },
  {
    id: 2,
    title: "Language presrvation",
    image: "/herosection/image2.png",
    description:
      "The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal. research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity",
  },
  {
    id: 3,
    title: "free membership",
    image: "/herosection/image2.png",
    description:
      "The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal. Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity and pride among Nepalese people and providing valuable educational and research opportunities. The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal. Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity and pride among Nepalese people and providing valuable educational and research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity and pride among Nepalese people and providing valuable educational and research opportunities.",
  },
  {
    id: 4,
    title: "documentation",
    image: "/herosection/image1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lore. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lore.",
  },
];

const Scope: React.FC = () => {
  const matchesMedium = useMediaQuery("(min-width: 768px)");
  const [selectedId, setSelectedId] = useState(1);
  const onScopeTitleHovered = (newId: number) => {
    setSelectedId(newId);
  };

  return (
    <div className="bg-secondary-detailsBackground py-8 text-primary-blueText my-20">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-4 text-center">
        Scope
      </h1>
      <div
        className={`${
          matchesMedium
            ? "flex items-center flex-col-reverse md:flex-row h-[100vh]"
            : ""
        }`}
      >
        {matchesMedium && (
          <ScopeContent
            myScopeInfo={myScopeInfo}
            onScopeTitleHovered={onScopeTitleHovered}
            selectedId={selectedId}
          />
        )}

        <ScopeDetails selectedId={selectedId} myScopeInfo={myScopeInfo} />
      </div>
    </div>
  );
};
export default Scope;
