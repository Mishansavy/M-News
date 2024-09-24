import React from "react";
import Search from "./Components/Search.jsx";
import Pagination from "./Components/Pagination.jsx";
import Stories from "./Components/Stories.jsx";
import "./App.css";
const App = () => {
  const websitename = "Mishan Bytes & Memes News";

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
