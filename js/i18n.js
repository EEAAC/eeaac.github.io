// Elliniki Engineering Academy - i18n
// Bilingual switching between English (en) and Greek (el)
(function () {
    const SUPPORTED = ['en', 'el'];
    const DEFAULT_LANG = 'en';
    const STORAGE_KEY = 'eea_lang';

    // Inline translations (so site works opened directly via file://, since fetch() can't read local JSON)
    const I18N = {
        en: window.__EEA_EN__ || null,
        el: window.__EEA_EL__ || null
    };

    function getLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED.includes(saved)) return saved;
        const browser = (navigator.language || 'en').toLowerCase();
        if (browser.startsWith('el')) return 'el';
        return DEFAULT_LANG;
    }

    function applyTranslations(lang) {
        const dict = I18N[lang] || I18N[DEFAULT_LANG];
        if (!dict) return;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const spec = el.getAttribute('data-i18n-attr');
            spec.split(',').forEach(pair => {
                const [attr, key] = pair.split(':').map(s => s.trim());
                if (attr && key && dict[key] !== undefined) {
                    el.setAttribute(attr, dict[key]);
                }
            });
        });
        // Update toggle button highlight
        document.querySelectorAll('.lang-switch button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        // Update page title where defined
        const t = document.querySelector('meta[name="i18n-title"]');
        if (t) {
            const key = t.getAttribute('content');
            if (dict[key]) document.title = dict[key] + ' | ' + (dict['site.name'] || '');
        } else if (dict['site.name']) {
            // Append site name if there's no page title key
            const baseTitle = document.title.split(' | ')[0];
            document.title = baseTitle + ' | ' + dict['site.name'];
        }
    }

    function setLang(lang) {
        if (!SUPPORTED.includes(lang)) return;
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations(lang);
    }

    window.EEA_I18N = { setLang, getLang, applyTranslations };

    document.addEventListener('DOMContentLoaded', () => {
        const lang = getLang();
        applyTranslations(lang);
        document.querySelectorAll('.lang-switch button').forEach(btn => {
            btn.addEventListener('click', () => setLang(btn.dataset.lang));
        });
    });
})();
