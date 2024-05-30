import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

export default function NavBar() {
  const [data] = useContext(UserContext);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo _Plan de travail 1.png" // Assurez-vous que le chemin de l'image est correct
              className="h-20"
              alt="agConstruction"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              AG CONSTRUCTIONS
            </span>
          </NavLink>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:0767870841"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              (+33) 76 787 0841
            </a>

            {data?.id ? (
              <>
                <NavLink
                  id="logOut"
                  className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
                  to="/admin"
                >
                  espace administratif
                </NavLink>
                <NavLink
                  id="logOut"
                  className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
                  to=""
                >
                  se déconnecter
                </NavLink>
              </>
            ) : (
              <NavLink
                id="singIn"
                className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
                to="/connexion"
              >
                connexion
              </NavLink>
            )}
          </div>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <NavLink
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Accueil
              </NavLink>
              <NavLink
                to="/service"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Service
              </NavLink>
              <NavLink
                to="/achievements"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Realisations
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Contactez-nous
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
