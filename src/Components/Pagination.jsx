import React from "react";
import "../app.css";
import { useGlobalContext } from "../context";
export const pagination = () => {
  const { Page, nbPages, getPrevPage, getNextpage } = useGlobalContext();
  return (
    <>
      <div className="pagination-area">
        <button onClick={() => getPrevPage()}>previous</button>
        <p>
          {Page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextpage()}>Next</button>
      </div>
    </>
  );
};
export default pagination;
