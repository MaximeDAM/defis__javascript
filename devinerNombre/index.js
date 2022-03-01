let number = document.getElementById("number");
let answer = document.querySelector(".container__answer");
let nbTry = document.querySelector(".container__nbTry");
let counterShow = document.getElementById("counterShow");
let winningNb = getRandomInt(0, 1000);
let counter = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function guess() {
  let numberVal = number.value;

  if (numberVal != "") {
    
    counter++;
    counterShow.innerHTML = "Essai n°" + counter;
    nbTry.innerHTML = "";

    console.log(winningNb);

    let numberVal = number.value;

    if (numberVal < winningNb) {
      answer.innerHTML = "C'est plus !";
    }

    if (numberVal > winningNb) {
      answer.innerHTML = "C'est moins !";
    }

    if (numberVal == winningNb) {
      answer.innerHTML = "C'est gagné !";
      nbTry.innerHTML = "En " + counter + " essais";
      winningNb = getRandomInt(0, 1000);
      counter = 0;
    }
  }
}

function reset() {
  number.value = "";
  answer.innerHTML = "";
  nbTry.innerHTML = "";
  counter = 0;
  counterShow.innerHTML = "";
  winningNb = getRandomInt(0, 1000);
}
