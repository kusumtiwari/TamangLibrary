import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";
import { useState } from 'react';

interface Item {
    id: number;
    image: string;
}

const myItems : Item[] = [
    {
        id: 1,
        image: '/herosection/image1.png',
    },
    {
        id: 2,
        image: '/herosection/image2.png',
    },
    {
        id: 3,
        image: '/herosection/image1.png',
    },
    {
        id: 4,
        image: '/herosection/image2.png',
    },
    {
        id: 5,
        image: '/herosection/image1.png',
    },
    {
        id: 5,
        image: '/herosection/image2.png',
    },
]

const Herosection: React.FC = () => {
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
    return(
        <div className='my-12 carousel-container relative h-[75vh]'>
        <AliceCarousel
        autoPlay
        autoPlayInterval={1500}
        autoWidth
        mouseTracking
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
        {
       myItems.map((item) => {
        return(
            <div className='md:ml-4 lg:ml-8 carousel-item w-[95vw] md:w-[70vw] lg:w-[40vw] h-[60vh] slanted-div' key={item.id}>
                <img src={item.image} alt="carousel-image" className='w-[95%] h-full'/>
            </div>
        )
       })
        }
    </AliceCarousel>
    </div>
    )
}
export default Herosection;