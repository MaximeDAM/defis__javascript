/* générer une suite de nombre de 0 à 10 et afficher leur carré*/

let stockSeriesNb = "";

function calculateSquare() {
  for (let i = 0; i <= 10; i++) {
    stockSeriesNb += i * i + " ";
  }
  console.log(stockSeriesNb);
}

calculateSquare();