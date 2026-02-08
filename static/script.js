document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const message = document.getElementById("message");
  const gallery = document.getElementById("photoGallery");

  let currentIndex = 0;
  let images = [];

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

      document.getElementById("title").style.display = "💖 He said YES 💖";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    if (gallery) {
      gallery.style.display = "block";
      images = gallery.querySelectorAll("img");
      startSlideshow();
    }
  });

  function startSlideshow() {
    if (images.length === 0) return;

    // hide all images first
    images.forEach(img => (img.style.display = "none"));

    // show first image
    images[currentIndex].style.display = "block";

    setInterval(() => {
      images[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = "block";
    }, 2000); // change every 2 sec
  }
});
