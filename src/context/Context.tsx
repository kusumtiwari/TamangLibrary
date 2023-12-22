import { createContext, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Timestamp } from "firebase/firestore";
interface ProjectObject {
  budget: number;
  description: string;
  endDate: Timestamp;
  image: string;
  startDate: Timestamp;
  status: string;
  title: string;
}

interface EventObject {
  dateAndTime: Timestamp;
  description: string;
  image: string;
  location: string;
  title: string;
}

interface UserContextValue {
  handleAboutPageNavigation: (
    name: string,
    position: string,
    quote: string,
    biography: string,
    id: number
  ) => void;
  handleProjectPageNavigation: (myProjectContents: ProjectObject) => void;
  handleEventPageNavigation: (
    myEventContents: EventObject,
    eventType: string
  ) => void;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleAboutPageNavigation = useCallback(
    (
      name: string,
      position: string,
      quote: string,
      biography: string,
      id: number
    ) => {
      const itemName = name.replace(/ /g, "-").toLowerCase();
      navigate(`/about/${itemName}`, {
        state: { name, position, quote, biography, id },
      });
      window.scrollTo(0, 0);
    },
    [navigate]
  );

  const handleProjectPageNavigation = (myProjectContents: ProjectObject) => {
    const itemName = myProjectContents.title.replace(/ /g, "-").toLowerCase();
    navigate(`/projects/${itemName}`, { state: myProjectContents });
    window.scrollTo(0, 0);
  };

  const handleEventPageNavigation = (
    myEventContents: EventObject,
    eventType: string
  ) => {
    const itemName = myEventContents.title.replace(/ /g, "-").toLowerCase();
    navigate(`/events/${itemName}`, {
      state: { ...myEventContents, eventType },
    });
    window.scrollTo(0, 0);
  };

  const contextValue: UserContextValue = {
    handleAboutPageNavigation,
    handleProjectPageNavigation,
    handleEventPageNavigation,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
