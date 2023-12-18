const LegacyLandmarks: React.FC = () => {
    return (
        <div className="my-16 text-primary-blueText px-8 md:px-16 ">
            <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center">Legacy Landmarks</h1>
            <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="w-[90%] md:w-[50%] my-12">
                <h1 className="text-black font-semibold text-2xl py-4">Establishment of Tamang Library</h1>
                <p className="w-[95%] md:w-[90%] text-xl">The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural heritage and language of the different community in Nepal. research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity Our mission is to serve as a hub for Nepali cultural resources, fostering a sense of identity</p>
            </div>
            <div className="w-[95%] h-[40vh] md:w-[40%] md:h-[50vh]">
                <img src="/herosection/image1.png" alt="legacy-image" className="w-full h-full"/>
            </div>
            </div>
        </div>
    );
};

export default LegacyLandmarks;
