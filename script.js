const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileNav = document.getElementById("mobileNav");
const closeNavBtn = document.getElementById("closeNavBtn");

mobileMenuIcon.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(0)";
});

closeNavBtn.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(100%)";
});
