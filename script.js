const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
  window.pageYOffset >= navbarOffsetTop
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      links.forEach((link) => {
        link.classList.remove("change");
      });

      links[i].classList.add("change");
    }
  });
});
