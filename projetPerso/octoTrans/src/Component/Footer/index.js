import imgOneComponent from "../../Assets/transport-et-livraison-containers-goliat-e1592928463325.jpg";
import iconeFacebook from "../../Assets/facebook.png";
import iconeGoogle from "../../Assets/chercher.png";
import iconeInsta from "../../Assets/instagram.png";

import "./style.scss";

function Footer() {
  const date = new Date();
  const annee = date.getFullYear();

  return (
    <>
      <div className="contactComponent">
        <h1 className="titel">Contactez nous</h1>

        <div className="contactUs">
          <div className="contactPhone">
            <p>
              <span>Télephone :</span> 01 xx xx xx xx
            </p>
            <p>
              <span>Email :</span> contact@octotrans.fr
            </p>
            <p>
              <span>Adresse :</span> 01 Alle de xxx 75000 paris
            </p>
          </div>
          <div className="contactMail">
            <div className="socIcone">
              <img src={iconeFacebook} alt="facebook" />
              <img src={iconeGoogle} alt="google" />
              <img src={iconeInsta} alt="instagram" />
            </div>
            <button>Communication par courrier électronique</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Copyright © {annee} Octotrans. Tous les droits sont réservés.</p>
      </div>
    </>
  );
}

export default Footer;
