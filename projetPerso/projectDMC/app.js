const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];



const form = document.querySelector("form");
// console.log(form);
form.addEventListener("submit", handelFrom)

function handelFrom(e){
  e.preventDefault();
  calBMI();
}

const input = document.querySelectorAll("input");
// console.log(input);

function calBMI(){
  const inputOne = input[0].value;
  const inputTwo = input[1].value;

  // console.log(inputOne,inputTwo);

  if(!inputOne || !inputTwo || inputOne <= 0 || inputTwo <= 0){

    //console.log('Error');
    handelError();
    return
  }

// IMC ou BMI = poids en kg / taille² en m
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

  const BMI = (inputTwo / Math.pow(inputOne/100,2)).toFixed(1);
  console.log(BMI);
  showResult(BMI);
}

const displayBMI = document.querySelector(".response");
const result = document.querySelector(".res");

function handelError(){

  displayBMI.textContent = "No no non";
  displayBMI.style.color = "inherit";
  result.textContent = "vous devez remplir tous les champs";


}

function showResult(BMI){
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find  
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof

  const dataRange = BMIData.find(myRange => {if (BMI >= myRange.range[0] && BMI < myRange.range[1]) return myRange;
  else if (typeof myRange.range === "number" && BMI >= myRange.range ) return myRange;
  })

  // console.log(dataRange);

  displayBMI.textContent= BMI;
  displayBMI.style.color = `${dataRange.color}`;
  
  result.textContent = `Resultat : ${dataRange.name}`;
}




