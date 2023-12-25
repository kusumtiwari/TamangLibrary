const Intro: React.FC = () => {
  return (
    <div className="my-8 relative">
      <img
        src="/img/common/decorater2.png"
        alt="decorater"
        className="w-18 h-20 absolute right-0 top-0"
      />
      <div className="py-12">
        <h1 className="uppercase text-primary-blueText text-2xl md:text-4xl lg:text-5xl xl-text-6xl font-bold text-center h-[60%] pb-8 leading-10">
          who we are ?
        </h1>
        <div className="flex justify-between">
          <img
            src="/img/common/Decorater.png"
            alt="decorater"
            className="w-30 h-[25vh]"
          />
          <p
            className="text-center font-kameron text-base px-12 py-8"
            style={{ lineHeight: "32px" }}
          >
            The Tamang Library is committed to preserving, celebrating, and
            promoting the rich cultural heritage and language of the different
            community in Nepal. Our mission is to serve as a hub for Nepali
            cultural resources, fostering a sense of identity and pride among
            Nepalese people and providing valuable educational and research
            opportunities. The Tamang Library is committed to preserving,
            celebrating, and promoting the rich cultural heritage and language
            of the different community in Nepal. Our mission is to serve as a
            hub for Nepali cultural resources, fostering a sense of identity and
            pride among Nepalese people and providing valuable educational and
            research opportunities. Our mission is to serve as a hub for Nepali
            cultural resources, fostering a sense of identity and pride among
            Nepalese people and providing valuable educational and research
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
