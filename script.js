// const btns = document.getElementsByClassName("btn");
// console.log
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     btns.forEach((f) => f.classList.remove("active"));
//     e.target.classList.toggle("active");
//   });
// });

// const button = document.getElementById("button");
// console.log(button)
// const buttonPressed = (event) => {
//   console.log("hello");
//   // e.target.classList.toggle("active");
// };

// button.addEventListener("click", console.log('hiya'));

const submitRating = (event) => {
  event.preventDefault();

  const ratingComponent = document.getElementsByClassName("rating")[0];
  ratingComponent.style.display = "none";
  const thanksComponent = document.getElementsByClassName("thanks")[0];
  thanksComponent.style.display = "flex";
};
