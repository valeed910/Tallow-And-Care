// Hero background image slider (fallback if video not used)
document.getElementById("menuToggle").addEventListener("click", function() {
  document.getElementById("navLinks").classList.toggle("show");
});


const hero = document.querySelector('.hero');
const heroImages = [
  "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1623689049231-b44186f206b8?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1617038492459-4b7b3c5c1397?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1606770347230-6cddc6e7c89e?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1606214171810-b1adf9c7d76c?auto=format&fit=crop&w=1500&q=80"
];
let currentIndex = 0;
function changeHeroBackground() {
  currentIndex = (currentIndex + 1) % heroImages.length;
  hero.style.background = `linear-gradient(rgba(15,60,71,0.7), rgba(9,139,139,0.6)), url('${heroImages[currentIndex]}') center/cover no-repeat`;
  hero.style.transition = 'background 1s cubic-bezier(.77,0,.18,1)';
}
setInterval(changeHeroBackground, 4500);

// Scroll-reveal animation
const revealElements = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Contact form submission (no real backend, just a confirmation message)
const form = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');
confirmationMessage.style.opacity = 0;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  confirmationMessage.style.opacity = 1;
  form.reset();
});

// Auto-slide testimonials
const container = document.querySelector('.testimonial-container');
let index = 0;

setInterval(() => {
  index = (index + 1) % container.children.length;
  container.style.transform = `translateX(-${index * 100}%)`;
}, 4000); // change every 4 seconds

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let reveal of reveals) {
    const top = reveal.getBoundingClientRect().top;
    const height = window.innerHeight / 1.2;
    if (top < height) reveal.classList.add('active');
  }
});


