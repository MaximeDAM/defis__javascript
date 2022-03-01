let button = document.getElementsByTagName("button");
let heading = document.getElementsByTagName("h2");
let para = document.getElementsByTagName("p");
let btn = document.getElementById("btn");

function traducing() {
  fetch("trad.json")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      heading[0].innerHTML = value.head;
      para[0].innerHTML = value.para;
      button[0].innerHTML = value.button;
    })
    .catch(function (err) {
      //Une erreur est survenue
    });
}

btn.addEventListener("click", traducing);
