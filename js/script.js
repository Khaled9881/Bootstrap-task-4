// Add custom JavaScript here
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".custom-navbar");
  let width = window.innerWidth;

  if (window.scrollY > 50) {
    navbar.classList.add("bg-dark");
    navbar.classList.remove("bg-transparent");
  } else {
    if (width >= 992) {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-dark");
    }
  }
});
