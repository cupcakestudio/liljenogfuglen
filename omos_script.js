/* ===================OM OS==================================*/
window.addEventListener("resize", mobile_version);

/* resize på bogforhandler_tekst i om-html.*/

function mobile_version() {
  let widthscreen = document.querySelector("#book").clientWidth;
  let myFontinProcent = 3;
  let myFont = (widthscreen / 100) * myFontinProcent;

  console.log("jeg ændres");
  if (window.matchMedia("(max-width: 600px)").matches) {
    document.querySelector("#louisa_text").style.fontSize = myFont + "px";
    document.querySelector("#emilie_text").style.fontSize = myFont + "px";
  } else {
    document.querySelector("#louisa_text").style.fontSize = 16 + "px";
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
