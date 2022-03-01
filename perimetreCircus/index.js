function calcul() {
  let peri = document.getElementById("calcPeri").value;

  let result = document.getElementById("resultPeri");

  result.innerHTML = peri * 2 * Math.PI;
}
