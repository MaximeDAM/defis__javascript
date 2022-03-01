/* faite moi une fonction qui prend un nombre en argument, soit une séquence à partir de laquelle vous me retourner la suite fibonacci
c'est d'un niveau un peu plus dur */

let stockSum = 0;
let stockSeriesFi = "0";
let f1 = 0;
let f2 = 1;

function calculateFibonacci(nbRepeat) {
  for (let i = 0; i < nbRepeat; i++) {
    stockSum = f1 + f2;
    stockSeriesFi += " " + stockSum;
    f1 = f2;
    f2 = stockSum;
  }
  console.log(stockSeriesFi);
}

calculateFibonacci(15);
