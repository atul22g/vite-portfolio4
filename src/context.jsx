import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

// const API = `${import.meta.env.VITE_API_KEY}`;
const API = `https://bogotas.github.io/_Apis/Projects/index.json`;

const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Atul Goyal",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Atul Gupta",
        image: "./images/about1.svg",
      },
    });
  };

  //  to get the api data
  const getProjects = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_PROJECTS", payload: data });
    } catch (error) {
      // console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getProjects(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
