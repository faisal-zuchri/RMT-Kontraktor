// button WA
const btnWA = document.getElementById("btn-wa-bottom");

onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 1000) {
    btnWA.style.display = "block";
  } else {
    btnWA.style.display = "none";
  }
}
