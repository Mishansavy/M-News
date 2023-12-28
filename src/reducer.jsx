const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isloading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isloading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((ElemID) => ElemID.objectID != action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "PREV_PAGE":
      let pagenum = state.Page - 1;
      if (pagenum < 0) {
        pagenum = 0;
      }
      return {
        ...state,
        Page: pagenum,
      };
    case "NEXT_PAGE":
      let pagenumincreament = state.Page + 1;
      if (pagenumincreament > state.nbPages) {
        pagenumincreament = 0;
      }
      return {
        ...state,
        Page: pagenumincreament,
      };

    default:
      break;
  }
  return state;
};
export default reducer;
