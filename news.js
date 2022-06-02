let cont = document.querySelector(".container-udgivelser");
let left = document.querySelector(".pre-btn");
let right = document.querySelector(".nxt-btn");

left.addEventListener("click", slideL);
right.addEventListener("click", slideR);

function slideL() {
  console.log("left!");
  cont.scrollBy(-184.033, 0);
}

function slideR() {
  console.log("Right!");
  cont.scrollBy(184.033, 0);
}
