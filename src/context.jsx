//context creation
//provider
// Consumer lengthly process so remove it
//useContext hook
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isloading: true,
  query: " ",
  nbPages: 0,
  Page: 0,
  hits: [],
};

const AppContext = React.createContext();
// creating provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //to remove the post
  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };
  // search function
  const searchpost = (SEARCH_QUERY) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: SEARCH_QUERY,
    });
  };
  //pagination
  const getNextpage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.Page}`);
  }, [state.query, state.Page]);
  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchpost, getPrevPage, getNextpage }}
    >
      {children}
    </AppContext.Provider>
  );
};
//custom hook create
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
