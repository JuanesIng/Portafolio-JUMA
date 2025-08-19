// Animar barras de progreso
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach(bar => {
    const value = bar.getAttribute("data-skill");
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 300); // pequeño delay
  });
});
