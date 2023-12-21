import EventIndex from "../components/eventpage/EventIndex";
import { Routes, Route } from "react-router-dom";
const EventPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EventIndex />}></Route>
    </Routes>
  );
};
export default EventPage;
