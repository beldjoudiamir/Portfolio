import imgHome from "../../Assets/fibalpack-bandeau-home-1662639777.png";
import ComponentHome from "./ComponentHomePage/index";
import "./style.scss";
export default function Home() {
  return (
    <>
      <div className="Home">
        <h1 className="titel">Octo Trans</h1>
        <p>Bienvenue</p>
        <img src={imgHome} className="imagHome" />
      </div>
      <div>
        <ComponentHome />
      </div>
    </>
  );
}
