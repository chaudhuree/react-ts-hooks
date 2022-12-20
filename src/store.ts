import { createContext } from "react";

type Props = {
  first: string;
  last: string;
};
const initialState: Props = {
  first: "Jack",
  last: "Herrington",
};

export type PropsType = Props;

const context = createContext<Props>(initialState);

export default context;
