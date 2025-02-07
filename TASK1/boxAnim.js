const box = document.getElementById("animationBlock");

box.addEventListener("click", () => {
  box.classList.add("active");

  setTimeout(() => {
    box.classList.remove("active");
  }, 500);
});
