import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3005/auth/login",
        { email: username, password },
        {
          // Tu est autoriser a m'envoyer des cookies.
          withCredentials: true,
        }
      )
      .then((res) => {
        setErrorMessage(""); // Réinitialise l'erreur en cas de succès
        console.log("Réponse du serveur:", res.data);
        setData({
          id: res.data.id,
          email: res.data.email,
        });
        // Ici, vous pouvez rediriger l'utilisateur ou mettre à jour l'état global pour la connexion réussie
      })
      .catch((err) => {
        console.error("Erreur lors de la connexion:", err);
        const message =
          err.response?.data?.message ||
          "Une erreur est survenue lors de la connexion.";
        setErrorMessage(message); // Met à jour le message d'erreur basé sur la réponse du serveur
        setData({
          id: null,
          email: null,
        });
      });
  };

  return (
    <div className="bg-white relative lg:py-20">
      {JSON.stringify(data)}
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <img
                src="securite-informatique-cadenas-login-mot-passe.jpg"
                alt="Cadenas de sécurité"
              />
            </div>
          </div>
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                Connexion
              </p>
              <form onSubmit={handleLogin}>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <div className="relative">
                    <label
                      htmlFor="username"
                      className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
                    >
                      Email
                    </label>
                    <input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="123@ex.com"
                      type="text"
                      className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      type="password"
                      className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease cursor-pointer"
                    >
                      Se connecter
                    </button>
                  </div>
                </div>
                {errorMessage && (
                  <div className="text-red-500 mt-4 text-center">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
