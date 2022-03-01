const alice = ["Ⅱ", "Ⅳ", "Ⅱ", "ⅩⅠⅩ", "ⅩⅤ", "Ⅳ", "Ⅲ"];
const bob = ["Ⅳ", "Ⅲ", "Ⅱ", "ⅩⅩ", "Ⅱ", "ⅩⅩ"];
const silvester = ["ⅩVⅢ", "ⅩⅠⅩ", "Ⅲ", "Ⅰ", "Ⅲ", "ⅩVⅢ"];
let commonPathBob = "";
let commonPathSilvester = "";

function love_meet(pathBob, pathAlice) {
  for (const pathB of pathBob) {
    for (const pathA of pathAlice) {
      if ((pathB == pathA) & !commonPathBob.includes(pathB)) {
        commonPathBob += pathB + ", ";
      }
    }
  }
  console.log(commonPathBob.slice(0, - 2));
}

function affair_meet(pathAlice, pathSilvester) {
  for (const pathS of pathSilvester) {
    for (const pathA of pathAlice) {
      if (pathS == pathA & !commonPathSilvester.includes(pathS) & !commonPathBob.includes(pathS)) {
        commonPathSilvester += pathS + ", ";
      }
    }
  }
  console.log(commonPathSilvester.slice(0, - 2));
}

love_meet(bob, alice);
affair_meet(alice, silvester);
