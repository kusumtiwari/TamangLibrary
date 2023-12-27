import { createContext, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DocumentData } from "firebase/firestore";

interface UserContextValue {
  handleAboutPageNavigation: (
    name: string,
    position: string,
    quote: string,
    biography: string,
    id: number
  ) => void;
  handleCompletedProjectNavigation: (myProjectContents: DocumentData) => void;
  handleEventPageNavigation: (
    myEventContents: DocumentData,
    eventType: string
  ) => void;
  handleOnGoingProjectNavigation: (myProjectContents: DocumentData) => void;
  handleUpComingProjectNavigation: (myProjectContents: DocumentData) => void;
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

  const handleCompletedProjectNavigation = (
    myProjectContents: DocumentData
  ) => {
    const itemName = myProjectContents.title.replace(/ /g, "-").toLowerCase();
    navigate(`/projects/completed-projects/${itemName}`, {
      state: myProjectContents,
    });
    window.scrollTo(0, 0);
  };

  const handleOnGoingProjectNavigation = (myProjectContents: DocumentData) => {
    const itemName = myProjectContents.title.replace(/ /g, "-").toLowerCase();
    navigate(`/projects/ongoing-projects/${itemName}`, {
      state: myProjectContents,
    });
    window.scrollTo(0, 0);
  };

  const handleUpComingProjectNavigation = (myProjectContents: DocumentData) => {
    const itemName = myProjectContents.title.replace(/ /g, "-").toLowerCase();
    navigate(`/projects/upcoming-projects/${itemName}`, {
      state: myProjectContents,
    });
    window.scrollTo(0, 0);
  };

  const handleEventPageNavigation = (
    myEventContents: DocumentData,
    eventType: string
  ) => {
    const itemName = myEventContents.title.replace(/ /g, "-").toLowerCase();
    navigate(`/events/upcoming-events/${itemName}`, {
      state: { ...myEventContents, eventType },
    });
    window.scrollTo(0, 0);
  };

  const contextValue: UserContextValue = {
    handleAboutPageNavigation,
    handleCompletedProjectNavigation,
    handleEventPageNavigation,
    handleOnGoingProjectNavigation,
    handleUpComingProjectNavigation,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
