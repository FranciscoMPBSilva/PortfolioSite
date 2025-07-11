<<<<<<< HEAD
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("active");
    }
  });
});

document.querySelector('.aboutmeButton').addEventListener('click', () => {
  document.querySelector('#aboutme').scrollIntoView({ behavior: 'smooth' });
});

function updateScrollPadding() {
  const navbar = document.querySelector(".navbar");
  const height = navbar.offsetHeight;
  document.documentElement.style.setProperty("--scroll-padding", height + "px");
}

window.addEventListener('load', updateScrollPadding);
window.addEventListener('resize', updateScrollPadding);




=======
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("active");
    }
  });
});

document.querySelector('.aboutmeButton').addEventListener('click', () => {
  document.querySelector('#aboutme').scrollIntoView({ behavior: 'smooth' });
});

function updateScrollPadding() {
  const navbar = document.querySelector(".navbar");
  const height = navbar.offsetHeight;
  document.documentElement.style.setProperty("--scroll-padding", height + "px");
}

window.addEventListener('load', updateScrollPadding);
window.addEventListener('resize', updateScrollPadding);




>>>>>>> 9690e94d1b177a5250ec59079ca8ce10f3fc987e
