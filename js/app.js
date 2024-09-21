import {} from "./navbar-bottom.js";
// import {} from "./button-wa.js";

// statistics

let stat = document.querySelectorAll(".stat");
let infoStat = document.querySelector(".info-stat");
const btnWA = document.getElementById("btn-wa-bottom");

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
        }, 1000 / end);
      });
    }
  }

  scrollFunction();
  function scrollFunction() {
    if (document.documentElement.scrollTop > 1000) {
      btnWA.style.display = "block";
    } else {
      btnWA.style.display = "none";
    }
  }
};
