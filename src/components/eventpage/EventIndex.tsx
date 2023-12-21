import TopSection from "./TopSection";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";
const EventIndex: React.FC = () => {
  return (
    <>
      <TopSection />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
};

export default EventIndex;
