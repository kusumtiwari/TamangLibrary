import { useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
const OurTeamDetails: React.FC = () => {
    const location = useLocation();
    const { state } = location;
    const name = state?.name;
    const position = state?.position;
    const quote = state?.quote;
    const biography = state?.biography;
  return (
   <>
   <div className="bg-secondary-detailsBackground px-12 py-12">
   <div className="flex items-center justify-start text-lg">
  <IoMdArrowBack className="w-4 h-4"/>
  <h1>Back</h1>
   </div>

   </div>
   </>
  );
};

export default OurTeamDetails;
