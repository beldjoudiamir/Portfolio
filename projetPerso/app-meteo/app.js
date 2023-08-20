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
  myDate.innerHTML = `le ${jour_semaine}, ${jour} ${mois}  ${annee}`;
  //console.log(myDate);

  // affichage de heure
  const myTime = document.querySelector(".myTime");
  myTime.innerHTML = `${heure} H ${minute}`;

  //console.log(myTime);
} // Fin fonction dateEtHeure

// Pour actualiser l'heure chaque minutes, on rappelle la fonction dateEtHeure()
// toutes les 100 millisecondes, donc toutes les secondes
window.onload = function () {
  setInterval("dateEtHeure()", 1000);
};


const loader = document.querySelector(".loader");
const errorInformation = document.querySelector(".infoIcon");
// console.log(errorInformation);

async function donneesMeteo(){
  try {
    const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=f81a46d1-eb19-4595-ae18-aa90f4795234")
    // console.log(response);

    if(!response.ok) {
      throw new Error(`Error ${response.status}, ${response.statusText}`)
    }

    const resData = await response.json();
    // console.log(resData);

    const sortieData = {
      city: resData.data.city,
      country: resData.data.country,
      temperature: resData.data.current.weather.tp,
      iconId: resData.data.current.weather.ic
    }

    populateUI(sortieData)

    
  }
  catch (error) {

    loader.classList.remove("active");
    errorInformation.textContent = error.message;

  }
}
donneesMeteo()

// console.log(sortieData);
// affichage la temperature

const myTemperature = document.querySelector(".myTemperature");
const myCountry = document.querySelector(".myCountry");
const myCity = document.querySelector(".myCity");
const iconInfo = document.querySelector(".infoIcon");


function populateUI(data){

  myTemperature.textContent = `${data.temperature}°`;
  myCountry.textContent = `${data.country}`;
  myCity.textContent = `${data.city}`;
  iconInfo.src = `./img/${data.iconId}.svg`;
  iconInfo.style.width = "15rem";

  loader.classList.remove("active");

}








