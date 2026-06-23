document.documentElement.classList.add('js');

(() => {
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const yearTargets = document.querySelectorAll('[data-current-year]');
  const revealItems = document.querySelectorAll('[data-reveal]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const closeMenu = () => {
    if (!menuToggle || !nav) return;
    document.body.classList.remove('menu-open');
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  };

  const toggleMenu = () => {
    if (!menuToggle || !nav) return;
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    document.body.classList.toggle('menu-open', !isOpen);
    nav.classList.toggle('is-open', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', !isOpen ? 'Fechar menu' : 'Abrir menu');
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', toggleMenu);
    nav.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (!document.body.classList.contains('menu-open')) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!nav.contains(target) && !menuToggle.contains(target)) closeMenu();
    });
  }

  yearTargets.forEach((target) => {
    target.textContent = String(new Date().getFullYear());
  });

  if (!revealItems.length) return;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach((item) => observer.observe(item));
})();
