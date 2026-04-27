# catherinesun07.github.io

Personal portfolio. Plain HTML / CSS / JS, no framework, no build step.
KaTeX is loaded from a CDN on project pages that need math.

## Layout

```
index.html                 # hero, projects grid, interests, contact
projects/
  tiigr.html               # Compton-camera reconstruction (TRIUMF capstone)
  sensor-placement.html    # DQS / sensor placement research
assets/
  css/styles.css
  js/main.js               # KaTeX auto-render + footer year
  pdfs/                    # downloadable project reports
.nojekyll                  # serve files as-is on GitHub Pages
```

## Editing the text

All copy lives directly in the HTML files. Each editable region is
flagged with an `<!-- EDIT: name -->` marker above it.

See [`EDITING.md`](./EDITING.md) for the full guide — a marker-by-marker
table, instructions for editing on github.com without cloning, and
copy-paste recipes for common changes (adding a project, changing tags,
adding LinkedIn back, embedding math, etc.).

## Local preview

```
py -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

GitHub Pages serves the default branch of `<user>.github.io` at the user's
root URL. Push to `main` and Pages picks it up automatically.
