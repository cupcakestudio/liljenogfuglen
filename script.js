//Load window

const btn = document.querySelector(".toggle-btn");
const btn_img = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn_img.src = "img/svg/close_menu.svg";
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn_img.src = "img/svg/menu.svg";
  }
}
// "toggleMenu()" slutter her

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);

// ======== CONTACT =======

const mapStor = document.querySelector(".mapouter1");
const mapLille = document.querySelector(".mapouter2");

window.addEventListener("resize", tjekSize);

function tjekSize() {
  console.log(tjekSize);
  if (window.matchMedia("(max-width: 1161px)").matches) {
    console.log("Vinduet er stort nok");
    mapLille.classList.remove("hidden");
    mapStor.classList.add("hidden");
  } else {
    console.log("Vinduet er for småt");
    mapLille.classList.add("hidden");
    mapStor.classList.remove("hidden");
  }
}
