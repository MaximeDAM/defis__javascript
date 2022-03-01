function transformToRot13(stringToTransform) {

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let stringTransformed = "";
  for (let j = 0; j < stringToTransform.length; j++) {
    if (stringToTransform[j] == " ") {
      stringTransformed += " ";
    }
    for (let i = 0; i < alphabet.length; i++) {
      if (stringToTransform[j] == alphabet[i]) {
        if (i + 13 >= alphabet.length) {
          stringTransformed += alphabet[i - 13];
        } else {
          stringTransformed += alphabet[i + 13];
        }
      }
    }
  }
  console.log(stringTransformed);
}

transformToRot13("URYYB JBEYQ"); // HELLO WORLD

transformToRot13("BCRAPYNFFEBBZ"); // OPENCLASSROOMS

transformToRot13("PRPV RFG ZBA PBQR FRPERG"); // CECI EST MON CODE SECRET


/*  */