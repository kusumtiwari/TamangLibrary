const TopSection: React.FC = () => {
  return (
    <div className="bg-[url('/img/common/EventPageBg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center h-[65vh] px-6 md:px-24 lg:px-36">
      <div className="px-6">
        <h1 className="uppercase text-white text-3xl md:text-4xl lg:text-5xl font-kameron">
          Events
        </h1>
        <p className="w-[85%] md:w-[60%] text-justify text-white py-6 font-kameron text-xl md:text-2xl">
          Lorem ipsum dolor sit amet consectetur. Elementum pellentesque
          volutpat ullamcorper tortor in ipsum. Aliquam integer velit tempus
          augue. Ut nisl habitasse tincidunt luctus rhoncus arcu.
        </p>
      </div>
    </div>
  );
};
export default TopSection;
