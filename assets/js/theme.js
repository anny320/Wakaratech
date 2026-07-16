/* ===================================================
   Wakara Technologies — theme.js
   =================================================== */

(function () {
  'use strict';

  /* ---------- Mobile menu toggle ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Dropdown toggle ---------- */
  document.querySelectorAll('.nav-links li.has-dropdown > a').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      const li = trigger.closest('li.has-dropdown');
      const isOpen = li.classList.toggle('open');
      // Close others
      document.querySelectorAll('.nav-links li.has-dropdown').forEach(function (other) {
        if (other !== li) other.classList.remove('open');
      });
      // Navigate on second click (already open)
      if (!isOpen) window.location.href = trigger.href;
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-links li.has-dropdown')) {
      document.querySelectorAll('.nav-links li.has-dropdown').forEach(function (li) {
        li.classList.remove('open');
      });
    }
  });

  // Close dropdown on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-links li.has-dropdown').forEach(function (li) {
        li.classList.remove('open');
      });
    }
  });

  /* ---------- Navbar shadow on scroll ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    function handleNavbarScroll() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll(); // run on load
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- Intersection Observer — fade-in on scroll ---------- */
  const fadeSelectors = [
    '.card-hover',
    '.case-card',
    '.insight-card',
    '.proto-card',
    '.package-card',
    '.service-expanded',
    '.career-card',
    '.fade-in'
  ];

  const fadeTargets = document.querySelectorAll(fadeSelectors.join(', '));

  if (fadeTargets.length > 0 && 'IntersectionObserver' in window) {
    // Add fade-in class to all targets
    fadeTargets.forEach(function (el) {
      el.classList.add('fade-in');
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger siblings slightly
          const siblings = entry.target.parentElement
            ? Array.from(entry.target.parentElement.children)
            : [];
          const index = siblings.indexOf(entry.target);
          const delay = Math.min(index * 80, 400);

          setTimeout(function () {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: make everything visible immediately
    fadeTargets.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---------- Active nav link ---------- */
  // Already set via class in HTML, but this handles hash-based sub-navigation
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (link) {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Counter animation for stats ---------- */
  function animateCounter(el, target, duration) {
    var start = 0;
    var startTime = null;
    var numeric = parseFloat(target);
    var suffix = target.replace(/[0-9.]/g, '');

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = (numeric * eased).toFixed(numeric % 1 !== 0 ? 1 : 0);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const statValues = document.querySelectorAll('.stat-val[data-count]');
  if (statValues.length > 0 && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target.querySelector('span') || entry.target;
          const target = entry.target.getAttribute('data-count');
          if (target) animateCounter(el, target, 1500);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statValues.forEach(function (el) { statObserver.observe(el); });
  }

})();
