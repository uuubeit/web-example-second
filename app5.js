const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    clearActive();
    panel.classList.add("active");
  });
});

function clearActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

document.addEventListener("wheel", wheelScroll);
document.addEventListener("mousewheel", wheelScroll);

function wheelScroll(event) {
  for (let i = 0; i < panels.length; i++) {
    if (panels[i].classList[1] == "active") {
      if (event.deltaY == "100") {
        setTimeout(() => {
          clearActive();
          i = i < panels.length - 1 ? (i += 1) : (i = 0);
          panels[i].classList.add("active");
          return;
        }, 400);
      }
      if (event.deltaY == "-100") {
        setTimeout(() => {
          clearActive();
          i = i > 0 ? (i -= 1) : (i = panels.length - 1);
          panels[i].classList.add("active");
          return;
        }, 400);
      }
    }
  }
}
