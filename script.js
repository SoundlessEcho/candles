// Active page highlight + smooth fade transitions + year
(function () {
  const navLinks = document.querySelectorAll('.nav a');
  const path = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) {
      a.classList.add('active');
    }
    // Smooth transition on navigation
    a.addEventListener('click', (e) => {
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        e.preventDefault();
        document.body.classList.add('out');
        setTimeout(() => { window.location.href = href; }, 250);
      }
    });
  });

  // Fade-in on load
  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('ready');
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();