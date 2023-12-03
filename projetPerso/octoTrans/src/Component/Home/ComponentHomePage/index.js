import { UserCard } from "react-ui-cards";

import React from "react";

import "./style.scss";
function ComponentHome() {
  return (
    <>
      <div className="homeComponent">
        <h1 className="titel">À propos de nous</h1>
        <p className="subTitle">
          Nous sommes fiers de vous offrir un service de transport exceptionnel
          à un prix imbattable.
        </p>
        <p className="paragraph">
          Notre société de transport de marchandises, Octo Trans, est un leader
          de confiance dans le domaine de la logistique en Europe. Forts d'une
          expertise de pointe et d'une vaste expérience, nous offrons des
          solutions de transport de marchandises rapides, fiables et efficaces à
          travers tout le continent européen. Que ce soit pour le transport de
          fret par voie terrestre, maritime ou aérienne, nous mettons à votre
          disposition une gamme complète de services pour répondre à vos besoins
          logistiques. Notre engagement envers la qualité, la ponctualité et la
          satisfaction du client nous distingue. Avec un réseau étendu de
          partenaires et de professionnels de la logistique, nous sommes prêts à
          relever les défis les plus complexes. Laissez-nous prendre en charge
          votre logistique et vous aider à atteindre vos objectifs de transport
          de marchandises en Europe.
        </p>
      </div>

      <div className="transportsComponent">
        <h1 className="titel">Simplifiez vos Transports</h1>
        <p className="subTitle">
          Bénéficiez d’une solution fiable et efficace.
        </p>

        <div className="card">
          <UserCard
            float
            className="cardBest"
            /*href=""*/
            header="https://flotte.dubost-assurances.fr/wp-content/uploads/2023/02/flotte-automobile-entreprise-2500x862-1-1600x552.webp"
            name="CAMION DISPONIBLE 24/24"
            positionName="Nous sommes conscients que vos besoins en transport peuvent survenir à tout moment, de jour comme de nuit. C’est pourquoi nous mettons à votre disposition une flotte de camions disponible 24 heures sur 24. Vous pouvez planifier vos expéditions en fonction de votre emploi du temps, en sachant que nous sommes prêts à transporter vos marchandises à tout moment."
          />
          <UserCard
            float
            className="cardBest"
            header="https://www.maisonsmoches.be/wp-content/uploads/2019/11/Vendre-ma-maison-a-perte.jpg"
            name="LE MEILLEUR PRIX"
            positionName="Nous comprenons l’importance de maîtriser vos coûts de transport. C’est pourquoi nous nous efforçons de vous offrir des tarifs concurrentiels, sans compromettre la qualité de notre service. Vous pouvez compter sur nous pour vous proposer les meilleures offres qui correspondent à votre budget."
          />
          <UserCard
            float
            className="cardBest"
            header="https://www.lesepl.fr/wp-content/uploads/2018/11/bandeau_europe-1600x430.jpg"
            name="PARTOUT EN EUROPE"
            positionName="Notre service couvre l’ensemble du continent européen. Peu importe où se trouve votre destination, nous sommes en mesure de livrer vos marchandises rapidement et efficacement. Notre réseau logistique étendu et nos partenaires fiables nous permettent de garantir des livraisons dans tous les pays européens."
          />
        </div>
      </div>

      <div className="partenairesComponent">
        <h1 className="titel">Nos partenaires</h1>
        <p className="subTitle">FRANCE</p>
        <div className="logoCard">
          <img
            className="tailleCard"
            src="https://xpodotcom.azureedge.net/xpo/static/cs/53cee3a/x_core/img/logo/xpo-logo.svg"
          />
          <img
            className="tailleCard"
            src="https://res.cloudinary.com/talend/image/upload/logos/customers/logo-customer-geodis_f32dyo.svg"
          />

          <img
            className="tailleCard"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/FedEx_Corporation_Logo.png"
          />
          <img
            className="tailleCard"
            src="https://seeklogo.com/images/K/kuehne-nagel-logo-340A3C8372-seeklogo.com.png"
          />
        </div>
        <p className="subTitle">ALLEMAGNE</p>

        <div className="logoCard">
          <img
            className="tailleCard"
            src="https://images.squarespace-cdn.com/content/v1/61f92d97a17c5428e2a2caa7/756a286e-19ca-4e04-b36f-0e187a42c9a9/UPS.png"
          />

          <img
            className="tailleCard"
            src="https://images.squarespace-cdn.com/content/v1/61f92d97a17c5428e2a2caa7/caa0cebe-54e9-43f4-99b7-92958515fad9/dhl.png"
          />
        </div>

        <p className="subTitle">ANGLETERRE</p>
        <div className="logoCard">
          <img
            className="tailleCard"
            src="https://dlmintl.com/wp-content/uploads/2021/04/DLM_logo_700px_dark-1.png"
          />
          <img
            className="tailleCard"
            src="http://www.pikpng.com/pngl/b/529-5297365_england-logistics-england-carrier-services-clipart.png"
          />
        </div>
        <p className="subTitle">ESPAGNE</p>
        <div className="logoCard">
          <img
            className="tailleCard"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Bollore_Logistics_Logo.png"
          />
        </div>

        <p className="paragraph">
          Devenir partenaire & ouvre la porte à une collaboration stratégique
          exceptionnelle. Avec notre vaste réseau et notre expertise , nous
          offrons à nos partenaires des opportunités inégalées pour étendre leur
          portée et accéder à de nouveaux marchés.
          <button>devenir partenaire</button>
        </p>
      </div>
    </>
  );
}
export default ComponentHome;
