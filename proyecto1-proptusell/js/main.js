const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const form = document.getElementById('contactForm');
const revealElements = document.querySelectorAll('.card, .testimonio, .stat-card, .diff-item');

function updateNavbar() {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  rafPending = false;
}

let rafPending = false;

function setMobileMenuState(isOpen) {
  if (!navLinks || !hamburger) return;
  navLinks.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  document.body.classList.toggle('no-scroll', isOpen);
}

function closeMobileMenu() {
  setMobileMenuState(false);
}

function handleFormSubmit(event) {
  if (!form) return;
  event.preventDefault();
  const submitButton = form.querySelector('button[type="submit"]');
  if (!submitButton) return;

  submitButton.textContent = '✓ ¡Solicitud enviada! Te contactamos pronto.';
  submitButton.classList.add('btn-primary--submitted');
  submitButton.disabled = true;

  setTimeout(() => {
    submitButton.textContent = 'Agendar llamada gratuita';
    submitButton.classList.remove('btn-primary--submitted');
    submitButton.disabled = false;
    form.reset();
  }, 4000);
}

function handleDocumentClick(event) {
  if (!navLinks || !hamburger) return;
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    closeMobileMenu();
  }
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
}

function revealOnScroll(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}

window.addEventListener('scroll', () => {
  if (!rafPending) {
    rafPending = true;
    requestAnimationFrame(updateNavbar);
  }
}, { passive: true });
updateNavbar();

if (hamburger) {
  hamburger.addEventListener('click', () => {
    setMobileMenuState(!navLinks.classList.contains('open'));
  });
}

if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

document.addEventListener('click', handleDocumentClick);
document.addEventListener('keydown', handleKeyDown);

if (form) {
  form.addEventListener('submit', handleFormSubmit);
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(revealOnScroll, { threshold: 0.1 });
  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add('is-visible'));
}

