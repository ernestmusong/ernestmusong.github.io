//SIDE-BAR PROJECT
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn ");
const sideBar = document.querySelector(".sidebar");
//method one
// toggleBtn.addEventListener("click", function () {
//   if (sideBar.classList.contains("show-sidebar")) {
//     sideBar.classList.remove("show-sidebar");
//   } else {
//     sideBar.classList.add("show-sidebar");
//   }
// });

//method two
toggleBtn.addEventListener("click", function () {
  sideBar.classList.toggle("sidebar");
});
//using the close button
closeBtn.addEventListener("click", function () {
  sideBar.classList.add("sidebar");
});

// CHANGE BODY COLOR
//hex array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const changeBtn = document.getElementById("change-color");

//function to generate random number

changeBtn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//reset color
const Btn = document.getElementById("reset-color");

Btn.addEventListener("click", function () {
  document.body.style = "#f0f0f0";
});
