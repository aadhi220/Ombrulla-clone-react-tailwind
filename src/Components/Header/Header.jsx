import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="fixed top-0 flex w-full items-center justify-between  md:h-16 md:px-24">
        <div className="flex">
          <Link to={"/"} className=" flex-shrink-0">
            <img
              className="h-8 "
              src="https://www.ombrulla.com/logo.svg"
              alt="logo"
              loading="lazy"
            />
          </Link>
        </div>

        <nav className=" flex items-center">
          <div className=" flex justify-center items-center me-8 ">
            <Link to={"/"} className="hover:text-primary text-primary font-bold">
              Home
            </Link>
          </div>
          <div className=" relative group flex justify-center items-center me-8">
            <Link to={"/"} className="hover:text-primary font-bold flex items-center gap-1">
             <span> Services</span> <i className="fa-solid fa-chevron-down fa-sm"></i>
            </Link>

         <div className="absolute transition-all  scale-0 top-5 pt-5 font-medium left-0 group-hover:scale-100 ">
                <div className=" flex  flex-col bg-white">
                    <Link className="hover:text-primary border border-1 px-5 py-5 w-[15rem]">Ai Visual Inspection </Link>
                    <Link className="hover:text-primary border border-1 px-5 py-5 w-[15rem]">Ai infrastruce Inspection </Link>
                    <Link className="hover:text-primary border border-1 px-5 py-5 w-[15rem]">Ai Visual Inspection </Link>
                    <Link className="hover:text-primary border border-1 px-5 py-5 w-[15rem]">Ai Visual Inspection </Link>
                </div>
         </div>
        
          </div>
          <div className=" relative group flex justify-center items-center me-8">
            <Link to={"/"} className="hover:text-primary font-bold flex items-center gap-1">
             <span>Products</span> <i className="fa-solid fa-chevron-down fa-sm"></i>
            </Link>

         <div className="absolute transition-all  scale-0 top-5 pt-5 font-medium left-0 group-hover:scale-100 ">
                <div className=" flex  flex-col bg-white">
                    <Link className="hover:text-primary border border-1 px-5 py-5 w-[18rem]"><span>Asset Performance Managment</span> </Link>
                    
                </div>
         </div>
        
          </div>
       
          <div className=" flex justify-center items-center me-8">
            <Link to={"/about"} className="hover:text-primary font-bold">
              About
            </Link>
          </div>
          <div className=" flex justify-center items-center me-8">
            <Link to={"/blog"} className="hover:text-primary font-bold">
              Blog
            </Link>
          </div>
          <div className=" flex justify-center items-center me-8">
            <Link to={"/contact"} className="hover:text-primary font-bold">
              Contact
            </Link>
          </div>
       
        </nav>
      </header>
    </>
  );
}

export default Header;
