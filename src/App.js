import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      {/* <Hero/> */}
    </BrowserRouter>
  );
};

export default App;
