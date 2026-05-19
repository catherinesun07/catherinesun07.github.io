// Render KaTeX math after page load. Pages that don't include KaTeX libs
// will silently no-op.
document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderMathInElement === "function") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$",  right: "$",  display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false,
      strict: "ignore",
    });
  }

  // Year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
