import { useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface MemberImage {
  id: number;
  image: string;
}

const myMemberImage: MemberImage[] = [
  {
    id: 1,
    image: "/Team-members/Team-member1.png",
  },
  {
    id: 2,
    image: "/Team-members/Team-member2.png",
  },
  {
    id: 3,
    image: "/Team-members/Team-member3.png",
  },
  {
    id: 4,
    image: "/Team-members/Team-member1.png",
  },
  {
    id: 5,
    image: "/Team-members/Team-member2.png",
  },
];
const OurTeamDetails: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const name = state?.name;
  const position = state?.position;
  const quote = state?.quote;
  const biography = state?.biography;
  const id = state?.id;
  const navigate = useNavigate();
  const onBackClick = () => navigate("/about");
  return (
    <div className="w-full text-primary-blueText overflow-hidden">
      <div className="bg-secondary-detailsBackground w-full py-16 px-4 md:px-12 lg:px-24">
        <div
          className="flex items-center justify-start text-lg cursor-pointer"
          onClick={onBackClick}
        >
          <IoMdArrowBack className="w-4 h-4 mr-1" />
          <h1>Back</h1>
        </div>
        <div className="w-[100%] text-right">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">{name}</h1>
          <h1 className="text-xl md:text-2xl font-thin">{position}</h1>
          <div className="flex justify-end">
            <ImLinkedin className="w-8 h-10" />
            <FaFacebook className="w-8 h-10 mx-4" />
            <FaXTwitter className="w-8 h-10" />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[100%] px-16 h-[50vh] relative flex-col md:flex-row">
        <div className="w-[100%] md:w-[30%]">
          {myMemberImage.map((items) => {
            if (items.id === id) {
              return (
                <div
                  className=" mb-8 h-[90%] absolute left-0 md:left-[5%] bottom-[12%] md:bottom-[30%] px-4 md:px-0"
                  key={items.id}
                >
                  <img
                    src={items.image}
                    alt="team-member-image"
                    className="w-full"
                  ></img>
                </div>
              );
            }
          })}
        </div>
        <div className="md:mt-24 md:h-[24%] hidden md:block">
          <img src="/symbol.png" alt="inverted-comma" />
          <h1 className="py-2 text-xl">{quote}</h1>
          <img src="/symbol2.png" alt="inverted-comma" className="ml-auto" />
        </div>
      </div>
      <div className="block md:hidden px-16 mt-12">
        <img src="/symbol.png" alt="inverted-comma" />
        <h1 className="py-2 text-xl">{quote}</h1>
        <img src="/symbol2.png" alt="inverted-comma" className="" />
      </div>
      <div className="flex flex-col w-[100%] px-8 md:px-16">
        <h1 className="font-thin py-12 text-right text-3xl uppercase">
          Biography
        </h1>
        <p className="my-8 w-[100%] text-justify text-black text-lg">
          {biography}
        </p>
      </div>
      <div className="text-black flex flex-col justify-end py-12 w-full px-8 md:px-16">
        <div className="w-full md:w-auto md:px-4 flex justify-end">
          <h1 className="text-primary-blueText text-2xl font-thin uppercase">
            get in touch
          </h1>
        </div>
        <div className="w-full md:w-auto md:px-4 flex justify-end">
          <h1 className="text-xl">abc@gmail.com</h1>
        </div>
        <div className="w-full md:w-auto md:px-4 flex justify-end">
          <h1 className="text-xl">12404014227</h1>
        </div>
      </div>
    </div>
  );
};

export default OurTeamDetails;
