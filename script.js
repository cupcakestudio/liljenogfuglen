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
setTimeout(showInsta, 3000);

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

// // ======== ALLE KONSTANTER ========
const img1 = document.querySelector(".image1");
const img2 = document.querySelector(".image2");
const img3 = document.querySelector(".image3");
const img4 = document.querySelector(".image4");
const img5 = document.querySelector(".image5");
const img6 = document.querySelector(".image6");
const img7 = document.querySelector(".image7");
const img8 = document.querySelector(".image8");
const img9 = document.querySelector(".image9");
const img10 = document.querySelector(".image10");
const img11 = document.querySelector(".image11");
const img12 = document.querySelector(".image12");

// // MOUSE OVER OG OUT lyttere
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

img3.onmouseover = function () {
  img3MouseOver();
};
img3.onmouseout = function () {
  img3MouseOut();
};

img4.onmouseover = function () {
  img4MouseOver();
};
img4.onmouseout = function () {
  img4MouseOut();
};

img5.onmouseover = function () {
  img5MouseOver();
};
img5.onmouseout = function () {
  img5MouseOut();
};

img6.onmouseover = function () {
  img6MouseOver();
};
img6.onmouseout = function () {
  img6MouseOut();
};

img7.onmouseover = function () {
  img7MouseOver();
};
img7.onmouseout = function () {
  img7MouseOut();
};

img8.onmouseover = function () {
  img8MouseOver();
};
img8.onmouseout = function () {
  img8MouseOut();
};

img9.onmouseover = function () {
  img9MouseOver();
};
img9.onmouseout = function () {
  img9MouseOut();
};

img10.onmouseover = function () {
  img10MouseOver();
};
img10.onmouseout = function () {
  img10MouseOut();
};

img11.onmouseover = function () {
  img11MouseOver();
};
img11.onmouseout = function () {
  img11MouseOut();
};

img12.onmouseover = function () {
  img12MouseOver();
};
img12.onmouseout = function () {
  img12MouseOut();
};

// FUNKTIONERNE;

function img1MouseOver() {
  img1.setAttribute("src", "img/boeger2.webp");
}

function img1MouseOut() {
  img1.setAttribute("src", "img/boeger1.webp");
}

function img2MouseOver() {
  img2.setAttribute("src", "img/notesboeger2.webp");
}

function img2MouseOut() {
  img2.setAttribute("src", "img/notesboeger1.webp");
}

function img3MouseOver() {
  img3.setAttribute("src", "img/flag2.webp");
}

function img3MouseOut() {
  img3.setAttribute("src", "img/flag1.webp");
}

function img4MouseOver() {
  img4.setAttribute("src", "img/kurve2.webp");
}

function img4MouseOut() {
  img4.setAttribute("src", "img/kurve1.webp");
}

function img5MouseOver() {
  img5.setAttribute("src", "img/plakater2.webp");
}

function img5MouseOut() {
  img5.setAttribute("src", "img/plakater1.webp");
}

function img6MouseOver() {
  img6.setAttribute("src", "img/traelegetoej2.webp");
}

function img6MouseOut() {
  img6.setAttribute("src", "img/traelegetoej1.webp");
}

function img7MouseOver() {
  img7.setAttribute("src", "img/bamser2.webp");
}

function img7MouseOut() {
  img7.setAttribute("src", "img/bamser1.webp");
}

function img8MouseOver() {
  img8.setAttribute("src", "img/kort2.webp");
}

function img8MouseOut() {
  img8.setAttribute("src", "img/kort1.webp");
}

function img9MouseOver() {
  img9.setAttribute("src", "img/lampe2.webp");
}

function img9MouseOut() {
  img9.setAttribute("src", "img/lampe1.webp");
}

function img10MouseOver() {
  img10.setAttribute("src", "img/spil2.webp");
}

function img10MouseOut() {
  img10.setAttribute("src", "img/spil1.webp");
}

function img11MouseOver() {
  img11.setAttribute("src", "img/aesker2.webp");
}

function img11MouseOut() {
  img11.setAttribute("src", "img/aesker1.webp");
}

function img12MouseOver() {
  img12.setAttribute("src", "img/puslespil2.webp");
}

function img12MouseOut() {
  img12.setAttribute("src", "img/puslespil1.webp");
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
