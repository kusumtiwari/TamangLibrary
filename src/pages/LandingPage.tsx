import Herosection from "../components/Landingpage/Herosection";
import Welcome from "../components/Landingpage/Welcome";
import LibraryPublication from "../components/Landingpage/LibraryPublication";
import LibraryDetails from "../components/Landingpage/LibraryDetails";
import OurCollection from "../components/Landingpage/OurCollection";
import UpcomingEvents from "../components/Landingpage/UpcomingEvents";
import NewArrivals from "../components/Landingpage/NewArrivals";

const LandingPage: React.FC = () => {
  return (
    <div className="">
      <Herosection />
      <Welcome />
      <LibraryPublication />
      <LibraryDetails />
      <OurCollection />
      <UpcomingEvents />
      <NewArrivals />
    </div>
  );
};
export default LandingPage;
