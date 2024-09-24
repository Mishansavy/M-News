import React from "react";
import { Stories } from "./components/Stories.jsx";
import Pagination from "./components/Pagination.jsx";
import Search from "./components/Search.jsx";
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
