import React, { useState } from "react";

//funciona bien
// const initialState = {
//   id: 1,
//   uid: "Adrian"
// };

//prueba
const initialState = {
  id: null,
  role: null,
  view: true
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
