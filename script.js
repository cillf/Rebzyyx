window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".mtxt p");
  if (!container) return;

  const fullText = container.textContent;
  container.textContent = "";
  
  let index = 0;
  let currentSpeed = 20;
  let fastMode = false;

  setTimeout(() => {
    fastMode = true;
  }, 500);

  function type() {
    if (index < fullText.length) {
      container.textContent += fullText.charAt(index);

      let delay = fastMode ? 3 : currentSpeed;

      index++;
      setTimeout(type, delay);
    }
  }

  type();
});
