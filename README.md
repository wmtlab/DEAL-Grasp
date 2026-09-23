# DEAL-Grasp Project Page

Static project page for **DEAL-Grasp: Decoupled Alignment Representation for Geometry-Aware Dexterous Grasp Generation**.

This branch (`pp`, *project pages*) hosts the project website only. The code repository lives on `main`.

## Structure

```
DEAL-Grasp/                # this pp branch
├── index.html             # project page
├── styles.css             # page styles
├── script.js              # reveal-on-scroll / video / copy helper
└── assets/
    ├── teaser.png         # hero / results figure
    ├── poster.jpg         # video poster frame
    ├── video.mp4          # supplementary video (17 MB)
    └── icons/             # arXiv / GitHub icons (SVG)
```

## GitHub Pages

Published at <https://wmtlab.github.io/DEAL-Grasp/>. The site is served from this branch via repository Settings → Pages → Source → `pp` branch `/ (root)`.

## Local preview

```bash
python -m http.server 8765
```

Open `http://localhost:8765/` in a browser.