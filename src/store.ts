import { createContext } from "react";

const initialState = {
  first: "Jack",
  last: "Herrington",
};

export type UserState = typeof initialState;
// note:
// typeof initialState
// returns the type of the initial state
const context = createContext<typeof initialState>(initialState);

export default context;
