import { useState } from "react";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsImages from "./TestimonialsImages";
interface Testimonials {
  id: number;
  image: string;
  description: string;
  name: string;
}

const myTestimonials: Testimonials[] = [
  {
    id: 1,
    image: "/Testimonial-image1.png",
    description:
      "When I embarked on the journey of preparing my thesis, I wasn’t sure where to start. Then, I discovered Tamang Library. Not only did I find the materials that were instrumental for my research, but I was also greeted with invaluable guidance and support from the wonderful people there. The resources and the staff have played a pivotal role in shaping my thesis. Thank you, Tamang Library, for being more than just a library - yore a beacon for every academic and researcher. Highly recommended!",
    name: "-Tayami lama | Social Worker",
  },
  {
    id: 2,
    image: "/LibraryDetailsimg1.png",
    description:
      "Krishna Murari Gautam or popularly known as the Chatyang Master is a writer, poet, comedian and social activist of Nepal. He founded a NGO called Ageing Nepal dedicated to the betterment of the ageing population which was awarded in 2020. When I embarked on the journey of preparing my thesis, I wasnt sure where to start. Then, I discovered Tamang Library. Not only did I find the materials that were instrumental for my research, but I was also greeted with invaluable guidance and support from the wonderful people there. The resources and the staff have played a pivotal role in shaping my thesis. Thank you, Tamang Library, for being more than just a library - yore a beacon for every academic and researcher. Highly recommended!",
    name: "Krishna Murari Gautam ",
  },
  {
    id: 3,
    image: "/LibraryDetailsimg2.png",
    description:
      "A novel by Nepali author Narayan Wagle. It tells te story of an artist, Drishya, during the height of the Nepalese Civil War. When I embarked on the journey of preparing my thesis, I wasnt sure where to start. Then, I discovered Tamang Library. Not only did I find the materials that were instrumental for my research, but I was also greeted with invaluable guidance and support from the wonderful people there. The resources and the staff have played a pivotal role in shaping my thesis. Thank you, Tamang Library, for being more than just a library - youre a beacon for every academic and researcher. Highly recommended!",
    name: " Narayan Wagle",
  },
  {
    id: 4,
    image: "/LibraryDetailsimg3.png",
    description:
      "Lekhnath Paudyal is regarded as the founding father of modern Nepali poetry litrerature (Kabi Shiromani) in the twentieth. The best of Lekhnaths poems adhered to the old-fashioned conventions of Sanskrit poetics (kavya).When I embarked on the journey of preparing my thesis, I wasnt sure where to start. Then, I discovered Tamang Library. Not only did I find the materials that were instrumental for my research, but I was also greeted with invaluable guidance and support from the wonderful people there. The resources and the staff have played a pivotal role in shaping my thesis. Thank you, Tamang Library, for being more than just a library - youre a beacon for every academic and researcher. Highly recommended!",
    name: "Lekhnath Paudya",
  },
  {
    id: 5,
    image: "/Testimonial-image1.png",
    description:
      "When I embarked on the journey of preparing my thesis, I wasnot sure where to start. Then, I discovered Tamang Library",
    name: "Krishna Murari Gautam ",
  },
];

const Testimonials: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(2);
  const onTestimonialChange = (index: number) => {
   
      setSelectedTestimonial(index);
  };

  return (
    <div className="my-16">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl text-center py-16">
        ongoing projects
      </h1>
      <div className="px-8 md:px-16 lg:px-24 py-16 bg-secondary-detailsBackground">
        <div className="h-[40vh]">
        <TestimonialsHeader
          description={myTestimonials[selectedTestimonial].description}
          name={myTestimonials[selectedTestimonial].name}
        />

        </div>
        <div className="h-[20vh]">
        <TestimonialsImages
          myTestimonials={myTestimonials}
          onTestimonialChange={onTestimonialChange}
          selectedTestimonial={selectedTestimonial}
        />
        </div>
       
      </div>
    </div>
  );
};

export default Testimonials;
