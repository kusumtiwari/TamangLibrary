const Welcome: React.FC = () => {
	return (
		<div className="text-center">
			<h1
				className="uppercase text-primary-blueText text-4xl lg:text-5xl px-8 w-full font-thin text-with-shadow font-perpetua opacity-100"
				style={{ letterSpacing: "2px" }}
			>
				Welcome to <span className="opacity-100 font-bold">Tamang library</span>
			</h1>
			<div className="flex justify-between">
				<img
					src="/img/common/Decorater.png"
					alt="decorater"
					className="w-[10%] h-[26%] md:w-[8%] md:h-[28vh] mt-12"
				/>
				<p
					className="font-kameron w-[100%] mr-6 md:mr-0 md:text-center py-14 px-6 md:px-24 lg:px-36 text-base"
					style={{ lineHeight: "32px" }}
				>
					The Tamang Library is committed to preserving, celebrating, and
					promoting the rich cultural heritage and language of the different
					community in Nepal. Our mission is to serve as a hub for Nepali
					cultural resources, fostering a sense of identity and pride among
					Nepalese people and providing valuable educational and research
					opportunities.
				</p>
			</div>
		</div>
	);
};
export default Welcome;
