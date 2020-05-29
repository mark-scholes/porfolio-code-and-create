const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".navbar-link");
const progressBars = document.querySelector(".progress-bars-wrapper");
const progressBarsPercent = [97, 89, 85, 87, 80];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
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

  if (window.pageYOffset + window.innerHeight >= progressBars.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((percent, index) => {
      percent.style.width = `${progressBarsPercent[index]}%`;
      percent.previousElementSibling.firstElementChild.textContent =
        progressBarsPercent[index];
    });
  }
};

mainFn();

// window.addEventListener("resize", ()=> {
//     window.location.reloa d()
// })
