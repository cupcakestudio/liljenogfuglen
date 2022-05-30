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

/* ===================OM OS==================================*/
window.addEventListener("resize", mobile_version);

/* resize på bogforhandler_tekst i om-html.*/

function mobile_version() {
  let widthscreen = document.querySelector("#book").clientWidth;
  let myFontinProcent = 3;
  let myFont = (widthscreen / 100) * myFontinProcent;

  console.log("jeg ændres");
  if (window.matchMedia("(max-width: 600px)").matches) {
    document.querySelector("#louise_text").style.fontSize = myFont + "px";
    document.querySelector("#emilie_text").style.fontSize = myFont + "px";
  } else {
    document.querySelector("#louise_text").style.fontSize = 16 + "px";
    document.querySelector("#emilie_text").style.fontSize = 16 + "px";
  }
}

/* video  player - fra  david repo*/

const button = document.querySelector(".video-player button");
const vid = document.querySelector(".video-player video");

function pressPlay() {
  if (vid.paused || vid.ended) {
    vid.play();
    vid.parentElement.classList.add("playing");
    vid.controls = true;
    button.classList.add("hide"); //selv tilføjet hide class
  }
}

function vidEnded() {
  if (vid.parentElement.classList.contains("playing")) {
    vid.parentElement.classList.remove("playing");
    button.classList.remove("hide");
  }
  vid.currentTime = 0;
  vid.controls = false;
}

button.addEventListener("click", pressPlay);
vid.addEventListener("ended", vidEnded);
