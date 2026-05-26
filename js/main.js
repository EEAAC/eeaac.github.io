// Elliniki Engineering Academy - main.js
// Handles: mobile nav toggle, accordions, smooth interactions, login simulation
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // ===== Mobile nav toggle =====
        const toggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('.main-nav');
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('open');
                toggle.classList.toggle('open');
            });
        }

        // ===== Accordion =====
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.addEventListener('click', () => {
                const item = h.closest('.accordion-item');
                item.classList.toggle('open');
            });
        });

        // ===== Stat counters =====
        const stats = document.querySelectorAll('.stat-num[data-target]');
        if (stats.length && 'IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        animateCount(e.target);
                        io.unobserve(e.target);
                    }
                });
            }, { threshold: 0.3 });
            stats.forEach(s => io.observe(s));
        }

        function animateCount(el) {
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || '';
            const duration = 1400;
            const start = performance.now();
            function step(now) {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.floor(target * eased).toLocaleString() + suffix;
                if (p < 1) requestAnimationFrame(step);
                else el.textContent = target.toLocaleString() + suffix;
            }
            requestAnimationFrame(step);
        }

        // ===== Login form: always show error =====
        document.querySelectorAll('form.login-form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const alertBox = form.querySelector('.alert-error');
                const submitBtn = form.querySelector('button[type="submit"]');
                if (alertBox) {
                    alertBox.classList.remove('show');
                }
                if (submitBtn) {
                    submitBtn.disabled = true;
                    const original = submitBtn.textContent;
                    submitBtn.textContent = '...';
                    // Simulate server roundtrip delay
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = original;
                        if (alertBox) alertBox.classList.add('show');
                        // Shake form briefly
                        form.classList.add('shake');
                        setTimeout(() => form.classList.remove('shake'), 500);
                    }, 800 + Math.random() * 400);
                }
            });
        });

        // ===== Contact / generic form =====
        document.querySelectorAll('form.contact-form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const msg = form.querySelector('.form-message');
                if (msg) {
                    msg.classList.add('show');
                    msg.textContent = (document.documentElement.lang === 'el')
                        ? 'Σας ευχαριστούμε! Το μήνυμά σας υποβλήθηκε. Θα επικοινωνήσουμε σύντομα.'
                        : 'Thank you! Your message has been received. We will get back to you shortly.';
                }
                form.reset();
            });
        });

        // ===== Reveal-on-scroll =====
        if ('IntersectionObserver' in window) {
            const revealObs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('revealed');
                        revealObs.unobserve(e.target);
                    }
                });
            }, { threshold: 0.12 });
            document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
        }

        // ===== Current year in footers =====
        document.querySelectorAll('.year').forEach(el => {
            el.textContent = new Date().getFullYear();
        });
    });
})();
