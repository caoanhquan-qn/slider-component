"use strict";
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

// create dot button
const dots = document.querySelector(".dots");
slides.forEach((_, i) => {
  dots.insertAdjacentHTML(
    "beforeend",
    `<button class="dots__dot" data-slide="${i}"></button>`
  );
});
// set initial conditions
let currentSlide = 0;
function goToSlide(currentPosition) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentPosition) * 100}%)`;
  });
}
goToSlide(currentSlide);
dotActive(currentSlide);

// next slide

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  dotActive(currentSlide);
}

btnRight.addEventListener("click", nextSlide);

// previous slide

function previousSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  dotActive(currentSlide);
}

btnLeft.addEventListener("click", previousSlide);

function dotActive(num) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelectorAll(".dots__dot")
    [`${num}`].classList.add("dots__dot--active");
}
dots.addEventListener("click", function (event) {
  //matching strategy
  if (event.target.classList.contains("dots__dot")) {
    const btnNum = event.target.dataset.slide;
    goToSlide(btnNum);
    dotActive(btnNum);
  }
});

//keyboard event
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    nextSlide();
  } else if (event.key === "ArrowLeft") {
    previousSlide();
  }
});
