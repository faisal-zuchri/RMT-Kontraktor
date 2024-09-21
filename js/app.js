import {} from "./navbar-bottom.js";

// statistics

let stat = document.querySelectorAll(".stat");
let infoStat = document.querySelector(".info-stat");

let test = false;

window.onscroll = () => {
  if ((window.screenY = infoStat.offsetTop)) {
    if (!test) {
      stat.forEach((e) => {
        let start = 0;
        let end = e.dataset.num;

        let count = setInterval(() => {
          start++;
          e.textContent = start;
          if (start == end) {
            clearInterval(count);
          }
        }, 2000 / end);
      });
    }
  }
};

// button WA

let btnWA = document.getElementById("btn-wa-bottom");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    btnWA.style.display = "block";
  } else {
    btnWA.style.display = "none";
  }
}
