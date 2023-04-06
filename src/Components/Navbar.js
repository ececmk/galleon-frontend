import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const NewUserLinks = [
    { name: "Sign Up", link: "/signup" },
    { name: "Login", link: "/login" },
  ];

  const UserLinks = [{ name: "Profile", link: "/profile" }];

  const [open, setOpen] = useState(false);
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="w-full bg-[#7F3DFF] py-4">
        <div className="md:flex items-center justify-between md:px-10 px-7">
          {" "}
          <Link to="/">
          <div className="font-bold text-5xl curser-pointer flex items-center font-[Poppins] text-[#FCAC12]">
            <span className="text-3x1 text-[#FCAC12] mr-1 pt-2">{" "}<ion-icon name="cash-outline"></ion-icon></span>
            ʛalleon</div>
            </Link>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl flex justify-end right-8 top-2 curser-pointer md:hidden text-white"
          >
            <ion-icon
              className="flex justify-center"
              name={open ? "close" : "menu"}
            ></ion-icon>
          </div>
          {!isLoggedIn && (
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12  md:static 
                        md:z-100 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                        duration-500 ease-in ${
                          open
                            ? "opacity-100"
                            : " md:opacity-100 opacity-0"
                        }`}
            >
              {NewUserLinks.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 text-2xl md:-0 my-7 "
                >
                  <Link
                    to={link.link}
                    className="text-[#FCAC12] hover:text-[#EEEEEE] duration-500 "
                  >
                    {" "}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {isLoggedIn && (
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#7F3DFF]
                        md:z-100 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                        duration-500 ease-in ${
                          open
                            ? "top-20 opacity-100 bg-[#7F3DFF]"
                            : "top-[-490px] bg-[#7F3DFF] md:opacity-100 opacity-0"
                        }`}
            >
              {UserLinks.map((link) => (
                <>
                  <li
                    key={link.name}
                    className="md:ml-8 text-2xl md:-0 my-7 "
                  >
                    <Link
                      to={link.link}
                      className="text-[#FCAC12] hover:text-[#EEEEEE]"
                    >
                      {" "}
                      {link.name}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button
                        className="text-[#FCAC12] hover:text-[#EEEEEE] text-2xl duration-500 ml-2"
                        onClick={logOutUser}
                      >
                        {" "}
                        Logout
                      </button>
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
    
    </nav>
  );
}

export default Navbar;
