import { Route, Routes } from "react-router-dom";
import ErrorPage from "./common/ErrorPage";
import OurCollection from "./components/landingpage/OurCollection";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EventPage from "./pages/EventPage";
import LandingPage from "./pages/LandingPage";
import NoticesPage from "./pages/NoticesPage";
import ProjectPage from "./pages/ProjectPage";
import PublicationPage from "./pages/PublicationPage";
import AdminEvent from "./pages/admin/events";
import EventCreate from "./pages/admin/events/create";
import AdminEventEdit from "./pages/admin/events/edit/edit";
import AdminNewArrivals from "./pages/admin/newArrivals";
import NewArrivalCreate from "./pages/admin/newArrivals/create";
import AdminNewArrivalEdit from "./pages/admin/newArrivals/edit/edit";
import AdminNotice from "./pages/admin/notice";
import NoticeCreate from "./pages/admin/notice/create";
import AdminNoticeEdit from "./pages/admin/notice/edit/edit";
import AdminProject from "./pages/admin/projects";
import ProjectCreate from "./pages/admin/projects/create";
import AdminProjectEdit from "./pages/admin/projects/edit/edit";
import Signin from "./pages/admin/signin";
import AdminPublication from "./pages/admin/publications";
import AdminPublicationEdit from "./pages/admin/publications/edit/edit";
import PublicationCreate from "./pages/admin/publications/create";
const RoutesFile: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />}></Route>
			<Route path="*" element={<ErrorPage />}></Route>
			<Route path="/about/*" element={<AboutPage />}></Route>
			<Route path="/notices" element={<NoticesPage />}></Route>
			<Route path="/projects/*" element={<ProjectPage />}></Route>
			<Route path="/publications" element={<PublicationPage />}></Route>
			<Route path="/events/*" element={<EventPage />}></Route>
			<Route path="/contact" element={<ContactPage />}></Route>
			<Route path="/collection" element={<OurCollection />}></Route>
			<Route path="/admin/signin" element={<Signin />}></Route>
			<Route path="/admin/projects" element={<AdminProject />}></Route>
			<Route path="/admin/projects/*" element={<AdminProjectEdit />}></Route>
			<Route path="/admin/projects/create" element={<ProjectCreate />}></Route>
			<Route path="/admin/notice" element={<AdminNotice />}></Route>
			<Route path="/admin/notice/*" element={<AdminNoticeEdit />}></Route>
			<Route path="/admin/notice/create" element={<NoticeCreate />}></Route>
			<Route path="/admin/events" element={<AdminEvent />}></Route>
			<Route path="/admin/events/*" element={<AdminEventEdit />}></Route>
			<Route path="/admin/events/create" element={<EventCreate />}></Route>
			<Route path="/admin/newArrivals" element={<AdminNewArrivals />}></Route>
			<Route
				path="/admin/newArrivals/*"
				element={<AdminNewArrivalEdit />}
			></Route>
			<Route
				path="/admin/newArrivals/create"
				element={<NewArrivalCreate />}
			></Route>
			<Route path="/admin/publications" element={<AdminPublication />}></Route>
			<Route
				path="/admin/publications/*"
				element={<AdminPublicationEdit />}
			></Route>
			<Route
				path="/admin/publications/create"
				element={<PublicationCreate />}
			></Route>
		</Routes>
	);
};
export default RoutesFile;
