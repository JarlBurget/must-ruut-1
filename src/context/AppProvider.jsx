import { useReducer } from "react";
import AppContext from "./AppContext";
import aboutJSON from "../data/about.json";
import membersJSON from "../data/bandMemberCarousel.json";
import demoJSON from "../data/demoVideos.json";
import concertsJSON from "../data/concerts.json";

const initialState = {
    modalVisible: false,
    about: aboutJSON,
    members: membersJSON,
    demoVideos: demoJSON,
    concerts: concertsJSON,
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