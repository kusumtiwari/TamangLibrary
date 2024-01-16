import { Toaster } from "@/components/ui/sonner";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./App.css";
import RoutesFile from "./RoutesFile";
import Footer from "./common/Footer";
import LoadingSpinner from "./common/LoadingSpinner";
import Navbar from "./common/Navbar";
import NavbarAdmin from "./components/layout/NavbarAdmin";
import Sidebar from "./components/layout/Sidebar";
import { UserProvider } from "./context/Context";
function App() {
	const location = useLocation();
	const navigate = useNavigate();

	const [currentUser, loading] = useAuthState(auth);

	if (location.pathname.startsWith("/admin/signin")) {
		if (loading) {
			return <LoadingSpinner />;
		}

		if (currentUser) {
			navigate("/admin/projects");
			return <LoadingSpinner />;
		}

		return (
			<>
				<NavbarAdmin />
				<RoutesFile />
				<Toaster position="top-right" richColors />
			</>
		);
	}

	if (location.pathname.startsWith("/admin")) {
		if (loading) {
			return <LoadingSpinner />;
		}

		if (!currentUser) {
			navigate("/admin/signin");
			return <LoadingSpinner />;
		}

		return (
			<>
				<NavbarAdmin />
				<Sidebar>
					<RoutesFile />
				</Sidebar>
				<Toaster position="top-right" richColors />
			</>
		);
	}

	return (
		<div className="font-kameron">
			<UserProvider>
				<Navbar />
				<RoutesFile />
				<Footer />
			</UserProvider>
		</div>
	);
}

export default App;
