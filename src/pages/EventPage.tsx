import EventIndex from "../components/eventpage/EventIndex";
import EventDetails from "../components/eventpage/EventDetailsPage";
import { Routes, Route } from "react-router-dom";
const EventPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EventIndex />}></Route>
      <Route path=":itemName" element={<EventDetails />}></Route>
    </Routes>
  );
};
export default EventPage;
