import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="  flex justify-between m-4">
        <p className=" font-extrabold text-2xl   font-title">SUPPORT.</p>
        <ul className=" flex gap-3 font-title">
          <li className=" hover:text-primary-0 font-title text-xl ">Login</li>
          <li className="  border-2 border-primary-0 rounded text-white pl-5 pr-5 bg-primary-0 pt-1 pb-1 -mt-1">
            {" "}
            Sign Up
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
