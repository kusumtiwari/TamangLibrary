import { MdOutlineLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LuClock } from "react-icons/lu";

interface UpcomingEvents {
  id: number;
  image: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
}

const myUpcomingEvents: UpcomingEvents[] = [
  {
    id: 1,
    image: "/upcomingEvents/eventsimg1.png",
    title: "Annual General Meeting (AGM)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Learn more",
    location : "INDRENI BANQUET, Kathmandu 44600",
    date : "6th Ashoj, 2080",
    time : "11:00 PM - 2:00 PM || Sunday"
  },
  {
    id: 2,
    image: "/upcomingEvents/eventsimg2.png",
    title: "Pre - Dashain Program",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae.Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Learn more",
    location : "Heritage Garden, M8M2+4QX, Milap Rd, Lalitpur 44600",
    date : "9th Ashoj, 2080",
    time : "11:00 PM - 2:00 PM || Sunday"
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <div className="my-16 px-4 md:px-8">
      <h1 className="uppercase text-primary-blueText text-2xl md:text-4xl lg:text-5xl text-center bg-secondary-detailsBackground py-16 my-8">
        Upcoming Events
      </h1>
      {
        myUpcomingEvents.map((item) => {
            return(
                <div className="flex items-center text-primary-blueText my-24 overflow-hidden flex-col-reverse md:flex-row" key={item.id}>
                     <div className="w-[95%] md:w-[50%] md:pl-12">
                        <h1 className="text-2xl md:text-3xl mt-8 md:mt-0">{item.title}</h1>
                        <p className="text-black py-6 w-[100%] md:w-[80%] text-lg">{item.description}</p>
                        <div className="flex items-center">
                        <MdOutlineLocationOn className="mr-2 "/>
                        <p>{item.location}</p>
                        </div>
                        <div className="flex items-center py-6">
                            <SlCalender className="mr-2"/>
                            <p>{item.date}</p>
                        </div>
                        <div className="flex items-center">
                            <LuClock className="mr-2"/>
                            <p>{item.time}</p>
                        </div>
                     </div>
                     <div className="w-[95%] md:w-[45%] lg:w-[42%] h-[50vh]">
                     <img src={item.image} alt="upcoming-event" className="w-full h-full"/>
                     </div>
                 
                </div>
            )
        })
      }
    </div>
  );
};
export default UpcomingEvents;
