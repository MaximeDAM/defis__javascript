const number1 = document.getElementById("numberOne");
const number2 = document.getElementById("numberTwo");
const res = document.getElementById("result");


function calculPlus() {
 
  res.innerHTML = parseInt(number1.value) + parseInt(number2.value);
}


function calculMinus() {
res.innerHTML = parseInt(number1.value) - parseInt(number2.value);
}

function calculMulti() {

  res.innerHTML = parseInt(number1.value) * parseInt(number1.value);
}

function calculDiv() {

  res.innerHTML = parseInt(number1.value) / parseInt(number2.value);
}

