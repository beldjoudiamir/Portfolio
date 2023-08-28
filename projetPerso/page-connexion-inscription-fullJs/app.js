// Transition de la section entre la page de connexion et celle d'inscription

const btnSignUp = document.querySelector(".btnSignUp");
const btnLogIn = document.querySelector(".btnLogIn");
const rightContainerLogIn = document.getElementById("rightContainerLogIn");
const rightContainerSignUp = document.getElementById("rightContainerSignUp");

btnSignUp.addEventListener("click", function() {
    if (rightContainerLogIn.style.display === "none") {
        rightContainerLogIn.style.display = "flex";
        rightContainerSignUp.style.display = "none";
    } else {
        rightContainerLogIn.style.display = "none";
        rightContainerSignUp.style.display = "flex";
    }
});

btnLogIn.addEventListener("click", function() {
    if (rightContainerLogIn.style.display === "none") {
        rightContainerLogIn.style.display = "flex";
        rightContainerSignUp.style.display = "none";
    } else {
        rightContainerLogIn.style.display = "none";
        rightContainerSignUp.style.display = "flex";
    }
});


const inputsValidity = {
    nameSignUp: false,
    firstnameSignUp: false,
    number: false,
    emailSignUp: false,
    passwordSignUp: false, 
    confirm_password: false
  }

const form = document.querySelector("#formSignUp");
//console.log(form);

const container = document.querySelector("#rightContainerSignUp");
//console.log(container);

form.addEventListener("submit", handleForm);

let isAnimating = false;

function handleForm(e){
    e.preventDefault()
  
    const keys = Object.keys(inputsValidity)
    const failedInputs = keys.filter(key => !inputsValidity[key])
    console.log(failedInputs);
    if(failedInputs.length && !isAnimating) {
      isAnimating = true;
      container.classList.add("shake");
  
      setTimeout(() =>{
        container.classList.remove("shake")
        isAnimating = false;
      }, 400)
  
      failedInputs.forEach(input => {
        const index = keys.indexOf(input)
        showValidation({index: index, validation: false})
      })
    }
    else {
      alert("Données envoyées avec succès.")
    }
  
  }

  function showValidation({index, validation}) {
    if(validation){
      validationIcons[index].style.display = "inline";
      validationIcons[index].src = "./img/check.svg";
      if(validationTexts[index])  validationTexts[index].style.display = "none";
    } 
    else {
      validationIcons[index].style.display = "inline";
      validationIcons[index].src = "./img/error.svg";
      if(validationTexts[index]) validationTexts[index].style.display = "block";
    }
  }


  const validationIcons = document.querySelectorAll(".iconeVerif");
  const validationTexts = document.querySelector(".errorMsg");
  //console.log(validationTexts);



    const nameSignUpInput = document.querySelector("#inputGroup:nth-child(1) input");
    
    nameSignUpInput.addEventListener("blur", nameSignUpValidation);
    nameSignUpInput.addEventListener("input", nameSignUpValidation);

   

    function nameSignUpValidation(){
        if(nameSignUpInput.value.length >= 4 ) {
        showValidation({index: 0, validation: true})
        inputsValidity.nameSignUp = true;
        }
        else {
        showValidation({index: 0, validation: false})
        inputsValidity.nameSignUp = false;
        }
    }


    const firstnameSignUpInput = document.querySelector("#inputGroup:nth-child(2) input");

    firstnameSignUpInput.addEventListener("blur", firstnameSignUpValidation);
    firstnameSignUpInput.addEventListener("input", firstnameSignUpValidation);

    function firstnameSignUpValidation(){
        if(firstnameSignUpInput.value.length >= 4 ) {
            showValidation({index: 1, validation: true})
            firstnameSignUpValidation.firstnameSignUp = true;
            }
            else {
            showValidation({index: 1, validation: false})
            firstnameSignUpValidation.firstnameSignUp = false;
            }

    }

    const numberInput = document.querySelector("#inputGroup:nth-child(3) input");

    numberInput.addEventListener("blur", numberValidation);
    numberInput.addEventListener("input", numberValidation);

    function numberValidation(){
        if(numberInput.value.length === 10 ) {
            showValidation({index: 2, validation: true})
            numberValidation.firstnameSignUp = true;
            }
            else {
            showValidation({index: 2, validation: false})
            numberValidation.firstnameSignUp = false;
            }

    }


const emailSignUpInput = document.querySelector("#inputGroup:nth-child(4) input")
//console.log(mailInput);

emailSignUpInput.addEventListener("blur", mailValidation)
emailSignUpInput.addEventListener("input", mailValidation)

// https://regex101.com/
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function mailValidation(){
  if(regexEmail.test(emailSignUpInput.value)){
    showValidation({index: 3, validation: true})
    inputsValidity.email = true;

  }
  else {
    showValidation({index: 3, validation: false})
    inputsValidity.email = false;

  }
}


const pswInput = document.querySelector("#inputGroup:nth-child(5) input");
// console.log(pswInput);

pswInput.addEventListener("blur", passwordValidation)
pswInput.addEventListener("input", passwordValidation)


const passwordVerification = {
    length: false,
    symbol: false,
    number: false
  }
  
  const regexList = {
    symbol: /[^a-zA-Z0-9\s]/,
    number: /[0-9]/
  }

  let passwordValue;

  function passwordValidation(){
    passwordValue = pswInput.value;
    let validationResult = 0;
  
    for(const prop in passwordVerification){
      
      if(prop === "length") {
        if(passwordValue.length < 7) {
          passwordVerification.length = false;
        }
        else {
          passwordVerification.length = true;
          validationResult++;
        }
        continue;
      }
  
      if(regexList[prop].test(passwordValue)) {
        passwordVerification[prop] = true;
        validationResult++;
      } 
      else {
        passwordVerification[prop] = false;
      }
    }
  
    if(validationResult !== 3) {
      showValidation({index: 4, validation: false})
      inputsValidity.password = false;
  
    }
    else {
      showValidation({index: 4, validation: true})
      inputsValidity.password = true;
  
    }
  
    passwordStrength()
  }

  const lines = document.querySelectorAll(".lines div")
  //console.log(lines);

  function passwordStrength(){
    const passwordLength = pswInput.value.length;
    
    if(!passwordLength) {
      addLines(0)
    }
    else if(passwordLength > 9 && passwordVerification.symbol && passwordVerification.number) {
      addLines(3)
    }
    else if(passwordLength > 6 && passwordVerification.symbol || passwordVerification.number) {
      addLines(2)
    }
    else {
      addLines(1)
    }
  
    function addLines(numberOfLines) {
      lines.forEach((el, index) => {
        if(index < numberOfLines) {
          el.style.display = "block"
        }
        else {
          el.style.display = "none"
        }
      })
    }
  
    if(validationIcons[5].style.display === "inline") {
      confirmPassword()
    }
  }


const confirmInput = document.querySelector("#inputGroup");
 
  // const confirmInput = document.querySelector("#inputGroup:nth-child(6) input");
  console.log(confirmInput);
