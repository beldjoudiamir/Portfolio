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




