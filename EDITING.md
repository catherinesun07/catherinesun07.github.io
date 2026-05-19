# Editing this site

All text on the site is written directly into the HTML files in this repo.
You don't need to know HTML — every editable region has a comment marker
above it like:

```html
<!-- EDIT: hero-bio  (1–2 sentences under your name) -->
<p class="lede">
  Engineering Physics at UBC, graduating 2026. ...
</p>
```

To edit, find the marker for the thing you want to change, then change the
text between the tags below it. Don't touch the tags themselves.

## Two ways to edit

### A. On github.com (no install, easiest)

1. Open the repo: <https://github.com/catherinesun07/catherinesun07.github.io>
2. Click the file you want to change (e.g. `index.html`).
3. Click the **pencil icon** in the top-right of the file view.
4. Use the search box (`Ctrl+F`) to find the `EDIT:` marker for the section.
5. Change the text between the HTML tags.
6. Scroll down → "Commit changes" → green button.

The site rebuilds automatically — usually live within ~60 seconds.

### B. Locally

```bash
git pull                             # grab latest
# edit the HTML files in your editor of choice
py -m http.server 8000               # preview at http://localhost:8000
git add -A && git commit -m "edit"   # save
git push                             # publish
```

## Where each piece of text lives

### Homepage — `index.html`

| Marker | What it controls |
|---|---|
| `EDIT: page-title` | Browser tab title and search-result heading |
| `EDIT: page-description` | Search-engine snippet (1–2 sentences) |
| `EDIT: brand` | Wordmark in the top-left of every page |
| `EDIT: hero-name` | Big H1 at the top |
| `EDIT: hero-bio` | The 1–2 sentence intro under your name |
| `EDIT: hero-meta` | Three short tags under the bio (school, degree, location) |
| `EDIT: project1-meta` | Small uppercase line above the first project's title |
| `EDIT: project1-title` | First project's title |
| `EDIT: project1-summary` | First project's 1–3 sentence description |
| `EDIT: project1-tags` | The chip row — add/remove `<span class="tag">…</span>` lines |
| `EDIT: project2-…` | Same set for the second project |
| `EDIT: footer-left` | Bottom-left of every page (year auto-updates) |
| `EDIT: footer-right` | Bottom-right of every page |

### Project detail pages — `projects/tiigr.html` and `projects/sensor-placement.html`

| Marker | What it controls |
|---|---|
| `EDIT: page-title` | Browser tab title for that project |
| `EDIT: page-description` | Search-engine snippet for that project |
| `EDIT: brand` | Wordmark in the top-left |
| `EDIT: detail-pcode` | Small uppercase line above the project's title |
| `EDIT: detail-title` | The big project title (H1) |
| `EDIT: detail-subtitle` | One-paragraph hook under the title |
| `EDIT: detail-meta` | Three small tags (sponsor, programme, date) |
| `EDIT: section-summary` | "Summary" section body |
| `EDIT: section-key-ideas` | "Key technical ideas" — supports KaTeX math |
| `EDIT: section-methods` | "Methods used" — keep `<dt>` (term) / `<dd>` (description) pairs |
| `EDIT: section-next-steps` | (TIIGR only) "What I'd do next" |
| `EDIT: section-implications` | (sensor placement only) "Why I think this matters beyond estuaries" |

## Common edits, copy-paste-able

### Update your LinkedIn URL

LinkedIn currently isn't on the site. To add it back, drop this anywhere
under the hero in `index.html`:

```html
<p class="lede">
  Find me on
  <a href="https://www.linkedin.com/in/YOUR-HANDLE/" target="_blank" rel="noopener">LinkedIn</a>
  or by <a href="mailto:catherine.sunjys@gmail.com">email</a>.
</p>
```

### Add a new project

In `index.html`, copy one of the existing `<a class="project-row">…</a>`
blocks (between `<div class="project-stack">` and `</div>`), paste it
below the others, and edit:

- `href="projects/tiigr.html"` → the new detail page path
- The `EDIT: project*-…` regions inside

Then duplicate `projects/tiigr.html` to a new file (e.g.
`projects/my-project.html`) and edit the same markers there.

### Change a tag chip

Tags are individual `<span class="tag">…</span>` elements. Add a new one
by copy-pasting an existing line. Remove a tag by deleting its line.

### Add or remove a tagline in the hero meta

The `EDIT: hero-meta` region holds three `<span>…</span>` items separated
by visual dots. Add another `<span>…</span>` line for a fourth tag, or
delete a line to remove one.

### Inline a number, code identifier, or symbol

Wrap it in `<span class="mono">…</span>` so it renders in monospace —
matches the technical feel:

```html
… improved the merge metric by <span class="mono">35.8%</span> …
```

### Add math (project detail pages only)

KaTeX is loaded on the detail pages. Inline math goes in `$…$`, display
math (centered, on its own line) in `$$…$$`:

```html
<p>Inline: $\theta^* = \arg\min_\theta \, \mathbb{E}[\mathcal L(\theta; X)]$.</p>

<p>Display:</p>
<p>$$ E_{\text{steep}}(S) = \sqrt{\sum_j w_j (\hat f_S(x_j) - f(x_j))^2} $$</p>
```

## Things to avoid

- **Don't touch the `<svg>…</svg>` blocks on the homepage** unless you
  want to change the project preview figures themselves.
- **Don't change `class="…"` attributes** — they hook into the styling.
- **Don't delete the `EDIT:` marker comments** — that's how you'll find
  the text again next time.
- **Don't paste rich-text content** (e.g. from Word). It'll bring along
  invisible characters that look fine but break the layout. Type into a
  plain-text editor or directly into the GitHub web editor.

## When something looks broken

- View the page locally first (`py -m http.server 8000`) before pushing.
- If the layout collapses, you probably deleted or unbalanced an HTML tag.
  Check that every `<p>` has a matching `</p>`, every `<span>` a `</span>`.
- If the live site doesn't update, give it 60 seconds, then hard-refresh
  (`Ctrl+Shift+R`).
