import { createContext, useContext } from 'react';
import jsonData from "../json/question.json";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ jsonData }}>
      {children}
    </DataContext.Provider>
  );
}
