const sorbets = [
  "Banane",
  "Chocolat",
  "Citron",
  "Pistache",
  "Framboise",
  "Fraise",
  "Vanille",
];
let pairSorbets = "";
let intru = [];

function showPair() {
   for (const parfumFirst of sorbets) {
    for (const parfumSecond of sorbets) {
       if (parfumFirst != parfumSecond & intru.includes(parfumSecond) == false) {
        pairSorbets += parfumFirst + "/" +parfumSecond + ", ";
      }
    }
    intru.push(parfumFirst);
  }

 /*  for (let i = 0; i < sorbets.length; i++) {
    for (let j = i + 1; j < sorbets.length; j++) {
      pairSorbets += sorbets[i] + "/" + sorbets[j] + ", ";
    }
  } */

  console.log(pairSorbets);
}

showPair();

