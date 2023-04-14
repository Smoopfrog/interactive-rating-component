const ratingHandler = (event) => {
  event.preventDefault();

  const btns = document.getElementsByClassName("active");

  Array.from(btns).forEach((element) => {
    element.classList.remove("active");
  });

  event.target.classList.toggle("active");
};

const submitRating = (event) => {
  event.preventDefault();

  const ratingComponent = document.getElementsByClassName("rating")[0];
  ratingComponent.style.display = "none";

  const currentRating = document.getElementsByClassName("active")[0].innerHTML;

  const rating = document.getElementsByClassName("active-rating")[0];
  rating.innerHTML = currentRating;

  const thanksComponent = document.getElementsByClassName("thanks")[0];
  thanksComponent.style.display = "flex";
};
