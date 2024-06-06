import { useState, useContext, createContext, useEffect } from "react";

const SavedContext = createContext();
const SavedProvider = ({ children }) => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    let existingSavedProducts = localStorage.getItem("saved-products");
    if (existingSavedProducts) setSaved(JSON.parse(existingSavedProducts));
  }, []);
  return (
    <SavedContext.Provider value={[saved, setSaved]}>
      {children}
    </SavedContext.Provider>
  );
};

const useSaved = () => useContext(SavedContext);

export { useSaved, SavedProvider };
