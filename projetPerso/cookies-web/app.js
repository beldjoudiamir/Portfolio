const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
  input.addEventListener("invalid", handleValidation)
  input.addEventListener("input", handleValidation)
})

function handleValidation(e){
    // console.log(e);
    if (e.type === "invalid") {
      e.target.setCustomValidity("vous devez remplir le formulaire :s");
    } else {
      e.target.setCustomValidity("");
    }
}



const formCookie = document.querySelector("form");
// console.log(formCookie);
formCookie.addEventListener("submit", handleForm);

function handleForm(e){
  e.preventDefault()

  const myCookie ={};

  inputs.forEach(input => {

    // https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute
    const nameAttribute = input.getAttribute("name")
    myCookie[nameAttribute] = input.value;
  });

 //  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
 // JOURS / HEURES / MINUTES / SECONDES / Millisecondes =>    1*24*60*60*1000

 myCookie.expires = new Date(new Date().getTime() + 2*24*60*60*1000)

 // console.log(myCookie);
 createCookie(myCookie);
 // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
 formCookie.reset();
}

function createCookie(myCookie){

  // creation de post it

  if (postItCookieExist(myCookie.name)){
    createCookieInDom({name: myCookie.name, state: "modifié", color: "orangered"})
  }
  else{
    createCookieInDom({name: myCookie.name, state: "créé", color: "green"})
  }

  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString

  document.cookie = `${encodeURIComponent(myCookie.name)}=${encodeURIComponent(myCookie.value)};expires=${myCookie.expires.toUTCString()}`
  // console.log(myCookie.name);
  // console.log(myCookie.value);

  if(cookiesList.children.length){
    displayCookies();
  }
}


function postItCookieExist(name){
  const cookies = document.cookie.replace(/\s/g, "").split(";");
  const onlyCookies = cookies.map(cookie => cookie.split("=")[0]);
  // console.log(onlyCookies);
  const cookiePresence = onlyCookies.find(cookie => cookie === encodeURIComponent(name));

  return cookiePresence;

}


const toastsContainer = document.querySelector(".toasts-container");
console.log(toastsContainer);

function createCookieInDom({name, state, color}){
  const cookieInfos = document.createElement("p");
  cookieInfos.className = "toast";

  console.log(cookieInfos);


  cookieInfos.textContent = `Cookie ${name} ${state}.`;

  console.log(cookieInfos);
  
  cookieInfos.style.backgroundColor = color;

  console.log(cookieInfos);

  toastsContainer.appendChild(cookieInfos);

  setTimeout(() =>{
    cookieInfos.remove()
  }, 2500)
}


const displayButton = document.querySelector(".button");
const infoTxt = document.querySelector(".info-txt");
const cookiesList = document.querySelector(".list-cookies");

displayButton.addEventListener("click", displayCookies);


// https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock

let lock = false;

function displayCookies() {
  if(cookiesList.children.length) cookiesList.textContent ="";

  const cookies = document.cookie.replace(/\s/g, "").split(";").reverse();
  // console.log(cookies);

  if(!cookies[0]){

    if(lock) return;

    lock = true;
    infoTxt.textContent = "pas de cookies a affiche ... crééz-en un :)";

    setTimeout(() => {
      infoTxt.textContent = "";
      lock = false;
    }, 2000);
    return;
  }
    createElement(cookies)
  }


  function createElement(cookies){

    console.log(cookies);

    cookies.forEach( cookie =>{
      const formatCookie = cookie.split("=");
      console.log(formatCookie);
      
      const listItem = document.createElement("li");
      const name = decodeURIComponent(formatCookie[0])

      listItem.innerHTML =`

      <p>
        <span>Nom</span> : ${name}
      </p>
      <p>
        <span>Valeur</span> : ${decodeURIComponent(formatCookie[1])}
      </p>

      <button class="buttonRemove">x</button>
      
      `
      listItem.querySelector(".buttonRemove").addEventListener("click", e => {
        createCookieInDom({name:name, state: "supprimé", color: "crimson"})
        document.cookie = `${formatCookie[0]}=; expires=${new Date(0)}`
        e.target.parentElement.remove()
        
      })

      cookiesList.append(listItem);

    })
  }
 

