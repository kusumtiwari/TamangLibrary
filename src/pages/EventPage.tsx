import EventIndex from "../components/eventpage/EventIndex";
import UpcomingEventDetails from "../components/eventpage/UpcomingEventsDetails";
import PastEventDetails from "../components/eventpage/PastEventsDetails";
import { Routes, Route } from "react-router-dom";
const EventPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EventIndex />}></Route>
      <Route
        path="/upcoming-events/:itemName"
        element={<UpcomingEventDetails />}
      ></Route>
      <Route
        path="/past-events/:itemName"
        element={<PastEventDetails />}
      ></Route>
    </Routes>
  );
};
export default EventPage;
