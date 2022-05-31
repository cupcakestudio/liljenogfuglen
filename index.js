window.addEventListener("load", tjekSize);

// Tjek om kortet skal være "stort" eller "lille"
const splash = document.querySelector("#splash");

window.addEventListener("resize", tjekSize);

function tjekSize() {
  console.log(tjekSize);
  if (window.matchMedia("(min-width: 1000px)").matches) {
    console.log("Vinduet er stort nok");
    splash.setAttribute("src", "img/splash-desktop.webp");
  } else {
    console.log("Vinduet er for småt");
    splash.setAttribute("src", "img/splash.webp");
  }
}
