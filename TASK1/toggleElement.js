const toggleElement = document.querySelector('.toggle-element');
const toggleElementBtn = document.querySelector('.toggle-element-btn');
const toggleTextElement = document.querySelector('.toggle-element-text');

function ToggleText() {
  toggleTextElement.classList.toggle("show");

  toggleElementBtn.textContent = toggleTextElement.classList.contains("show") 
    ? "Скрыть текст" 
    : "Показать текст";
}

ToggleText();