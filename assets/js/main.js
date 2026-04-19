/* ═══════════════════════════════════════
   BRYXEL TECHNOLOGY — main.js
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* ── HAMBURGER MENU ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {

    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    /* Cierra al tocar un link */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    /* Cierra al tocar fuera */
    document.addEventListener('click', function (e) {
      if (navbar && !navbar.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  /* ── SCROLL REVEAL (cards) ── */
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.service-card, .port-card, .price-card, .test-card'
  ).forEach(function (el) { observer.observe(el); });

  /* ── PARTÍCULAS CANVAS ── */
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    function createParticles() {
      const count = Math.floor((W * H) / 14000);
      particles = Array.from({ length: count }, function () {
        return {
          x:  Math.random() * W,
          y:  Math.random() * H,
          r:  Math.random() * 1.5 + 0.4,
          dx: (Math.random() - 0.5) * 0.35,
          dy: (Math.random() - 0.5) * 0.35,
          o:  Math.random() * 0.45 + 0.1,
        };
      });
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(160,180,255,' + p.o + ')';
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      });
      requestAnimationFrame(draw);
    }
    resize(); createParticles(); draw();
    window.addEventListener('resize', function () { resize(); createParticles(); });
  }

  /* ── ACTIVE NAV LINK POR SCROLL ── */
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(function (sec) {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });

});
