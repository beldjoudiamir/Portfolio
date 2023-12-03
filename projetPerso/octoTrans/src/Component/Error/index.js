import noFound from "../../Assets/erreur-404.png";
import "./style.scss";
export default function Erreur() {
  return (
    <div className="erreurPage">
      <img className="helloPage" src={noFound} alt="No Found" />
    </div>
  );
}
