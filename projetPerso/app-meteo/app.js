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


var dateGlobale = new Date();

var annee = dateGlobale.getFullYear();
var mois = dateGlobale.getMonth();
var jour = dateGlobale.getDate();
var jour_semaine = dateGlobale.getDay();

var heure = dateGlobale.getHours();
var minute = dateGlobale.getMinutes();
var seconde = dateGlobale.getSeconds();

if( heure < 10 ) { heure = "0" + heure; }
if( minute < 10 ) { minute = "0" + minute; }
if( seconde < 10 ) { seconde = "0" + seconde; }

var MOIS = [ "janvier", "février", "mars", "avril" ];
var JOUR_SEMAINE = [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ];

mois = MOIS[mois];
jour_semaine = JOUR_SEMAINE[jour_semaine];

document.getElementById("heure").innerHTML= jour_semaine + " " + jour + " " + mois + " " + annee + " - " + heure + ":" + minute + ":" + seconde;


*/

const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre" ]

function frenchTodayDate() {

  let today = new Date();
  let year = today.getFullYear()
  let dayNumber = today.getDate()
  let month = mois[today.getMonth()]

  let hours = today.getHours()
  let minute = today.getMinutes()

  


  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  let weekday = today.toLocaleDateString("fr-FR", { weekday: "long" });

  return { weekday, dayNumber, month, year , hours , minute}
}

// console.log(frenchTodayDate())
//=> { weekday: 'mercredi', dayNumber: 12, month: 'octobre', year: 2022 }

/*Supposons que vous souhaitiez imprimer la date conformément aux règles de la langue française*/
const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
const {weekday, dayNumber, month, year, hours , minute} = frenchTodayDate()
const aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
//console.log(aujourdhui)
//=> Mercredi, le 12 octobre 2022

// supposons que vous souhaitez a récupérer l'heure

const heure = `${hours} H ${minute}`


if( hours < 10 ) { hours = "0" + hours; }
if( minute < 10 ) { minute = "0" + minute; }


// console.log(heure);


// affichage de date 

const myDate = document.querySelector(".myDate");
myDate.textContent = `${aujourdhui}`;
//console.log(myDate);

// affichage de heure 
const myTime = document.querySelector(".myTime");
myTime.textContent = `${heure}`



//console.log(heure);


