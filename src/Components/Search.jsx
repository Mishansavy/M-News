import React from "react";
import { useGlobalContext } from "../context";
function Search() {
  const { query, searchpost } = useGlobalContext();
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-box">
          <input
            type="text"
            placeholder="search post"
            value={query}
            onChange={(e) => searchpost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}
export default Search;
