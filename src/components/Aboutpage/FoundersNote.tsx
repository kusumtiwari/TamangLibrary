import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

interface FoundersNoteContent {
    id: number;
    image: string;
    description: string;
    name : string,
    category: string,
  }
const myFoundersNoteContent : FoundersNoteContent[] = [
    {
        id : 1,
        image : '/FoundersNoteimg1.png',
        description : 'Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lore. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lore.',
        name : 'Amrit Yonjan Tamang',
        category : 'Linguist - Tamang Language'
    },
    {
        id : 2,
        image : '/Testimonial-image1.png',
        description : 'Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lore. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lore.',
        name : 'Sagar Parajuli',
        category : 'Maithili'
    },
    {
        id : 3,
        image : '/FoundersNoteimg1.png',
        description : 'Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lorem ut porta vitae. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lore. Lorem ipsum dolor sit amet consectetur. Adipiscing sollicitudin odio aliquam eget in in non. Nec congue consectetur congue aliquam tellus. Enim netus enim lore.',
        name : 'Amrit Yonjan Tamang',
        category : 'Linguist - Tamang Language'
    },

]
const FoundersNote : React.FC = () => {
    return(
        <div>
          <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-16 text-center text-primary-blueText">
        Founder's Note
        </h1>
        <div className="bg-secondary-detailsBackground border-t-2 border-b-2 border-primary-blueText py-6 md:py-12 px-4 md:px-12">
        <AliceCarousel
  disableButtonsControls
  infinite
  mouseTracking
>
  {myFoundersNoteContent.map((item) => {
    return (
      <div key={item.id} className="flex justify-between items-center text-primary-blueText flex-col-reverse md:flex-row">
        <div className='w-[90%] md:w-[60%] pt-8 lg:mt-0'>
        <p className='font-kameron text-xl text-black w-[100%] md:w-[90%] text-justify'>{item.description}</p>
       <div className='flex flex-col items-center justify-center pt-16'>
        <h1 className='text-black pb-2 text-2xl'>{item.name}</h1>
        <h1 className='text-black text-xl'>{item.category}</h1>
       </div>
        </div>
       <div className='w-[90%] md:w-[35%]'>
        <img src={item.image} alt="founder-image" className='w-full h-[50vh]'/>
       </div>
      </div>
    );
  })}
</AliceCarousel>
        </div>
        </div>
    )
}
export default FoundersNote;