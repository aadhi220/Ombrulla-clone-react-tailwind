import { useState } from "react";

import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Routes,Route } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar";

function App() {

  const [isSidebarOpen,setIsSidebarOpen]=useState(false)
  return (
    <div className="App">
      <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
      <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
    <Routes>
      <Route path="/" element={  <Home />}/>
    </Routes>
   
      <Footer />
    </div>
  );
}

export default App;
