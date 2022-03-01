let stockDivisor = "";

function giveDivs(number) {
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      stockDivisor += " " + i;
    }
  }
  console.log(stockDivisor);
}

giveDivs(10);
