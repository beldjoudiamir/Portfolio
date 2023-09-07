import React, { useState } from 'react';
import Logo from "../../../public/logo.gif"
import "./style.scss"

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div>
        <nav className="container mx-auto px-2 py-0">
          <div className="flex justify-between items-center font-semibold">
            <img className="text-2xl font-bold" id='logo' src={Logo} alt="Logo" />
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-orange-400">Accueil</a>
              <a href="#" className="hover:text-orange-400">À propos</a>
              <a href="#" className="hover:text-orange-400">Services</a>
              <a href="#" className="hover:text-orange-400">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="px-3 py-1 rounded">
                <span class="material-symbols-outlined" id='symbolsMenu'>menu</span>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="mt-4 md:hidden text-center font-semibold">
              <a href="#" className="block hover:text-orange-400 mb-2 ">Accueil</a>
              <a href="#" className="block hover:text-orange-400 mb-2">À propos</a>
              <a href="#" className="block hover:text-orange-400 mb-2">Services</a>
              <a href="#" className="block hover:text-orange-400">Contact</a>
            </div>
          )}
        </nav>
      </div>
       
    );
}
export default NavBar