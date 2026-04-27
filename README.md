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

## Local preview

```
py -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

GitHub Pages serves the default branch of `<user>.github.io` at the user's
root URL. Push to `main` and Pages picks it up automatically.
