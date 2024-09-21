import {} from "./navbar-bottom.js";

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
