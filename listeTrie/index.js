
const maClasse = [[85, 'Susan Maddox'], [6, 'Joshua Tran'], [37, 'Jeanette Wafer']];
const maCLasseBis = [[85, 'Susan Maddox'], [6, 'Joshua Tran'], [37, 'Jeanette Wafer'], [125, 'Abraham Lincoln']];

/* function sortAList(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  console.log(array);
} */

/* function sortByMark(maClasse) {
  maClasse.sort(function (a, b) {
    return b[0] - a[0];
  });
  console.log(maClasse);
} */

function sortByName(maClasseBis) {
  maClasseBis.sort(function (a, b) {
    return a[1].localeCompare(b[1]);
  });
  console.log(maClasseBis);
}

/* sortAList([1, 3, 2, 4, 24, 100, 5, 9, 12]); */
/* sortByMark(maClasse); */

sortByName(maCLasseBis);