/* ============================================================
   D-BET Landing — script.js
   - 진입 fade-up
   - IntersectionObserver로 섹션 reveal
   - 문의 바텀 시트 토글
============================================================ */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ---------- 1) Hero 진입 연출 (즉시 표시) ---------- */
  function revealHero() {
    const heroTargets = document.querySelectorAll('.hero .reveal');
    heroTargets.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- 2) 섹션 reveal (IntersectionObserver) ---------- */
  function setupSectionReveal() {
    const targets = document.querySelectorAll(
      '.value .reveal, .final .reveal'
    );
    if (!targets.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const parent = el.parentElement;
            const siblings = parent
              ? Array.from(
                  parent.querySelectorAll(':scope > .reveal')
                )
              : [];
            const idx = siblings.indexOf(el);
            const delay = idx >= 0 ? Math.min(idx * 80, 320) : 0;
            el.style.setProperty('--reveal-delay', delay + 'ms');
            el.classList.add('is-visible');
            io.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
      }
    );

    targets.forEach((el) => io.observe(el));
  }

  /* ---------- 3) 문의 바텀 시트 ---------- */
  function setupContactSheet() {
    const openBtn = document.getElementById('openContact');
    const sheet = document.getElementById('contactSheet');
    if (!openBtn || !sheet) return;

    const panel = sheet.querySelector('.sheet__panel');
    const closeTargets = sheet.querySelectorAll('[data-close-sheet]');
    let lastFocused = null;

    function open() {
      lastFocused = document.activeElement;
      sheet.setAttribute('aria-hidden', 'false');
      openBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';

      const firstLink = panel.querySelector('a, button');
      if (firstLink) {
        setTimeout(() => firstLink.focus({ preventScroll: true }), 200);
      }
    }

    function close() {
      sheet.setAttribute('aria-hidden', 'true');
      openBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus({ preventScroll: true });
      }
    }

    openBtn.addEventListener('click', open);
    closeTargets.forEach((el) => el.addEventListener('click', close));

    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'Escape' &&
        sheet.getAttribute('aria-hidden') === 'false'
      ) {
        close();
      }
    });

    // 링크 탭 시 시트 자연스러운 종료
    panel.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        setTimeout(close, 200);
      });
    });
  }

  /* ---------- 4) 실행 ---------- */
  function init() {
    revealHero();
    setupSectionReveal();
    setupContactSheet();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
