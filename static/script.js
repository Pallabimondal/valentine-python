// ===== Valentine Button Logic =====

document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const message = document.getElementById("message");

  // Move the NO button when user tries to hover
  noBtn.addEventListener("mouseover", () => {
    const maxX = 200;
    const maxY = 80;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  // YES button click action
  yesBtn.addEventListener("click", () => {
    message.innerHTML = "💖 Yay! I knew you’d say YES! 💖";
    message.style.fontSize = "20px";
    message.style.color = "#ff3366";
  });
});
