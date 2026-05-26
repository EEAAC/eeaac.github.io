# Elliniki Engineering Academy — Official Website

A complete, fully static website for the Elliniki Engineering Academy (EEA), a private engineering institute located at Κρήτης 45, Peania 190 02, Greece.

## Stack

- Pure HTML / CSS / JavaScript
- No build step, no dependencies
- All translation data and shared components are inlined as plain `.js` files so the site works when opened directly from disk (`file://`) **and** when hosted

## Deployment on GitHub Pages

1. Create a new GitHub repository (public or private).
2. Push the contents of this `elliniki-engineering-academy/` directory to the repository root.
3. In **Settings → Pages**, set the source to "Deploy from branch", branch = `main`, folder = `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within ~60 seconds.

No build commands. No environment variables. No Jekyll configuration needed.

## Local Preview

Simply open `index.html` in any modern browser. Optionally serve with a static server:

```
npx serve .
# or
python -m http.server 8080
```

## Structure

```
elliniki-engineering-academy/
├── index.html              Home page
├── about.html              About / mission / leadership / campus
├── academics.html          Programmes, departments, calendar
├── admissions.html         How to apply / requirements / fees / scholarships
├── research.html           Research centres, projects, partners
├── campus-life.html        Student life, clubs, housing, dining
├── news.html               News listing
├── events.html             Events calendar
├── contact.html            Contact info, map, form
├── login.html              Portal selector (student / faculty)
├── student-portal.html     Student login (auth always fails)
├── faculty-portal.html     Faculty login (auth always fails)
├── library.html            Onassis Library
├── careers.html            Job openings
├── alumni.html             Alumni network
├── privacy.html            Privacy policy
├── terms.html              Terms of use
├── accessibility.html      Accessibility statement
├── sitemap.html            Site map
├── news/                   Individual news article pages
│   ├── 2026-05-22-tee-mou.html
│   ├── 2026-05-15-mechatronics.html
│   ├── 2026-05-03-scholarships.html
│   ├── 2026-04-28-karagianni.html
│   └── 2026-04-21-daedalus.html
├── css/style.css           Single stylesheet
├── js/
│   ├── lang-en.js          English translation strings
│   ├── lang-el.js          Greek translation strings
│   ├── components.js       Injects shared header / footer
│   ├── i18n.js             Applies translations & language switching
│   └── main.js             Mobile nav, accordions, forms, animations
├── img/favicon.svg
└── lang/                   JSON copies of translation files (reference)
```

## Bilingual Support (EN / EL)

Language is switched via the **EN / EL** buttons in the top bar. The choice is stored in `localStorage` and persists across sessions. The default language is detected from the browser's `navigator.language` (`el-*` → Greek, anything else → English).

To add or edit translations: open `js/lang-en.js` and `js/lang-el.js`, edit the matching keys, save. No build step.

## Portal Login Behaviour

`student-portal.html` and `faculty-portal.html` present standard university login forms. On submit, the form does **not** validate against any credentials store — it always displays the "Invalid username or password" error after a short simulated delay. There is no real authentication backend.
