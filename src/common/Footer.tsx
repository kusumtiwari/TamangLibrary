import { CiMail } from "react-icons/ci";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { Link } from "react-router-dom";
import "./../utils/custom.css";
const Footer: React.FC = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="flex flex-col mt-24">
			<div className="relative flex-1 min-h-[75vh] footer">
				<div className="absolute top-0 left-0 z-0 bg-[url('/img/common/Footer.png')] bg-cover bg-no-repeat w-full h-[50vh] object-cover flex items-center justify-center"></div>
				<div className="absolute top-36 left-0 z-10 bg-secondary-detailsBackground w-full py-16 px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 flex-grow">
					<div className="">
						<h1 className="uppercase text-2xl text-primary-blueText py-2">
							Get in Touch
						</h1>
						<div className="flex items-center text-black font-cameron md:text-xl py-2">
							<IoLocationOutline className="w-5 h-5" />
							<h1 className="ml-2">Boudha - 6, Kathmandu Nepal</h1>
						</div>
						<div className="flex items-center text-black font-kameron md:text-xl py-2">
							<IoCallOutline className="w-5 h-5" />
							<h1 className="ml-2">9851082503 | 9841474917</h1>
						</div>

						<div className="flex items-center text-black font-kameron md:text-xl py-2">
							<CiMail className="w-5 h-5" />
							<h1 className="ml-2">contact@tamanglibrary.org</h1>
						</div>
					</div>

					<div className="lg:mx-auto cursor-pointer">
						<p className="md:text-xl py-2">
							<Link to="/" onClick={scrollToTop}>
								Home
							</Link>
						</p>
						<p className="md:text-xl py-2">
							<Link to="/projects" onClick={scrollToTop}>
								Projects
							</Link>
						</p>
						<p className="md:text-xl py-2">
							<Link to="/publications" onClick={scrollToTop}>
								Publication
							</Link>
						</p>
						<p className="md:text-xl py-2">
							<Link to="/collection" onClick={scrollToTop}>
								Collection
							</Link>
						</p>
					</div>

					<div className="lg:mx-auto cursor-pointer">
						<p className="md:text-xl py-2">
							<Link to="/about" onClick={scrollToTop}>
								About
							</Link>
						</p>
						<p className="md:text-xl py-2">
							<Link to="/events" onClick={scrollToTop}>
								Events
							</Link>
						</p>
						<p className="md:text-xl py-2">
							<Link to="/contact" onClick={scrollToTop}>
								Contact
							</Link>
						</p>
						<p className="md:text-xl py-2">
							<Link to="/admin/signin" onClick={scrollToTop}>
								Admin
							</Link>
						</p>
					</div>

					<div className="">
						<h1 className="uppercase text-2xl text-primary-blueText py-2">
							For update
						</h1>
						<input
							type="text"
							name="email"
							placeholder="E-mail"
							className="border-2 border-primary-blueText px-6 py-2 rounded my-2 w-[80%]"
						/>
						<div className="">
							<button className="rounded px-6 py-2 bg-red-800 text-white text-sm">
								Subscribe
							</button>
						</div>
						<div className="flex items-center text-primary-blueText mt-6">
							<RiFacebookCircleLine className="w-10 h-10 lg:mr-4" />
							<FaInstagram className="w-10 h-10" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col z-20 md:flex-row sm:items-center sm:pb-8 justify-between py-8 px-4 md:px-12">
				<div className="flex items-center pb-6 md:pb-0">
					<MdOutlineCopyright className="w-5 h-5 text-primary-blueText mr-2" />
					<p className="text-base text-primary-blueText">
						2023 Tamang Library. All right reserved
					</p>
				</div>
				<div className="flex items-center">
					<p className="text-base text-primary-blueText mr-2">
						Designed and developed by
					</p>
					<img src="/img/one-window-logo.png" alt="company-logo" />
				</div>
			</div>
		</div>
	);
};
export default Footer;
