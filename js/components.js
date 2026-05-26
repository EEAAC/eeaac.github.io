// Elliniki Engineering Academy - components.js
// Injects shared site header and footer. Runs synchronously (no DOMContentLoaded wait)
// so it must be loaded after the <body> opens but before i18n.js.

(function () {
    'use strict';

    const HEADER_HTML = `
<div class="topbar">
    <div class="container">
        <div class="topbar-info">
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg> <span data-i18n="top.phone">+30 210 36543069</span></span>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> <span data-i18n="top.address">Κρήτης 45, Peania 190 02, Greece</span></span>
        </div>
        <div class="topbar-links">
            <a href="/library/" data-i18n="top.library">Library</a>
            <a href="/careers/" data-i18n="top.career">Careers</a>
            <a href="/alumni/" data-i18n="top.alumni">Alumni</a>
            <span class="lang-switch">
                <button data-lang="en" type="button">EN</button>
                <button data-lang="el" type="button">EL</button>
            </span>
        </div>
    </div>
</div>
<header class="site-header">
    <div class="container">
        <a href="/" class="logo">
            <div class="logo-img">EEA</div>
            <div class="logo-text">
                <h1 data-i18n="site.name">Elliniki Engineering Academy</h1>
                <p data-i18n="site.tagline">Engineering Excellence in the Heart of Greece</p>
            </div>
        </a>
        <button class="menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
        <nav class="main-nav">
            <ul>
                <li><a href="/" data-i18n="nav.home">Home</a></li>
                <li>
                    <a href="/about/" data-i18n="nav.about">About</a>
                    <div class="dropdown">
                        <a href="/about/#intro" data-i18n="nav.about.intro">Introduction</a>
                        <a href="/about/#history" data-i18n="nav.about.history">Our History</a>
                        <a href="/about/#mission" data-i18n="nav.about.mission">Mission &amp; Values</a>
                        <a href="/about/#leadership" data-i18n="nav.about.leadership">Leadership</a>
                        <a href="/about/#campus" data-i18n="nav.about.campus">Campus &amp; Facilities</a>
                    </div>
                </li>
                <li>
                    <a href="/academics/" data-i18n="nav.academics">Academics</a>
                    <div class="dropdown">
                        <a href="/academics/#programs" data-i18n="nav.academics.programs">Programmes</a>
                        <a href="/academics/#departments" data-i18n="nav.academics.faculty">Departments</a>
                        <a href="/academics/#calendar" data-i18n="nav.academics.calendar">Academic Calendar</a>
                        <a href="/library/" data-i18n="nav.academics.library">Library</a>
                    </div>
                </li>
                <li>
                    <a href="/admissions/" data-i18n="nav.admissions">Admissions</a>
                    <div class="dropdown">
                        <a href="/admissions/#apply" data-i18n="nav.admissions.apply">How to Apply</a>
                        <a href="/admissions/#requirements" data-i18n="nav.admissions.requirements">Requirements</a>
                        <a href="/admissions/#tuition" data-i18n="nav.admissions.tuition">Tuition &amp; Fees</a>
                        <a href="/admissions/#international" data-i18n="nav.admissions.international">International Students</a>
                    </div>
                </li>
                <li><a href="/research/" data-i18n="nav.research">Research</a></li>
                <li><a href="/campus-life/" data-i18n="nav.life">Campus Life</a></li>
                <li>
                    <a href="/news/" data-i18n="nav.news">News</a>
                    <div class="dropdown">
                        <a href="/news/" data-i18n="nav.news.list">Latest News</a>
                        <a href="/events/" data-i18n="nav.news.events">Upcoming Events</a>
                    </div>
                </li>
                <li><a href="/contact/" data-i18n="nav.contact">Contact</a></li>
                <li><a href="/login/" class="nav-cta" data-i18n="nav.portal">Portal Login</a></li>
            </ul>
        </nav>
    </div>
</header>`;

    const FOOTER_HTML = `
<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-about">
                <div class="logo" style="margin-bottom:16px">
                    <div class="logo-img">EEA</div>
                    <div class="logo-text">
                        <h1 style="color:#fff" data-i18n="site.name">Elliniki Engineering Academy</h1>
                        <p style="color:var(--gold)" data-i18n="site.tagline">Engineering Excellence in the Heart of Greece</p>
                    </div>
                </div>
                <p data-i18n="footer.about">Elliniki Engineering Academy is a private engineering institute established in 2025 in Peania, Attica.</p>
                <div class="social-icons">
                    <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></a>
                    <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.34 17H5.67v-7.67h2.67V17zM7 8.17c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18.5 17h-2.67v-3.83c0-.92-.02-2.11-1.28-2.11-1.28 0-1.48 1-1.48 2.04V17h-2.67V9.33h2.56v1.05h.04c.36-.68 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.09V17z"/></svg></a>
                    <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.06 1.65.06 4.85s-.01 3.6-.07 4.85c-.15 3.23-1.68 4.77-4.92 4.92-1.25.06-1.65.06-4.85.06s-3.6-.01-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92C2.16 15.6 2.16 15.2 2.16 12s.01-3.6.07-4.85C2.38 3.92 3.92 2.38 7.15 2.23 8.4 2.18 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.51.01-4.74.07-2.55.12-3.74 1.32-3.86 3.86C3.34 8.49 3.33 8.86 3.33 12s.01 3.51.07 4.74c.12 2.55 1.32 3.74 3.86 3.86 1.23.06 1.6.07 4.74.07 3.14 0 3.51-.01 4.74-.07 2.55-.12 3.74-1.32 3.86-3.86.06-1.23.07-1.6.07-4.74s-.01-3.51-.07-4.74c-.12-2.55-1.32-3.74-3.86-3.86C15.51 4.01 15.14 4 12 4zm0 3c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.2c-1.77 0-3.2-1.43-3.2-3.2 0-1.77 1.43-3.2 3.2-3.2 1.77 0 3.2 1.43 3.2 3.2 0 1.77-1.43 3.2-3.2 3.2zm5.1-8.5c-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2 1.2-.54 1.2-1.2c0-.66-.54-1.2-1.2-1.2z"/></svg></a>
                    <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.19c-.23-.85-.91-1.52-1.76-1.75C18.25 5 12 5 12 5s-6.25 0-7.82.44c-.85.23-1.53.9-1.76 1.75C2 8.76 2 12 2 12s0 3.24.42 4.81c.23.85.91 1.52 1.76 1.75C5.75 19 12 19 12 19s6.25 0 7.82-.44c.85-.23 1.53-.9 1.76-1.75.42-1.57.42-4.81.42-4.81s0-3.24-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg></a>
                </div>
            </div>
            <div>
                <h4 data-i18n="footer.quick">Quick Links</h4>
                <ul>
                    <li><a href="/about/" data-i18n="nav.about">About</a></li>
                    <li><a href="/academics/" data-i18n="nav.academics">Academics</a></li>
                    <li><a href="/admissions/" data-i18n="nav.admissions">Admissions</a></li>
                    <li><a href="/research/" data-i18n="nav.research">Research</a></li>
                    <li><a href="/campus-life/" data-i18n="nav.life">Campus Life</a></li>
                    <li><a href="/news/" data-i18n="nav.news">News</a></li>
                </ul>
            </div>
            <div>
                <h4 data-i18n="footer.programs">Programmes</h4>
                <ul>
                    <li><a href="/academics/#cs" data-i18n="prog.cs.title">Computer Engineering</a></li>
                    <li><a href="/academics/#civil" data-i18n="prog.civil.title">Civil Engineering</a></li>
                    <li><a href="/academics/#mech" data-i18n="prog.mech.title">Mechanical Engineering</a></li>
                    <li><a href="/academics/#elec" data-i18n="prog.elec.title">Electrical Engineering</a></li>
                    <li><a href="/academics/#env" data-i18n="prog.env.title">Environmental Engineering</a></li>
                    <li><a href="/academics/#arch" data-i18n="prog.arch.title">Architecture</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h4 data-i18n="footer.contact">Get in Touch</h4>
                <p><strong data-i18n="top.address">Κρήτης 45, Peania 190 02, Greece</strong></p>
                <p>+30 210 36543069</p>
                <p>info@eea.edu.gr</p>
                <p>admissions@eea.edu.gr</p>
                <p style="margin-top:14px;font-size:.85rem;opacity:.75">Mon – Fri: 09:00 – 18:00 (EET)</p>
            </div>
        </div>
        <div class="footer-bottom">
            <div data-i18n="footer.copyright">© 2026 Elliniki Engineering Academy. All rights reserved.</div>
            <div class="links">
                <a href="/privacy/" data-i18n="footer.privacy">Privacy Policy</a> ·
                <a href="/terms/" data-i18n="footer.terms">Terms of Use</a> ·
                <a href="/accessibility/" data-i18n="footer.accessibility">Accessibility</a> ·
                <a href="/sitemap/" data-i18n="footer.sitemap">Sitemap</a>
            </div>
        </div>
    </div>
</footer>`;

    // Inject placeholders
    function inject() {
        const headerSlot = document.getElementById('site-header');
        const footerSlot = document.getElementById('site-footer');
        if (headerSlot) headerSlot.innerHTML = HEADER_HTML;
        if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;
    }

    // Run as soon as DOM is interactive
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }
})();
