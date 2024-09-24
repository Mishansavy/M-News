import React from "react";
import "../App.css";
import { useGlobalContext } from "../context";

function Pagination() {
  const { Page, nbPages, getPrevPage, getNextpage } = useGlobalContext();

  return (
    <div className="pagination-area">
      <button onClick={getPrevPage}>Previous</button>
      <p>
        {Page + 1} of {nbPages}
      </p>
      <button onClick={getNextpage}>Next</button>
    </div>
  );
}

export default Pagination;
