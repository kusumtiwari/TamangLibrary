import { useContext } from "react";
import { UserContext } from "../../context/Context";

interface Teams {
  id: number;
  image: string;
  name: string;
  position: string;
  quote: string;
  biography: string;
}

const myTeams: Teams[] = [
  {
    id: 1,
    image: "/img/Team-members/Team-member1.png",
    name: "Saroj Tamang",
    position: "co - Founder and director",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non.",
    biography:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.",
  },
  {
    id: 2,
    image: "/img/Team-members/Team-member2.png",
    name: "Raj Kumar Thapa",
    position: "Chief Executive Officer (CEO)",
    quote: "Never stop believing in cats",
    biography:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.",
  },
  {
    id: 3,
    image: "/img/Team-members/Team-member3.png",
    name: "Reena Adhikari",
    position: "Chief Operation Officer (COO)",
    quote: "are you in touch with your deepest and darkest of what",
    biography:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.",
  },
  {
    id: 4,
    image: "/img/Team-members/Team-member1.png",
    name: "Shyam Kumar",
    position: "co - Founder and director",
    quote: "young alive religious and beautiful",
    biography:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.",
  },
  {
    id: 5,
    image: "/img/Team-members/Team-member2.png",
    name: "Ashish Gurung",
    position: "Manager",
    quote: "good food good mood it is",
    biography:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.",
  },
];
const OurTeam: React.FC = () => {
  const contextValue = useContext(UserContext);
  const handleAboutPageNavigation = contextValue?.handleAboutPageNavigation;
  const handleClick = (
    name: string,
    position: string,
    quote: string,
    bio: string,
    id: number
  ) => {
    if (handleAboutPageNavigation) {
      handleAboutPageNavigation(name, position, quote, bio, id);
    } else {
      console.error("handleAboutPageNavigation is undefined");
    }
  };
  return (
    <div className="text-primary-blueText flex flex-col justify-center items-center w-full">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center mb-8">
        Our Teams
      </h1>
      <div className="flex flex-wrap items-center justify-center px-6 lg:px-12">
        {myTeams.map((items) => {
          return (
            <div
              className="uppercase w-[100%] md:w-[45%] lg:w-[32%] mb-14 cursor-pointer"
              key={items.id}
              onClick={() =>
                handleClick(
                  items.name,
                  items.position,
                  items.quote,
                  items.biography,
                  items.id
                )
              }
            >
              <img
                src={items.image}
                alt="team-member"
                className="w-[90%] md:w-[75%] lg:w-[70%] h-[45vh]"
              />
              <h1 className="py-2 font-semibold text-2xl mt-3">{items.name}</h1>
              <h1 className="text-base">{items.position}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurTeam;
