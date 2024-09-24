import React from "react";
import Search from "./Components/Search.jsx";
import Pagination from "./Components/Pagination.jsx";
import Stories from "./Components/Stories.jsx";
import "./app.css";
const App = () => {
  const websitename = "Mishan News";

  return (
    <>
      <h1 className="heading">{websitename}</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};
export default App;
