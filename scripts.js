// === Slideshow Logic ===
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // change every 4 seconds
showSlide(currentSlide);

// === Scroll Fade-In Animation ===
const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeSections.forEach(section => {
  observer.observe(section);
});

// === Nav Link Highlight on Scroll ===
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  let scrollPos = window.scrollY + 150; // offset from top
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav);
highlightNav(); // on load
