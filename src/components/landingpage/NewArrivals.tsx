import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IoBookOutline } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TiPen } from "react-icons/ti";

import LoadingSpinner from "../../common/LoadingSpinner";

import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";

const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1024: { items: 3 },
};

const NewArrivals: React.FC = () => {
	const [isLeftbtnClicked, setIsLeftbtnClicked] = useState<Boolean>(false);
	const [isRightbtnClicked, setIsRightbtnClicked] = useState<Boolean>(false);

	const newArrivalsData = collection(db, "newArrivals");
	const [myNewArrivals, loading, error] = useCollectionData(newArrivalsData, {
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
		<div className="bg-secondary-detailsBackground text-primary-blueText px-16 py-8">
			<h1
				className="uppercase text-4xl lg:text-5xl text-center py-16 text-with-shadow font-perpetua font-thin"
				style={{ letterSpacing: "4px" }}
			>
				New Arrivals
			</h1>
			<AliceCarousel
				mouseTracking
				responsive={responsive}
				controlsStrategy="alternate"
				disableDotsControls
				renderPrevButton={() => {
					return (
						<button
							className={`px-1 py-1 mr-10 md:mr-6 lg:mr-0 rounded-md ${
								isLeftbtnClicked
									? "border border-primary-blueText"
									: "bg-gray-300"
							}  mt-6 absolute bottom-0 right-[20%]`}
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
							} mt-6 absolute bottom-0 right-[16%]`}
							onClick={onRightbtnClick}
						>
							<MdArrowForwardIos className="w-5 h-5 text-primary-blueText" />
						</button>
					);
				}}
			>
				{myNewArrivals?.map((items) => {
					return (
						<div key={items.id} className="lg:ml-10">
							<div className="w-[90%] md:w-[70%] xl:w-[58%] h-[45vh] mb-6 flex items-center justify-center bg-gray-300 rounded md:ml-4 lg:ml-8">
								<img
									src={items.image}
									alt="newarrival-book"
									className="my-8 w-[85%] h-[90%] object-center rounded"
								/>
							</div>
							<div className="flex items-center text-xl uppercase">
								<IoBookOutline className="w-8 h-8" />
								<h1 className="ml-2 font-perpetua">{items.title}</h1>
							</div>
							<div className="flex items-center py-5 text-xl uppercase">
								<TiPen className="w-8 h-8" />
								<h1 className="ml-2 font-perpetua">{items.writer}</h1>
							</div>
							<h1 className="text-xl font-extrabold font-perpetua">
								NPR {items.price}
							</h1>
							<div
								className="w-[95%] md:w-[90%] py-5 text-justify"
								dangerouslySetInnerHTML={{ __html: items.description }}
							></div>
							<div className="flex mb-8">
								<div className="flex">
									{Array.from({ length: Number(items.rating) }).map(
										(_item, index) => (
											<LiaStarSolid
												key={index}
												className="text-primary-blueText h-5 w-5"
											/>
										)
									)}
								</div>
								<div className="flex">
									{Array.from({ length: Number(5 - items.rating) }).map(
										(_item, index) => (
											<LiaStarSolid
												key={index}
												className="text-gray-300 h-5 w-5"
											/>
										)
									)}
								</div>
							</div>
						</div>
					);
				})}
			</AliceCarousel>
		</div>
	);
};
export default NewArrivals;
