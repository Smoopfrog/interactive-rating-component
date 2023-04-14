const btns = document.querySelectorAll("btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((f) => f.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});

const submitRating = (event) => {
  event.preventDefault();
};
