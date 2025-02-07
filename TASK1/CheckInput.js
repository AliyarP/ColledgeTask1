function checkInput() {
  const input = document.getElementById("textInput");
  const message = document.getElementById("message");

  if (input.value.trim() === "") {
    message.textContent = "Введите текст!";
    input.style.backgroundColor = "#ffdddd";
  } else {
    message.textContent = "";
    input.style.backgroundColor = "#d4edda";
  }
}
