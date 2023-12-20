import { createContext, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface UserContextValue {
  handleAboutPageNavigation: (name: string, position: string, quote:string, biography:string, id:number ) => void;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleAboutPageNavigation = useCallback((name: string, position: string, quote:string, biography:string, id:number) => {
    const itemName = name.replace(/ /g, "-").toLowerCase();
    navigate(`/about/${itemName}`, { state: { name, position,quote,biography,id} });
  }, [navigate]);

  const contextValue: UserContextValue = {
    handleAboutPageNavigation,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
