import react, { useState } from "react";
import dataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [res, setRes] = useState("");

  return (
    <dataContext.Provider value={{ res, question, setQuestion, setRes }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
