// trouver le nombre le plus grand à partir d'une liste de nombre donnée

// stocker la liste de nombres
const numberList = [651041, 926030, 510359, 172306, 776864, 324938, 992008, 981900,];

// stocker le nombre le plus grand
let maxNumber = "";

// repeter la comparaison des nombres entre eux
for (let i in numberList) {

  // si nombre de la liste est supérieur au nombre le plus grand stocké alors il devient le nombre le plus grand
  if (numberList[i] > maxNumber) {
    maxNumber = numberList[i];
  }

}

//affiche le nombre le plus grand
console.log(maxNumber);

for (let i= 0; i < numberList.length; i++) {
  
  
}
