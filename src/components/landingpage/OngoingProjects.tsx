import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState, useContext } from "react";

import { db } from "../../../firebase";
import { DocumentData, collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "../../common/LoadingSpinner";

import { UserContext } from "../../context/Context";

const OngoingProjects: React.FC = () => {
	const [isLeftbtnClicked, setIsLeftbtnClicked] = useState<Boolean>(false);
	const [isRightbtnClicked, setIsRightbtnClicked] = useState<Boolean>(false);

	const contextValue = useContext(UserContext);
	const handleOnGoingProjectNavigation =
		contextValue?.handleOnGoingProjectNavigation;
	const handleClick = (obj: DocumentData) => {
		if (handleOnGoingProjectNavigation) {
			handleOnGoingProjectNavigation(obj);
		} else {
			console.error("handleProjectPageNavigation is undefined");
		}
	};

	const projectsQuery = query(
		collection(db, "projects"),
		where("status", "==", "ONGOING")
	);
	const [projects, loading, error] = useCollectionData(projectsQuery, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});
	if (loading) {
		return <LoadingSpinner />;
	}

	if (!loading && error) {
		return <p>{JSON.stringify(error, null, 2)}</p>;
	}

	const onLeftbtnClick = () => {
		setIsLeftbtnClicked(true);
		setIsRightbtnClicked(false);
	};

	const onRightbtnClick = () => {
		setIsLeftbtnClicked(false);
		setIsRightbtnClicked(true);
	};
	return (
		<div className=" text-primary-blueText px-4 md:px-12 lg:px-16 bg-[url('../../img/common/MapOfNepalBg.png')]">
			<h1
				className="uppercase text-4xl lg:text-5xl text-center py-16 text-with-shadow font-perpetua font-thin"
				style={{ letterSpacing: "4px" }}
			>
				ongoing projects
			</h1>

			<AliceCarousel
				infinite
				mouseTracking
				disableDotsControls
				renderPrevButton={() => {
					return (
						<button
							className={`px-1 py-1 mr-10 md:mr-6 lg:mr-0 rounded-md ${
								isLeftbtnClicked
									? "border border-primary-blueText"
									: "bg-gray-300"
							}  mt-6 absolute top-[95%] right-[16%]`}
							onClick={onLeftbtnClick}
						>
							<MdArrowBackIos className="w-5 h-5 text-primary-blueText ml-1" />
						</button>
					);
				}}
				renderNextButton={() => {
					return (
						<button
							className={`px-1 py-1 rounded-md ${
								isRightbtnClicked
									? "border border-primary-blueText"
									: "bg-gray-300"
							} mt-6 absolute top-[95%] right-[13%]`}
							onClick={onRightbtnClick}
						>
							<MdArrowForwardIos className="w-5 h-5 text-primary-blueText" />
						</button>
					);
				}}
			>
				{projects?.map((item) => {
					return (
						<div
							key={item.id}
							className="flex items-center justify-between flex-col md:flex-row"
						>
							<div
								className="w-[90%] md:w-[60%] lg:w-[42%] h-[55vh] my-auto relative object-cover"
								onClick={() => handleClick(item)}
							>
								<img
									src="/img/common/Union.png"
									alt="blue-line"
									className="absolute bottom-0"
								/>
								<img
									src={item.image}
									alt="completed-project"
									className="w-full h-full absolute bottom-[6%] left-[3%] cursor-pointer"
								/>
							</div>
							<div className="bg-secondary-detailsBackground py-6 px-4 md:px-8 text-black w-[82%] md:w-[52%] rounded">
								<h1
									className="text-2xl md:text-3xl font-playfair pb-4 "
									onClick={() => handleClick(item)}
								>
									{item.title}
								</h1>
								<p
									className="font-kameron text-base"
									style={{ lineHeight: "31px", letterSpacing: "1px" }}
								>
									{item.description.slice(0, 400)}
									<span
										className="text-primary-blueText underline ml-2 cursor-pointer"
										onClick={() => handleClick(item)}
									>
										Learn more
									</span>
								</p>
							</div>
						</div>
					);
				})}
			</AliceCarousel>
		</div>
	);
};

export default OngoingProjects;
