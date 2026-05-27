# SahilJ10319.github.io

Personal portfolio site for Sahil Janjua — Software Engineer.

🌐 **Live:** [sahilj10319.github.io](https://sahilj10319.github.io)

## Stack

- Plain HTML, CSS, JavaScript — no framework, no build step
- Inter + JetBrains Mono via Google Fonts
- Font Awesome 6 for icons
- Light/dark theme via `prefers-color-scheme`
- Hosted on GitHub Pages

## Structure

```
.
├── index.html          # Hero + intro
├── work.html           # Project showcase
├── contact.html        # Contact form (FormSubmit)
├── legal.html          # Privacy policy
├── 404.html            # Not-found page
├── style.css           # All styles, ~600 LOC
├── manifest.json       # PWA manifest
└── assets/
    ├── img/favicon.svg
    ├── js/
    │   ├── nav.js      # Mobile menu toggle
    │   └── typer.js    # Hero typing animation
    └── Sahil_Janjua_Resume.pdf
```

## Local development

No build step required. Open `index.html` directly, or serve the
folder with any static server:

```bash
python3 -m http.server 8000
# or
npx serve
```

## License

Source code under [Apache License 2.0](LICENSE). Content (text,
resume, project descriptions) © Sahil Janjua, all rights reserved.
