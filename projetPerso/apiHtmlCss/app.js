//

const searchInfo = document.querySelector("form");
//console.log(searchInfo);

const resDisplay = document.querySelector(".responseApi");

const loader = document.querySelector(".loader");



searchInfo.addEventListener("submit", submitInfo);

function submitInfo(e){
    e.preventDefault();
    myInfo()
}

const input = document.querySelector("input");
// console.log(input);


const errorMsg = document.querySelector(".errorMsg")
// console.log(errorMsg);

function myInfo(){
    const resInput = input.value;
    // console.log(resInput);

    if (resInput === "") {
        errorMsg.textContent = " Ho po pop ! Vous devez remplir le champ ";
        resDisplay.textContent ="";
        return;
    } else {
        errorMsg.textContent = "";
        
        loader.style.display = "flex";
        resDisplay.textContent ="";
        responseApi(resInput);
    }
}

async function responseApi(searchInput) {

    try {

    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=10&srsearch=${searchInput}`)
    //console.log(res);
    const data = await res.json();
    // console.log(data); 

    resInCard(data.query.search);

    }
    catch(error){
        errorMsg.textContent = " Oups pas de connexion";
        loader.style.display = "none";
    }
    
}


function resInCard(myParams) {
    if (myParams.length === 0) {
        errorMsg.textContent = " Aucun resultat malheureusement :( "; 
        loader.style.display = "none";
        return;
    } 

    myParams.forEach(el => {
        const url =`https://en.wikipedia.org/?curid=${el.pageid}`
        const card = document.createElement("div");
        card.className = "responseApi";
        card.innerHTML = `
            <h3 class = "resTitle">
                <a href=${url} target="_blank">${el.title}</a>
            </h3>
            <span class="resSnippet">${el.snippet}
            </span>
            <br>
            <a href=${url} class="resLink" target="_blank">${url}
            </a>
            <br>
        `
        resDisplay.appendChild(card);
    }); 

    
      loader.style.display = "none";
}

/* media query  en JS*/
// https://developer.mozilla.org/fr/docs/Web/API/Window/load_event
window.onload = playLoader;
// https://developer.mozilla.org/fr/docs/Web/API/Window/resize_event
window.onresize = playLoader;

function playLoader(){
  if (window.matchMedia("(max-width: 1225px)").matches) {
    errorMsg.textContent = " Malheureusement, je n'ai pas encore mis en place le rendu adaptatif pour tablette et mobile... ";
    errorMsg.style.color ="#17202A";
    resDisplay.textContent ="";
    loader.style.display = "flex";
  } else {
    loader.style.display = "none";
    errorMsg.textContent = "";
  };
}






