import React from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
          Ravi's
        </span>
        <span className="text-white">Blog</span>
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <button className="h-10 w-12 lg:hidden" color="gray" pill>
        <AiOutlineSearch size={32} />
      </button>

      <div className="flex gap-2 md:order-2">
        <button className="w-12 h-10 hidden sm:inline  " color="gray" pill>
          <FaMoon size={22} />
        </button>

         <Link to="/sign-in">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md">
            Sign In
          </button>
        </Link> 

        {/* <Link to='/sign-in'>
            <button gradientDuoTone='purpleToBlue' outline>Sign In</button>
        </Link> */}

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;