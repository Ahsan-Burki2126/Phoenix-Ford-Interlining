const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileNav = document.getElementById("mobileNav");
const closeNavBtn = document.getElementById("closeNavBtn");

mobileMenuIcon.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(0)";
});

closeNavBtn.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(100%)";
});

// hero section

const slides = document.querySelectorAll(".slide");
const titles = [
  "State-of-Art Manufacturing Units",
  "Strict Quality Controls",
  "World Wide delieveries to doorstep",
  "Consultation on interlining applications",
];
const titleElement = document.querySelector(".hero-title");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let autoSlideInterval = setInterval(nextSlide, 4000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  titleElement.textContent = titles[index];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

prevBtn.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  prevSlide();
  autoSlideInterval = setInterval(nextSlide, 2000);
});

nextBtn.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  nextSlide();
  autoSlideInterval = setInterval(nextSlide, 2000);
});

showSlide(currentIndex);

// tabs and products section
const tabs = document.querySelectorAll(".tab");
const galleries = document.querySelectorAll(".gallery");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.dataset.tab;

    tabs.forEach((t) => t.classList.remove("active"));
    galleries.forEach((g) => g.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(`gallery-${tabId}`).classList.add("active");
  });
});
