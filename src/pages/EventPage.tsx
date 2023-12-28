import EventIndex from "../components/eventpage/EventIndex";
import UpcomingEventDetails from "../components/eventpage/UpcomingEventsDetails";
import { Routes, Route } from "react-router-dom";
const EventPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EventIndex />}></Route>
      <Route
        path="/upcoming-events/:itemName"
        element={<UpcomingEventDetails />}
      ></Route>
    </Routes>
  );
};
export default EventPage;
