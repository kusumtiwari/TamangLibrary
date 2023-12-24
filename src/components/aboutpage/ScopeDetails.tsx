import { useMediaQuery } from "@react-hook/media-query";

interface ScopeInfo {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface ScopeDetailsProp {
  selectedId: number;
  myScopeInfo: ScopeInfo[];
}

const ScopeDetails: React.FC<ScopeDetailsProp> = ({
  selectedId,
  myScopeInfo,
}) => {
  const matchesMedium = useMediaQuery("(min-width: 768px)");
  return (
    <div className="w-[100%] md:w-[50%] px-6 h-[90%]">
      {myScopeInfo.map((item) => {
        if (matchesMedium) {
            if(item.id === selectedId) {
          return (
            <div key={item.id} className="w-full">
              <h1 className="text-primary-blueText uppercase py-6 text-2xl">
                {item.title}
              </h1>
              <img
                src={item.image}
                alt="scope-image"
                className="h-[40vh] md:h-[55vh] md:w-[90%] w-[100%]"
              />
              <p className="text-base py-6 w-[92%] md:w-[88%] text-black text-justify">
                {item.description}
              </p>
            </div>
          );
        }
    }
         else {
          return (
            <div key={item.id} className="w-full">
              <h1 className="text-primary-blueText uppercase py-6 text-2xl">
                {item.title}
              </h1>
              <img
                src={item.image}
                alt="scope-image"
                className="h-[40vh] md:h-[55vh] md:w-[90%] w-[80%]"
              />
              <p className="text-base py-6 w-[82%] text-black">
                {item.description}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ScopeDetails;
