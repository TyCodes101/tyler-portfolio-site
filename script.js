// Main UI hooks for the mobile nav and active section indicator.
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const footerYear = document.getElementById('footerYear');
const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const observedSections = document.querySelectorAll('main section[id]');

// Keep the copyright year current.
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Toggle the mobile menu and close it after a selection.
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

  // Close the open mobile menu if the visitor taps outside it.
  document.addEventListener('click', (event) => {
    const clickedInsideMenu = siteNav.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Highlight the section currently in view.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const currentId = entry.target.id;
        navLinks.forEach((link) => {
          const isMatch = link.getAttribute('href') === `#${currentId}`;
          link.classList.toggle('is-active', isMatch);
        });
      });
    },
    {
      rootMargin: '-35% 0px -50% 0px',
      threshold: 0.1
    }
  );

  observedSections.forEach((section) => observer.observe(section));
}
