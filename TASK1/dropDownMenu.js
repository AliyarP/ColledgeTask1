const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove("show");
  }
});
