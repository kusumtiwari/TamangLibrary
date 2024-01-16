import { Link } from "react-router-dom";

const NavbarAdmin: React.FC = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="py-5 flex flex-wrap justify-between px-8 lg:px-28 sticky top-0 z-30 items-center bg-white shadow-lg">
			<Link to={"/admin/projects"} onClick={scrollToTop}>
				{" "}
				<img src="/img/common/Logo.png" alt="logo" className="w-12 h-6" />
			</Link>
		</div>
	);
};
export default NavbarAdmin;
