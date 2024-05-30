import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./menu/navBar.jsx";
import Home from "./Home/home.jsx";
import Service from "./Services/service.jsx";
import Contact from "./Contact/contact.jsx";
import NotFound from "./NotFound/notFound.jsx";
import Achievements from "./Achievements/achievements.jsx";
import Connexion from "./Login/login.jsx";
import Admin from "./Admin/admin.jsx";
import Footer from "./Footer/footer.jsx";
import axios from "axios";

export const UserContext = createContext();

function App() {
  const [data, setData] = useState({ id: null, email: null });

  useEffect(() => {
    const checkToken = () => {
      fetch("http://localhost:3005/auth/token", {
        // On inclus les cookies dans les headers qu'on envoie aux serveurs.
        credentials: "include",
        method: "GET",
      })
        .then(async (res) => {
          const data = await res.json();

          setData({ id: data.id, email: data.email });
        })
        .catch(() => {
          setData({ id: null, email: null });
        });
    };

    checkToken();
  }, []);

  return (
    <UserContext.Provider value={[data, setData]}>
      <BrowserRouter>
        <>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/admin" element={<Admin />} />
            <Route component={NotFound} />
            {/* Cette route est rendue lorsque aucune autre route n'est trouvée */}
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
