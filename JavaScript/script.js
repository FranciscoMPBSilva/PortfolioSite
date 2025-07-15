const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const navbar = document.querySelector('.navbar');

showBtn.style.opacity = 1;

showBtn.addEventListener('click', () => {
  navbar.classList.add('active');
  showBtn.style.opacity = 0;
});

hideBtn.addEventListener('click', () => {
  navbar.classList.remove('active');
  showBtn.style.opacity = 1;
});

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

document.querySelector('.discoverWrapper').addEventListener('click', () => {
  document.querySelector('#project').scrollIntoView({ behavior: 'smooth' });
});

function updateScrollPadding() {
  if(window.innerWidth > 1000) {
    const navbar = document.querySelector(".navbar");
    const height = navbar.offsetHeight;
    document.documentElement.style.setProperty("--scroll-padding", height + "px");
  }
}

window.addEventListener('load', updateScrollPadding);
window.addEventListener('resize', updateScrollPadding);