import { useState, useContext } from "react";

import { LuClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";

import { db } from "../../../firebase";
import { Timestamp, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import dayjs from "dayjs";
import LoadingSpinner from "../../common/LoadingSpinner";

import { UserContext } from "../../context/Context";

import ViewlessBtn from "../../common/ViewlessBtn";
import ViewmoreBtn from "../../common/ViewmoreBtn";

interface UpcomingEvents {
	id: number;
	image: string;
	title: string;
	description: string;
	location: string;
	dateAndTime: Timestamp;
}

const maxLength = 270;
const UpcomingEvents: React.FC = () => {
	const [isViewMoreBtnClicked, setIsViewMoreBtnClicked] =
		useState<Boolean>(false);

	const onViewBtnClick = () => {
		setIsViewMoreBtnClicked(!isViewMoreBtnClicked);
	};
	const contextValue = useContext(UserContext);
	const handleEventPageNavigation =
		contextValue?.handleUpcomingEventPageNavigation;
	const handleClick = (obj: UpcomingEvents) => {
		if (handleEventPageNavigation) {
			handleEventPageNavigation(obj);
		} else {
			console.error("handleEventPageNavigation is undefined");
		}
	};
	const data = collection(db, "upcomingEvents");
	const [upcomingEvents, upcomingEventsLoading, upcomingEventsError] =
		useCollectionData(data, {
			snapshotListenOptions: { includeMetadataChanges: true },
		});
	if (upcomingEventsLoading) {
		<LoadingSpinner />;
	}
	const upcomingEventsFirstTwo = upcomingEvents
		? upcomingEvents.slice(0, 2)
		: null;
	return (
		<div className="my-16">
			<h1
				className="uppercase text-with-shadow text-primary-blueText text-4xl lg:text-5xl text-center bg-secondary-detailsBackground py-16 my-8 font-perpetua font-thin w-full"
				style={{ letterSpacing: "4px" }}
			>
				Upcoming Events
			</h1>
			{!upcomingEventsError && !isViewMoreBtnClicked && upcomingEventsFirstTwo
				? upcomingEventsFirstTwo.map((item, index) => {
						const jsDate = item.dateAndTime.toDate();
						return (
							<div
								className={`flex text-primary-blueText my-24 overflow-hidden flex-col-reverse md:flex-row ${
									index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
								}`}
								key={index}
							>
								<div className="w-[95%] md:w-[50%] md:pl-12 px-2">
									<h1
										className="text-3xl mt-8 md:mt-0 cursor-pointer font-perpetua"
										onClick={() => handleClick(item as UpcomingEvents)}
									>
										{item.title}
									</h1>
									<div className="text-black py-6 w-[100%] md:w-[80%] text-lg text-justify">
										{item.description.length > maxLength ? (
											<>
												<div
													dangerouslySetInnerHTML={{
														__html:
															item.description.slice(0, maxLength) + "...",
													}}
												></div>
												<span
													className="text-primary-blueText underline cursor-pointer"
													onClick={() => handleClick(item as UpcomingEvents)}
												>
													Learn More
												</span>
											</>
										) : (
											<div
												dangerouslySetInnerHTML={{
													__html: item.description,
												}}
											></div>
										)}
									</div>
									<div className="flex items-center">
										<MdOutlineLocationOn className="mr-2 w-8 h-8 md:w-6 md:h-6" />
										<p className="text-base">{item.location}</p>
									</div>
									<div className="flex items-center py-6">
										<SlCalender className="mr-2 w-6 h-6" />
										<p className="text-base">
											{dayjs(jsDate).format("MMMM D, YYYY")}
										</p>
									</div>
									<div className="flex items-center">
										<LuClock className="mr-2 w-6 h-6" />
										<p className="text-base">
											{dayjs(jsDate).format("h:mm A")} ||{" "}
											{dayjs(jsDate).format("dddd")}
										</p>
									</div>
								</div>
								<div className="w-[90%] md:w-[45%] h-[45vh] sm:h-[55vh]">
									<img
										src={item.image}
										alt="upcoming-event"
										className="w-full h-full cursor-pointer object-fill md:object-coveer object-center"
										onClick={() => handleClick(item as UpcomingEvents)}
									/>
								</div>
							</div>
						);
				  })
				: upcomingEvents &&
				  upcomingEvents.map((item, index) => {
						const jsDate = item.dateAndTime.toDate();
						return (
							<div
								className={`flex items-center text-primary-blueText my-24 overflow-hidden flex-col-reverse md:flex-row ${
									index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
								}`}
								key={index}
							>
								<div className="w-[95%] md:w-[50%] md:pl-12">
									<h1
										className="text-3xl mt-8 md:mt-0 cursor-pointer font-perpetua"
										onClick={() => handleClick(item as UpcomingEvents)}
									>
										{item.title}
									</h1>
									<div className="text-black py-6 w-[100%] md:w-[80%] text-lg text-justify">
										{item.description.length > maxLength ? (
											<>
												<div
													dangerouslySetInnerHTML={{
														__html:
															item.description.slice(0, maxLength) + "...",
													}}
												></div>
												<span
													className="text-primary-blueText underline cursor-pointer"
													onClick={() => handleClick(item as UpcomingEvents)}
												>
													Learn More
												</span>
											</>
										) : (
											<div
												dangerouslySetInnerHTML={{
													__html: item.description,
												}}
											></div>
										)}
									</div>
									<div className="flex items-center">
										<MdOutlineLocationOn className="mr-2 w-6 h-6" />
										<p className="text-base">{item.location}</p>
									</div>
									<div className="flex items-center py-6">
										<SlCalender className="mr-2 w-6 h-6" />
										<p className="text-base">
											{dayjs(jsDate).format("MMMM D, YYYY")}
										</p>
									</div>
									<div className="flex items-center">
										<LuClock className="mr-2 w-6 h-6" />
										<p className="text-base">
											{dayjs(jsDate).format("h:mm A")} ||{" "}
											{dayjs(jsDate).format("dddd")}
										</p>
									</div>
								</div>
								<div className="w-[95%] md:w-[45%] h-[55vh]">
									<img
										src={item.image}
										alt="upcoming-event"
										className="w-full h-full cursor-pointer object-cover rounded"
										onClick={() => handleClick(item as UpcomingEvents)}
									/>
								</div>
							</div>
						);
				  })}
			<div onClick={onViewBtnClick}>
				{isViewMoreBtnClicked ? <ViewlessBtn /> : <ViewmoreBtn />}
			</div>
		</div>
	);
};

export default UpcomingEvents;
