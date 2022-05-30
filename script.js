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

// // ======== ASSORTMENT =======

// // ======== ALLE KONSTANTER ========
// const img1 = document.querySelector(".image1");
// const img2 = document.querySelector(".image2");
// const img3 = document.querySelector(".image3");
// const img4 = document.querySelector(".image4");
// const img5 = document.querySelector(".image5");
// const img6 = document.querySelector(".image6");
// const img7 = document.querySelector(".image7");
// const img8 = document.querySelector(".image8");
// const img9 = document.querySelector(".image9");
// const img10 = document.querySelector(".image10");
// const img11 = document.querySelector(".image11");
// const img12 = document.querySelector(".image12");

// // MOUSE OVER OG OUT lyttere
// img1.onmouseover = function () {
//   img1MouseOver();
// };
// img1.onmouseout = function () {
//   img1MouseOut();
// };

// img2.onmouseover = function () {
//   img2MouseOver();
// };
// img2.onmouseout = function () {
//   img2MouseOut();
// };

// img3.onmouseover = function () {
//   img3MouseOver();
// };
// img3.onmouseout = function () {
//   img3MouseOut();
// };

// img4.onmouseover = function () {
//   img4MouseOver();
// };
// img4.onmouseout = function () {
//   img4MouseOut();
// };

// img5.onmouseover = function () {
//   img5MouseOver();
// };
// img5.onmouseout = function () {
//   img5MouseOut();
// };

// img6.onmouseover = function () {
//   img6MouseOver();
// };
// img6.onmouseout = function () {
//   img6MouseOut();
// };

// img7.onmouseover = function () {
//   img7MouseOver();
// };
// img7.onmouseout = function () {
//   img7MouseOut();
// };

// img8.onmouseover = function () {
//   img8MouseOver();
// };
// img8.onmouseout = function () {
//   img8MouseOut();
// };

// img9.onmouseover = function () {
//   img9MouseOver();
// };
// img9.onmouseout = function () {
//   img9MouseOut();
// };

// img10.onmouseover = function () {
//   img10MouseOver();
// };
// img10.onmouseout = function () {
//   img10MouseOut();
// };

// img11.onmouseover = function () {
//   img11MouseOver();
// };
// img11.onmouseout = function () {
//   img11MouseOut();
// };

// img12.onmouseover = function () {
//   img12MouseOver();
// };
// img12.onmouseout = function () {
//   img12MouseOut();
// };

// // FUNKTIONERNE

// function img1MouseOver() {
//   img1.setAttribute("src", "img/boeger2.jpg");
// }

// function img1MouseOut() {
//   img1.setAttribute("src", "img/boeger1.jpg");
// }

// function img2MouseOver() {
//   img2.setAttribute("src", "img/notesboeger2.jpg");
// }

// function img2MouseOut() {
//   img2.setAttribute("src", "img/notesboeger1.jpg");
// }

// function img3MouseOver() {
//   img3.setAttribute("src", "img/flag2.jpg");
// }

// function img3MouseOut() {
//   img3.setAttribute("src", "img/flag1.jpg");
// }

// function img4MouseOver() {
//   img4.setAttribute("src", "img/kurve2.jpg");
// }

// function img4MouseOut() {
//   img4.setAttribute("src", "img/kurve1.jpg");
// }

// function img5MouseOver() {
//   img5.setAttribute("src", "img/plakater2.jpg");
// }

// function img5MouseOut() {
//   img5.setAttribute("src", "img/plakater1.jpg");
// }

// function img6MouseOver() {
//   img6.setAttribute("src", "img/traelegetoej2.jpg");
// }

// function img6MouseOut() {
//   img6.setAttribute("src", "img/traelegetoej1.jpg");
// }

// function img7MouseOver() {
//   img7.setAttribute("src", "img/bamser2.jpg");
// }

// function img7MouseOut() {
//   img7.setAttribute("src", "img/bamser1.jpg");
// }

// function img8MouseOver() {
//   img8.setAttribute("src", "img/kort2.jpg");
// }

// function img8MouseOut() {
//   img8.setAttribute("src", "img/kort1.jpg");
// }

// function img9MouseOver() {
//   img9.setAttribute("src", "img/lampe2.jpg");
// }

// function img9MouseOut() {
//   img9.setAttribute("src", "img/lampe1.jpg");
// }

// function img10MouseOver() {
//   img10.setAttribute("src", "img/spil2.jpg");
// }

// function img10MouseOut() {
//   img10.setAttribute("src", "img/spil1.jpg");
// }

// function img11MouseOver() {
//   img11.setAttribute("src", "img/aesker2.jpg");
// }

// function img11MouseOut() {
//   img11.setAttribute("src", "img/aesker1.jpg");
// }

// function img12MouseOver() {
//   img12.setAttribute("src", "img/puslespil2.jpg");
// }

// function img12MouseOut() {
//   img12.setAttribute("src", "img/puslespil1.jpg");
// }

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
let myFontinProcent = 3;
let myFont = (widthscreen /  100) * myFontinProcent;

  console.log("jeg ændres");
 if (window.matchMedia("(max-width: 600px)").matches)
 { 
   document.querySelector("#louise_text").style.fontSize = myFont + "px" ;
   document.querySelector("#emilie_text").style.fontSize = myFont + "px" ;
   
 }  else {
   document.querySelector("#louise_text").style.fontSize = 16 + "px" ;
   document.querySelector("#emilie_text").style.fontSize = 16 + "px" ;
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