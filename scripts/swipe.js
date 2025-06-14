let current = 0;
const sections = document.querySelectorAll(".section");

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    current = Math.min(current + 1, sections.length - 1);
  } else {
    current = Math.max(current - 1, 0);
  }
  sections[current].scrollIntoView({ behavior: "smooth" });
});
