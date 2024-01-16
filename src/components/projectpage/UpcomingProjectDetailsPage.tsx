import { useLocation } from "react-router-dom";
import { useState } from "react";
import DonationPage from "./DonationPage";

const UpcomingProjectDetailsPage = () => {
	const [isDonationBtnClicked, setIsDonationBtnClicked] = useState(false);
	const onFormBtnClick = () => setIsDonationBtnClicked(true);
	const location = useLocation();
	const { state } = location;
	const title = state.title;
	const description = state.description;
	const image = state.image;
	return (
		<div>
			{isDonationBtnClicked ? (
				<div>hi</div>
			) : (
				<div>
					<div className="w-full h-[65vh] bg-[url('../../img/common/UpcomingProjectsBg.png')] flex items-center justify-center ">
						<h1 className="text-center text-white text-4xl md:text-5xl font-semibold text-with-shadow">
							Upcoming Projects
						</h1>
					</div>
					<div className="py-8 px-8 md:px-12">
						<h1 className="text-2xl text-primary-blueText font-bold">
							{title}
						</h1>
						<p
							className="text-black pb-8 pt-4"
							style={{ lineHeight: "32px" }}
							dangerouslySetInnerHTML={{ __html: description }}
						></p>
						<div className="w-[100%] h-[60vh]">
							<img
								src={image}
								alt="upcoming-project-image"
								className="w-full h-full object-cover object-center"
							/>
						</div>
						{/* <p className="text-black pt-8" style={{ lineHeight: "32px" }}>
							{description}
						</p> */}
					</div>
					<h1 className="py-16 text-primary-blueText font-bold text-2xl md:text-3xl uppercase text-center w-[100%]">
						Projects Awaiting Your Support
					</h1>
					<DonationPage onFormBtnClick={onFormBtnClick} />
				</div>
			)}
		</div>
	);
};
export default UpcomingProjectDetailsPage;
