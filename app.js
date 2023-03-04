const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("increase")) {
      console.log("increase");
      value.textContent = parseInt(value.textContent) + 1;
    } else if (e.target.classList.contains("decrease")) {
      value.textContent = parseInt(value.textContent) - 1;
    } else {
      value.textContent = 0;
    }
    value.style.color = "green" ? parseInt(value.textContent > 0) : "red";
  });
});
