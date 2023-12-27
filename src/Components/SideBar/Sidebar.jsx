import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar({ isSidebarOpen}) {


  return (
    <>
 <aside className={`fixed ${isSidebarOpen ? "left-0" : "left-[-100%]"} transition-all h-screen z-50 py-[1rem] px-[1rem] flex flex-col w-[60%] bg-[white] `}>
        <div className="flex">
          <Link to={"/"} className=" flex-shrink-0">
            <img
              className="h-8"
              src="https://www.ombrulla.com/logo.svg"
              alt="logo"
              loading="lazy"
            />
          </Link>
        </div>

        <nav className=" grid space-y-[1rem] mt-[2rem] ">
          <div className=" flex  items-center me-8 ">
            <Link to={"/"} className="hover:text-primary text-primary font-bold">
              Home
            </Link>
          </div>
          <hr />
          <div className=" relative group flex  items-center me-8">
            <Link to={"/"} className="hover:text-primary font-bold flex items-center gap-1">
             <span> Services</span> <i className="fa-solid fa-chevron-down fa-sm"></i>
            </Link>
          
        
          </div>
          <hr />
          <div className=" relative group flex items-center me-8">
            <Link to={"/"} className="hover:text-primary font-bold flex items-center gap-1">
             <span>Products</span> <i className="fa-solid fa-chevron-down fa-sm"></i>
            </Link>

        
           
          </div>
          <hr />
          <div className=" flex  items-center me-8">
            <Link to={"/about"} className="hover:text-primary font-bold">
              About
            </Link>
          </div>
          <hr />
          <div className=" flex items-center me-8">
            <Link to={"/blog"} className="hover:text-primary font-bold">
              Blog
            </Link>
          </div>
          <hr />
          <div className=" flex  items-center me-8">
            <Link to={"/contact"} className="hover:text-primary font-bold">
              Contact
            </Link>
          </div>
          <hr />
        </nav>

    
      </aside>
    
    
    </>
  )
}

export default Sidebar