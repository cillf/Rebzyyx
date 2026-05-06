window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".mtxt p");
  if (!container) return;

  const fullText = container.textContent;
  container.textContent = "";
  
  let index = 0;
  const speed = 40;

  function type() {
    if (index < fullText.length) {
      container.textContent += fullText.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();
});
