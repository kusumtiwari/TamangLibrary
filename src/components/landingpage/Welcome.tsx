const Welcome: React.FC = () => {
  return (
    <div className="text-center ">
      <h1 className="uppercase text-primary-blueText text-2xl md:text-4xl lg:text-5xl font-thin">
        Welcome to <span className="font-bold">Tamang library</span>
      </h1>
      <div className="flex justify-between">
        <img
          src="/img/common/Decorater.png"
          alt="decorater"
          className="w-30 h-26"
        />
        <p
          className="font-kameron text-base w-[100%] text-center px-12 py-8"
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
