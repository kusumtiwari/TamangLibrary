import Herosection from "../components/landingpage/Herosection";
import Welcome from "../components/landingpage/Welcome";
import LibraryPublication from "../components/landingpage/LibraryPublication";
import LibraryDetails from "../components/landingpage/LibraryDetails";
import OurCollection from "../components/landingpage/OurCollection";
import UpcomingEvents from "../components/landingpage/UpcomingEvents";
import NewArrivals from "../components/landingpage/NewArrivals";
import OngoingProjects from "../components/landingpage/OngoingProjects";
import Testimonials from "../components/landingpage/Testimonials";
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
      <OngoingProjects />
      <Testimonials />
    </div>
  );
};
export default LandingPage;
