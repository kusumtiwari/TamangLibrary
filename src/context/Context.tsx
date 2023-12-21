import { createContext, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Timestamp } from "firebase/firestore";
interface ProjectObject {
  budget : number,
  description: string,
  endDate : Timestamp,
  image: string,
  startDate : Timestamp,
  status : string,
  title : string,
}
interface UserContextValue {
  handleAboutPageNavigation: (name: string, position: string, quote:string, biography:string, id:number ) => void;
  handleProjectPageNavigation: (myProjectContents : ProjectObject) => void;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleAboutPageNavigation = useCallback((name: string, position: string, quote:string, biography:string, id:number) => {
    const itemName = name.replace(/ /g, "-").toLowerCase();
    navigate(`/about/${itemName}`, { state: { name, position,quote,biography,id} });
    window.scrollTo(0, 0);
  }, [navigate]);

  const handleProjectPageNavigation = (myProjectContents : ProjectObject) => {
    const itemName = myProjectContents.title.replace(/ /g, "-").toLowerCase();
    navigate(`/projects/${itemName}`, { state: myProjectContents });
    window.scrollTo(0, 0);
  }
  const contextValue: UserContextValue = {
    handleAboutPageNavigation,
    handleProjectPageNavigation,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
