import React from "react";
import Pagination from "./Components/pagination";
import { Stories } from "./Components/Stories";
import Search from "./Components/Search";
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
