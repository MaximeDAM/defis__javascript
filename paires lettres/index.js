const alphabet = "abcdefghijklmnopqrstuvwxyz";
let pairLetter = "";

function showPair() {
  for (const letterMain of alphabet) {
    for (const letter of alphabet) {
      if (letterMain != letter) {
      pairLetter += letterMain;
      pairLetter += letter + " ";
      }
    }
  }
  console.log(pairLetter);
}

showPair();
