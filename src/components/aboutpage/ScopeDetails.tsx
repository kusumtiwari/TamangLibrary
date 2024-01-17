import { useMediaQuery } from "@react-hook/media-query";

interface ScopeInfo {
	id: number;
	title: string;
	image: string;
	description: string;
}

interface ScopeDetailsProp {
	selectedId: number;
	myScopeInfo: ScopeInfo[];
}

const ScopeDetails: React.FC<ScopeDetailsProp> = ({
	selectedId,
	myScopeInfo,
}) => {
	const matchesMedium = useMediaQuery("(min-width: 768px)");
	return (
		<div className="w-[100%] md:w-[50%] px-6 h-[90%]">
			{myScopeInfo.map((item) => {
				if (matchesMedium) {
					if (item.id === selectedId) {
						return (
							<div key={item.id} className="w-full">
								<h1
									className="text-primary-blueText uppercase py-6 font-perpetua"
									style={{ fontSize: "28px", letterSpacing: "2px" }}
								>
									{item.title}
								</h1>
								<img
									src={item.image}
									alt="scope-image"
									className="h-[40vh] md:h-[50vh] md:w-[90%] w-[100%] rounded object-cover"
								/>
								<p
									className="text-xl py-6 w-[92%] md:w-[88%] text-black text-justify font-kameron"
									style={{ lineHeight: "34px" }}
								>
									{item.description.slice(0, 300)}
									<span className="text-primary-blueText underline">
										{item.description.length > 300 ? "  Learn More" : ""}
									</span>
								</p>
							</div>
						);
					}
				} else {
					return (
						<div
							key={item.id}
							className="w-full flex flex-col items-center justify-center"
						>
							<h1
								className="text-primary-blueText uppercase py-6 font-perpetua"
								style={{ fontSize: "28px", letterSpacing: "2px" }}
							>
								{item.title}
							</h1>
							<img
								src={item.image}
								alt="scope-image"
								className="h-[40vh] md:h-[55vh] md:w-[100%] w-[100%]"
							/>
							<p
								className="text-base py-6 w-full md:w-[82%] text-black text-justify"
								style={{ lineHeight: "33px" }}
							>
								{item.description.slice(0, 300)}
								<span className="text-primary-blueText underline text-justify">
									{item.description.length > 300 ? "  Learn More" : ""}
								</span>
							</p>
						</div>
					);
				}
			})}
		</div>
	);
};

export default ScopeDetails;
