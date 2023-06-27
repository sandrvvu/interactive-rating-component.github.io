let inputRating;

let optValues = document.querySelectorAll("input[type=radio]");
let optLabels = document.querySelectorAll(".opt");

for (let i = 0; i < optValues.length; i++) {
  optValues[i].addEventListener("click", function () {
    removeSelectedClasses();
    inputRating = optValues[i].value;
    optLabels[i].classList.add("selected");
  });
}

function removeSelectedClasses() {
  for (let i = 0; i < optLabels.length; i++) {
    optLabels[i].classList.remove("selected");
  }
}

let submitBtn = document.querySelector("#submit");
let startCard = document.querySelector(".start");
let endCard = document.querySelector(".end");
let ratingEl = document.querySelector("#rating-value");

submitBtn.addEventListener("click", function () {
  startCard.style.display = "none";
  endCard.style.display = "flex";
  ratingEl.innerHTML = inputRating;
});
