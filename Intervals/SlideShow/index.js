const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function nextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}

setInterval(nextSlide, 2000);
