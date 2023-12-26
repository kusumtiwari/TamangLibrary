import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useMediaQuery } from "@react-hook/media-query";
import _ from "lodash";

interface Testimonials {
  id: number;
  image: string;
  description: string;
  name: string;
}

interface TestimonialsImagesProps {
  myTestimonials: Testimonials[];
  onTestimonialChange: (index: number) => void;
  selectedTestimonial: number;
}

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 5 },
};

const TestimonialsImages: React.FC<TestimonialsImagesProps> = ({
  myTestimonials,
  onTestimonialChange,
  selectedTestimonial,
}) => {
  const matchesMedium = useMediaQuery("(min-width: 768px)");
  const testimonialToFlash = _.cloneDeep(myTestimonials);
  const selectedTestimonialItem = testimonialToFlash[selectedTestimonial];
  if (selectedTestimonial !== 2 && matchesMedium) {
    testimonialToFlash.splice(selectedTestimonial, 1);
    testimonialToFlash.splice(2, 0, selectedTestimonialItem);
  }
  return (
    <div className="px-4 md:px-8 lg:px-24 h-full mt-4">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls={true}
      >
        {testimonialToFlash.map((items, index) => {
          return (
            <div
              key={items.id}
              className={`rounded-full border-2 cursor-pointer ${
                matchesMedium
                  ? index === 2
                    ? "opacity-100 w-36 h-36 border-primary-blueText"
                    : "opacity-20 w-20 h-20"
                  : "opacity-100 w-24 h-24 border-primary-blueText"
              }`}
              onMouseOver={() => onTestimonialChange(index)}
              onClick={() => onTestimonialChange(index)}
            >
              <img
                src={items.image}
                alt="testimonial-image"
                className="w-full h-full rounded-full"
              />
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default TestimonialsImages;
