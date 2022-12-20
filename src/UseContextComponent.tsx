import { createContext, useContext, useState } from "react";

// type define
type PropsType = {
  first: string;
  last: string;
};
const initialState: PropsType = {
  first: "",
  last: "",
};
const UserContext = createContext<PropsType>(initialState);

// wrapper of the root
function UseContextComponent() {
  const [user, userSet] = useState<PropsType>({
    first: "Jane",
    last: "Smith",
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          userSet({
            first: "Josie",
            last: "Wales",
          })
        }
      >
        Change context
      </button>
    </UserContext.Provider>
  );
}
// data is received here
function ConsumerComponent() {
  const user = useContext<PropsType>(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}
export default UseContextComponent;

// note: context api system===>

// 1.
// createContext k import kore nite hobe
// createContext dea kata context create kore nite  hobe
// const UserContext = createContext<PropsType>(initialState);
// 2.
// akta function create korte hobe jeta children receive korbe
// oitay value o pahty dibo
// UseContextComponent function aikhane wrapper
// 3.
// then root k context.provider dea wrap kore dibo
// then akta jayga theke useContextdea data nea nibo
// ConsumerComponent tai last component jeta data receive korlo
