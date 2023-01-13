let counter = document.querySelector(".counter");
let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function (e) {
  if (e.target.classList.contains("add")) {
    counter.innerHTML++;
    color();
  } else if (e.target.classList.contains("subtract")) {
    counter.innerHTML--;
    color();
  } else {
    counter.innerHTML = 0;
    color();
  }
});

function color() {
  if (counter.innerHTML > 0) {
    counter.style.color = "#FFF";
  } else if (counter.innerHTML == 0) {
    counter.style.color = "var(--dark-grey)";
  } else {
    counter.style.color = "#7a4e49";
  }
}
