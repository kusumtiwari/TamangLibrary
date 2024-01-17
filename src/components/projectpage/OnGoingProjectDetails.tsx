import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Sponsers from "../../common/Sponsors";
import dayjs from "dayjs";

import RelatedEvents from "./RelatedEvents";
import OtherProjects from "./OtherProjects";
const OnGoingProjectDetails = () => {
	const navigate = useNavigate();
	const onBackClick = () => navigate("/projects");
	const location = useLocation();
	const { state } = location;
	const title = state.title;
	const startDate = state.startDate;
	const endDate = state.endDate;
	const description = state.description;
	const image = state.image;
	return (
		<div className="pt-8">
			<div
				className="flex items-center justify-start text-lg cursor-pointer mb-6 px-16 text-primary-blueText"
				onClick={onBackClick}
			>
				<IoMdArrowBack className="w-4 h-4 mr-1" />
				<h1>Back</h1>
			</div>

			<div className="h-fit font-playfair px-12 md:px-16 mb-24">
				<h1 className="text-3xl text-primary-blueText font-semibold font-playfair">
					{title}
				</h1>
				<div className="text-gray-400 text-2xl my-4">
					<h1 className="">
						Duration:{" "}
						<span className="pl-1">
							{" "}
							{dayjs.unix(startDate.seconds).format("DD/MM/YYYY")}
						</span>
						<span className=""> - </span>
						<span className="">
							{dayjs.unix(endDate.seconds).format("DD/MM/YYYY")}
						</span>
					</h1>
					<ul className="py-4">Partners</ul>
					<li className="ml-2 font-extrathin text-xl">
						Nepal Tamang Ghedung Sang
					</li>
					<li className="ml-2 font-extrathin text-xl">
						One Window International
					</li>
				</div>
				<div className="w-full md:w-1/2 lg:w-[45%] float-right md:ml-6 lg:ml-8">
					<img
						src={image}
						alt="project-image"
						className="w-full h-auto md:pl-6"
					/>
				</div>
				<div
					className="text-justify text-xl font-kameron"
					style={{ lineHeight: "32px" }}
					dangerouslySetInnerHTML={{ __html: description }}
				></div>
			</div>
			<Sponsers />
			<RelatedEvents />
			<OtherProjects />
		</div>
	);
};
export default OnGoingProjectDetails;
