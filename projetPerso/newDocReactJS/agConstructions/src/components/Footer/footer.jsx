import React from "react";
import { NavLink } from "react-router-dom";

function footer() {
  // Obtenez l'année actuelle
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}
          <NavLink to="/" className=" hover:underline m-3">
            AG Consctuctions™.
          </NavLink>
          All Rights Reserved.
        </span>
      </div>
    </>
  );
}

export default footer;
