/* 
// Set variable to current date and time

const date = new Date();

let day = date.getDate()
let year = date.getFullYear() 
let month = date.getMonth()


// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `le ${day} - ${month} - ${year}`;

// console.log(currentDate);

===================================================================

*/

function dateEtHeure() {
  const dateGlobale = new Date();

  const annee = dateGlobale.getFullYear();
  let mois = dateGlobale.getMonth();
  let jour = dateGlobale.getDate();
  let jour_semaine = dateGlobale.getDay();

  let heure = dateGlobale.getHours();
  let minute = dateGlobale.getMinutes();
  let seconde = dateGlobale.getSeconds();

  if (heure < 10) {
    heure = "0" + heure;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconde < 10) {
    seconde = "0" + seconde;
  }

  const MOIS = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const JOUR_SEMAINE = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  mois = MOIS[mois];
  jour_semaine = JOUR_SEMAINE[jour_semaine];

  //console.log(annee);
  //console.log(jour);
  //console.log(mois);
  //console.log(jour_semaine);
  //console.log(heure);
  //console.log(minute);

  // affichage de date

  const myDate = document.querySelector(".myDate");
  myDate.innerHTML = `le ${jour_semaine}, ${jour} ${mois} ${annee}`;
  //console.log(myDate);

  // affichage de heure
  const myTime = document.querySelector(".myTime");
  myTime.innerHTML = `${heure} H ${minute}`;

  //console.log(myTime);
} // Fin fonction dateEtHeure

// Pour actualiser l'heure chaque minutes, on rappelle la fonction dateEtHeure()
// toutes les 100 millisecondes, donc toutes les secondes
window.onload = function () {
  setInterval("dateEtHeure()", 100);
};
