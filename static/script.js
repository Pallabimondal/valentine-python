document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const message = document.getElementById("message");
  const gallery = document.getElementById("photoGallery");
  const title = document.getElementById("title");

  let currentIndex = 0;
  let images = [];
  let heartInterval;

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
    // fade out title
    title.classList.add("fade-out");

    setTimeout(() => {
      title.style.display = "none";
      message.innerHTML = "💖 Yayyy! You made my heart smile 💖";

      yesBtn.style.display = "none";
      noBtn.style.display = "none";

      gallery.style.display = "block";
      gallery.classList.add("fade-in");

      images = gallery.querySelectorAll("img");
      startSlideshow();
      startHearts();
    }, 500);
  });

  // Slideshow logic
  function startSlideshow() {
    if (images.length === 0) return;

    images.forEach(img => (img.style.display = "none"));
    images[currentIndex].style.display = "block";

    setInterval(() => {
      images[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = "block";
    }, 2000);
  }

  // Floating hearts 💖
  function startHearts() {
    heartInterval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "💖";
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }, 400);
  }
});
