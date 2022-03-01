const images = [
  "./img/mer.png",
  "./img/montagne.png",
  "./img/cercle.png",
  "./img/arbre.png",
];
let num = 0;
let slider = document.getElementById("slider");
let sliderPrev = document.getElementById("slider_prev");
let sliderNext = document.getElementById("slider_next");
let img = document.createElement("img");

function toPrevSlide() {
  num--;

  if (num < 0) {
    num = images.length - 1;
  }

   sliderPrev.style.transform = "translateX(44rem)";
   slider.style.transform = "translateX(44rem)";
   sliderNext.style.transform = "translateX(44rem)";

  /*  sliderPrev.setAttribute("id", "slider");
   slider.setAttribute("id", "slider_next");
   sliderNext.setAttribute("id", "slider_prev"); */

  sliderPrev.src = images[num]; 
  
}

function toNextSlide() {
  num++;

  if (num >= images.length) {
    num = 0;
  }

  sliderPrev.style.transform = "translateX(-44rem)";
  slider.style.transform = "translateX(-44rem)";
  sliderNext.style.transform = "translateX(-44rem)";

  /* sliderPrev.setAttribute("id", "slider_next");
  slider.setAttribute("id", "slider_prev");
  sliderNext.setAttribute("id", "slider"); */

  
  sliderNext.src = images[num]; 
}

prev.addEventListener("click", toPrevSlide);
next.addEventListener("click", toNextSlide);
