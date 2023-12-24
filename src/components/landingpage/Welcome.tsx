const Welcome: React.FC = () => {
  return (
    <div className="text-center px-8 md:px-24 pb-12">
      <h1 className="uppercase text-primary-blueText text-2xl md:text-4xl lg:text-5xl font-thin mb-20">
        Welcome to <span className="font-bold">Tamang library</span>
      </h1>
      <p className="font-kameron text-xl w-[100%] text-center">
        The Tamang Library is committed to preserving, celebrating, and
        promoting the rich cultural heritage and language of the different
        community in Nepal. Our mission is to serve as a hub for Nepali cultural
        resources, fostering a sense of identity and pride among Nepalese people
        and providing valuable educational and research opportunities.
      </p>
    </div>
  );
};
export default Welcome;
