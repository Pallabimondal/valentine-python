// ===== Valentine Button Logic =====
document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const message = document.getElementById("message");
  const gallery = document.getElementById("photoGallery");

  // safety check
  if (!noBtn || !yesBtn) return;

  // NO button runs away 😜
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200;
    const y = Math.random() * 120;

    noBtn.style.position = "relative";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  // YES button click 💖
  yesBtn.addEventListener("click", () => {
    message.innerHTML = "💖 You made my day! 💖";

    // hide both buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // show gallery
    if (gallery) {
      gallery.style.display = "block";
    }
  });
});
