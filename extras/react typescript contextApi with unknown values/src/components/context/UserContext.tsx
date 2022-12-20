import React, { createContext, useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

// for user and setUser state
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
// for children in context provider
type UserContextProviderProps = {
  children: React.ReactNode;
};

// user and setUser provider dea pass kora hoitice tai  UserContextType dite hobe nahole jodi sudhu user ta k value akare pass koratam tahole sudhe AuthUser|null type dilei hoito
// export const UserContext = createContext<AuthUser | null>(null)
//com: export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
