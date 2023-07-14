const responses = ["joe-dassin", "Rochefourchat", "Karl-Benz"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");
// console.log(form);
form.addEventListener("submit", submitFrom);

function submitFrom(e){
  e.preventDefault();

  const result = [];
  const radioButtons = document.querySelectorAll("input[type='radio']:checked");
  // console.log(radioButtons);

  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      result.push(true)
    }else{
      result.push(false)
    }
  });
  
  // console.log(result);

  showResult(result);
  showColor(result);
}

const titelResult = document.querySelector(".titelRes");
const scoreResult = document.querySelector(".scoreRes");
const helpResult = document.querySelector(".helpRes");

// console.log(titelResult);

function showResult(result) {

  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // words.filter(word => word.length > 6);

  const errorNumber = result.filter(resFalsy => resFalsy === false).length;
  // console.log(errorNumber);

  switch (errorNumber) {
    case 0:
      titelResult.textContent = "✨ Barvo !!! ✨";
      scoreResult.textContent = "Score : 3 / 3";
      helpResult.textContent = "Quelle Culture ... ";
      break;
    case 1:
      titelResult.textContent = "✔️ Bien ! mais tu peux faire mieux ... ✔️";
      scoreResult.textContent = "Score : 2 / 3";
      helpResult.textContent = "Pose la question a google MDR ";
      break;

    case 2:
      titelResult.textContent = "👎 C'est pas trop top ... 👎";
      scoreResult.textContent = "Score : 1 / 3";
      helpResult.textContent = "No no no";
      break;
    case 3:
        titelResult.textContent = "😭 Va reviser ! 😭";
        scoreResult.textContent = "Score : 0 / 3";
        helpResult.textContent = "File dans ta chambre ! 👀";
        break;
  }  
}

const colorQuiz = document.querySelectorAll(".differentQuestions");

// console.log(colorQuiz);

function showColor(result){

result.forEach((res, index) => {
  if (result[index]) {
    colorQuiz[index].style.backgroundColor = "#28B463";
  }else{
    colorQuiz[index].style.backgroundColor = "#CD6155";
  }
  
});
 
}


