import { createContext, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface UserContextValue {
  handleAboutPageNavigation: (name: string) => void;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleAboutPageNavigation = useCallback((name: string) => {
    const itemName = name.replace(/ /g, "-").toLowerCase();
    navigate(`/${itemName}`, { state: { name } });
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
