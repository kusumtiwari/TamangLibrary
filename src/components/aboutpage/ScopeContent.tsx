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

const ScopeContent: React.FC<ScopeContentProps> = ({ myScopeInfo, onScopeTitleHovered, selectedId }) => {
    const handleScopeTitleEnter = (itemId: number) => {
        onScopeTitleHovered(itemId);
      };
      
    return (
        <div className="w-[90%] md:w-[50%] lg:w-[45%] h-[60vh] mt-6">
            {
                myScopeInfo.map((items:any) => {
                    return(
                        <div className="flex items-center h-[10vh]" key={items.id}>
                            <div className="w-20">
                            {
                                (items.id === selectedId) ? <hr className="my-4 h-0.5 w-full mr-4 bg-primary-blueText" /> : null
                            }
                            </div>
                            <h1 className= {`uppercase text-xl md:text-2xl cursor-pointer ${selectedId === items.id ? 'text-primary-blueText' : 'text-gray-500'}`}onMouseOver={() => handleScopeTitleEnter(items.id)}>{items.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ScopeContent;