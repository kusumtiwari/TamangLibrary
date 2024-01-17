interface ScopeInfo {
	id: number;
	title: string;
	image: string;
	description: string;
}

interface ScopeContentProps {
	myScopeInfo: ScopeInfo[];
	onScopeTitleHovered: (arg: number) => void;
	selectedId: number;
}

const ScopeContent: React.FC<ScopeContentProps> = ({
	myScopeInfo,
	onScopeTitleHovered,
	selectedId,
}) => {
	const handleScopeTitleEnter = (itemId: number) => {
		onScopeTitleHovered(itemId);
	};

	return (
		<div className="w-[90%] md:w-[50%] lg:w-[45%] lg:mt-46">
			{myScopeInfo.map((items: any) => {
				return (
					<div className="flex items-center h-[10vh]" key={items.id}>
						<div className="w-20 mr-8 h-10">
							{items.id === selectedId ? (
								<hr className="my-4 h-0.5 w-full mr-4 bg-primary-blueText" />
							) : null}
						</div>
						<h1
							className={`uppercase text-xl md:text-2xl cursor-pointer font-perpetua ${
								selectedId === items.id
									? "text-primary-blueText"
									: "text-gray-500"
							}`}
							onMouseOver={() => handleScopeTitleEnter(items.id)}
							style={{
								fontSize: "28px",
								letterSpacing: "2px",
								fontWeight: "500", // Corrected syntax here
							}}
						>
							{items.title}
						</h1>
					</div>
				);
			})}
		</div>
	);
};

export default ScopeContent;
