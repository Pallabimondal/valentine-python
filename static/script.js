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
  document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");
  const gallery = document.getElementById("photoGallery");

  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200;
    const y = Math.random() * 80;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  yesBtn.addEventListener("click", () => {
    message.innerHTML = "💖 You made my day! 💖";
    gallery.style.display = "block";
  });
});

});
