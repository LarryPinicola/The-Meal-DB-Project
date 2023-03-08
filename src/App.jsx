import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import Searcher from "./components/Searcher";
import "./index.css";

const App = () => {
  return (
    <div className=" scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/search" element={<Searcher />} />
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Meal />} />
      </Routes>
    </div>
  );
};

export default App;
