import React from "react";

interface TestimonialsHeaderProps {
  description: string;
  name: string;
}

const TestimonialsHeader: React.FC<TestimonialsHeaderProps> = ({
  description,
  name,
}) => {
  return (
    <div className="pb-2 h-full">
      <div className="h-[95%]">
        <div className="text-center flex justify-center pb-12">
          <img src="/img/common/symbol.png" alt="symbol" className="w-8 h-6" />
        </div>
        <h1 className="font-slabo text-center font-semibold">{description}</h1>
        <p className="py-4 text-right">{name}</p>
      </div>
      <div className="h-0.5 bg-primary-blueText w-full mb-8"></div>
    </div>
  );
};

export default TestimonialsHeader;
