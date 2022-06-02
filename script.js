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

// // ======== INSTA FLOAT =======

//Konstant til boxen med insta-informationer
const insta = document.querySelector(".insta-box");
const instaLuk = document.querySelector(".insta-close-btn");

//functionen til at få boxen frem
function showInsta() {
  console.log("showInsta");

  insta.classList.toggle("hidden");
  insta.classList.add("appear");

  instaLuk.addEventListener("click", hideInsta);
}

//Sætter en timeout på 4 sekunder, så burde boxen komme frem.
setTimeout(showInsta, 10000);

function hideInsta() {
  console.log("hideInsta");

  instaLuk.removeEventListener("click", hideInsta);

  insta.classList.remove("appear");
  insta.classList.add("dissapear");

  insta.addEventListener("animationend", hiddenInsta);
}

function hiddenInsta() {
  console.log("hiddenInsta");

  insta.classList.remove("dissapear");
  insta.classList.toggle("hidden");
}
