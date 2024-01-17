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
			<div className="h-[85%] md:h-[82%]">
				<div className="text-center flex justify-center pb-12">
					<img
						src="/img/common/symbol.png"
						alt="symbol"
						className="w-12 h-10 md:w-[22px] md:h-[33px]"
					/>
				</div>
				<h1
					className="font-slabo text-center font-semibold"
					style={{ lineHeight: "30px" }}
				>
					{description}
				</h1>
				<p className="py-4 text-right">{name}</p>
			</div>
			<div className="h-0.5 bg-primary-blueText w-full mb-8"></div>
		</div>
	);
};

export default TestimonialsHeader;
