
// ======== CONTACT =======

window.addEventListener("load", tjekSize);

// Tjek om kortet skal være "stort" eller "lille"
const mapStor = document.querySelector(".mapouter1");
const mapLille = document.querySelector(".mapouter2");

window.addEventListener("resize", tjekSize);

function tjekSize() {
  console.log(tjekSize);
  if (window.matchMedia("(min-width: 1161px)").matches) {
    console.log("Vinduet er stort nok");
    mapLille.classList.add("hidden");
    mapStor.classList.remove("hidden");
  } else {
    console.log("Vinduet er for småt");
    mapLille.classList.remove("hidden");
    mapStor.classList.add("hidden");
  }
}