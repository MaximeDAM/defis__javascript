const colors = ["C", "K", "T", "P"];
const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function createCardsGame(colors, cards) {
  /*  let i = 0;
   for (const color of colors) {
     for (const card of cards) {
       cardsGame[i] += color + card + " ";
     }
     i++
   } */

  let cardsGame = colors.flatMap(function (color) {
    return cards.map(function (card) {
      return color + card;
    });
  });

  return cardsGame
}

function deleteOnecard(cardsGame52) {
  let cardToDelete = Math.floor(Math.random() * (cardsGame52.length));

  cardsGame52.splice(cardToDelete, 1);

  return cardsGame52;
}

function giveMissingCard(cardsGame51, cardsGame52) {
  let missingCard = [];
   cardsGame52.map(function (card) {
    if (!cardsGame51.includes(card)) {
      missingCard.push(card);
    } 
  });

  return missingCard;
}

console.log(createCardsGame(colors, cards));
console.log(deleteOnecard(createCardsGame(colors, cards)));
console.log(giveMissingCard(deleteOnecard(createCardsGame(colors, cards)), createCardsGame(colors, cards)));
