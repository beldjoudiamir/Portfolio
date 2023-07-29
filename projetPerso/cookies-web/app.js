const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
  input.addEventListener("invalid", handleValidation)
  input.addEventListener("input", handleValidation)
})

function handleValidation(e){
    // console.log(e);

    if (e.type === "invalid") {
      e.target.setCustomValidity("ce champ ne peut étre vide :s");
    } else {
      e.target.setCustomValidity("");
    }
 
}

const formCookie = document.querySelectorAll("from");
//console.log(formCookie);
formCookie.addEventListener("submit", handleFrom)

function handleFrom(e){
  e.preventDeForm()

}

