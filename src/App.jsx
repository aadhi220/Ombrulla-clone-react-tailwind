import { useState } from "react";

import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={  <Home />}/>
    </Routes>
      <Footer />
    </>
  );
}

export default App;
