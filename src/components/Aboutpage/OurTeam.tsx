import { useContext } from "react";
import { UserContext } from "../../context/Context";

interface Teams {
    id : number,
    image: string,
    name : string,
    position: string,
}

const myTeams : Teams[] = [
    {
        id: 1,
        image: '/Team-members/Team-member1.png',
        name: 'Saroj Tamang',
        position: 'co - Founder and director',
    },
    {
        id: 2,
        image: '/Team-members/Team-member2.png',
        name: 'Raj Kumar Thapa',
        position: 'Chief Executive Officer (CEO)',
    },
    {
        id: 3,
        image: '/Team-members/Team-member3.png',
        name: 'Reena Adhikari',
        position: 'Chief Operation Officer (COO)',
    },
    {
        id: 4,
        image: '/Team-members/Team-member1.png',
        name: 'Shyam Kumar',
        position: 'co - Founder and director',
    },
    {
        id: 5,
        image: '/Team-members/Team-member2.png',
        name: 'Ashish Gurung',
        position: 'Manager',
    }

]
const OurTeam : React.FC = () => {
    const contextValue = useContext(UserContext);
    const handleAboutPageNavigation = contextValue?.handleAboutPageNavigation;
    console.log(handleAboutPageNavigation);
    const handleClick = (name: string) => {
        if (handleAboutPageNavigation) {
          handleAboutPageNavigation(name);
        } else {
          console.error("handleAboutPageNavigation is undefined");
        }
      };
    return(
        <div className="text-primary-blueText flex flex-col justify-center items-center">
              <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center mb-8">Our Teams</h1>
              <div className="flex flex-wrap items-center justify-center px-6 lg:px-12">
              {
                myTeams.map((items) => {
                    return(
                     <div className="uppercase w-[100%] md:w-[45%] lg:w-[32%] mb-14 cursor-pointer" key={items.id} onClick={() => handleClick(items.name)}>
                       <img src={items.image} alt="team-member" className="w-[90%] md:w-[75%] lg:w-[60%] h-[45vh]"/>
                       <h1 className="py-2 font-semibold text-2xl mt-3">{items.name}</h1>
                       <h1 className="text-base">{items.position}</h1>
                     </div>
                    )
                })
              }
              </div>
        </div>
    )
}
export default OurTeam;