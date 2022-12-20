import { createContext, useContext, useState } from "react";

// type define
type PropsType = {
  first: string;
  last: string;
};
// const initialState: PropsType = {
//   first: "",
//   last: "",
// };
// const UserContext = createContext<PropsType>(initialState);
const UserContext = createContext<PropsType | null>(null);
// const UserContext = createContext({} as PropsType);

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
  const user = useContext(UserContext);

  return (
    <div>
      <div>First: {user?.first}</div>
      <div>Last: {user?.last}</div>
    </div>
  );
}
export default UseContextComponent;

// note: context api system===>

// 1.
// createContext k import kore nite hobe
// createContext dea akta context create kore nite  hobe
// akhn jodi initial value ki hobe ta jana na thake tahole amra null type dite pari..kintu jokhn provider dea value pass korte hobe tokhn type chaibe. tai amader union (|) dea null er sathe ki value pass korlamsetar type o die dite hobe.
// aikhane dekha jaitice j provider a value dewar time a user pathano hoyeche
// oitar value amra jani Propstype. so union hishebe aitai dea dite hobe

// const UserContext = createContext<PropsType | null>(null⭐⭐);
// alternatively ai syntext o dite pari
// const UserContext = createContext({} as PropsType);
// 2.
// akta function create korte hobe jeta children receive korbe
// oitay value o pahty dibo
// UseContextComponent function aikhane wrapper
// 3.
// then root k context.provider dea wrap kore dibo
// then akta jayga theke useContextdea data nea nibo
// ConsumerComponent tai last component jeta data receive korlo
