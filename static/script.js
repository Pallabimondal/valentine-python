// ===== Valentine Button Logic =====

document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const message = document.getElementById("message");
  const gallery = document.getElementById("photoGallery");

  // Safety check (prevents errors)
  if (!noBtn || !yesBtn) return;

  // Move the NO button
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200;
    const y = Math.random() * 100;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  // YES button click → show images
  yesBtn.addEventListener("click", () => {
    message.innerHTML = "💖 You made my day! 💖";
    if (gallery) {
      gallery.style.display = "block";
    }
  });
});
