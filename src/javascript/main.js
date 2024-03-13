document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000);
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
    section.style.animation = "scrollAnimation 0.5s";
    setTimeout(() => (section.style.animation = ""), 500);
  }
}

document
  .querySelector('a[href="#servicios"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    scrollToSection("servicios");
  });

document
  .querySelector('a[href="#testimonios"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    scrollToSection("testimonios");
  });
