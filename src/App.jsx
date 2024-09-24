import React from "react";
import Pagination from "./components/Pagination";
import { Stories } from "./components/Stories";
import Search from "./components/Search";
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
