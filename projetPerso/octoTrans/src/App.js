import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Solution from "./Component/Solution";
import Societe from "./Component/Societe";
import Error from "./Component/Error";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/societe" element={<Societe />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
