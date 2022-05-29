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

// ======== ASSORTMENT =======

// ======== ALLE KONSTANTER ========
const img1 = document.querySelector(".image1");
const img2 = document.querySelector(".image2");

// MOUSE OVER OG OUT lyttere
img1.onmouseover = function () {
  img1MouseOver();
};
img1.onmouseout = function () {
  img1MouseOut();
};

img2.onmouseover = function () {
  img2MouseOver();
};
img2.onmouseout = function () {
  img2MouseOut();
};

// FUNKTIONERNE

function img1MouseOver() {
  img1.setAttribute("src", "img/boeger2.jpg");
}

function img1MouseOut() {
  img1.setAttribute("src", "img/boeger1.jpg");
}

function img2MouseOver() {
  img2.setAttribute("src", "img/notesboeger2.jpg");
}

function img2MouseOut() {
  img2.setAttribute("src", "img/notesboeger1.jpg");
}

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

/* ===================OM OS==================================*/
window.addEventListener("resize", mobile_version);

/* resize på bogforhandler_tekst i om-html.*/

function mobile_version() {
let widthscreen = document.querySelector("#book").clientWidth;
let myFontinProcent = 2.5;
let myFont = (widthscreen /  100) * myFontinProcent;

  console.log("jeg ændres");
 if (window.matchMedia("(max-width: 600px)").matches)
 { 
   document.querySelector("#louise_text").style.fontSize = myFont + "px" ;
   document.querySelector("#emilie_text").style.fontSize = myFont + "px" ;
   console.log("Nu er jeg i mobilversion")
}
else {
  console.log("jeg er stor nok");
}
}