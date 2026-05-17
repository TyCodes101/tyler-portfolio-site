const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const footerYear = document.getElementById('footerYear');
const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const observedSections = document.querySelectorAll('main section[id]');
const revealEls = document.querySelectorAll('.reveal');
const header = document.querySelector('[data-elevate]');

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = siteNav.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);
    if (!clickedInsideMenu && !clickedToggle) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const elevateHeader = () => {
  if (header) {
    header.classList.toggle('is-elevated', window.scrollY > 12);
  }
};

elevateHeader();
window.addEventListener('scroll', elevateHeader, { passive: true });

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const currentId = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
        });
      });
    },
    { rootMargin: '-38% 0px -52% 0px', threshold: 0.1 }
  );

  observedSections.forEach((section) => navObserver.observe(section));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
