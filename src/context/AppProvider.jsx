import { useReducer } from "react";
import AppContext from "./AppContext";

const initialState = {
    modalVisible: false,
}

function appReducer(state, action) {
    switch (action.type) {
        case "switchModal":
          return { ...state, modalVisible: action.payload };
        default:
          throw new Error("Unknown action type: " + action.type);
  }
}

const AppProvider = ({ children }) => {
  const [app, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ app, dispatch }}>
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;