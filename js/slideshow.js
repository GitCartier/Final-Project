let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slideshow img");
  slides[currentSlide].style.display = "none"; // Hide current slide
  currentSlide = (currentSlide + 1) % slides.length; // Move to next
  slides[currentSlide].style.display = "block"; // Show next slide
}

setInterval(showSlides, 3000);
