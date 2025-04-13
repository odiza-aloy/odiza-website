document.addEventListener("DOMContentLoaded", function () {
  const surpriseBtn = document.getElementById("surpriseBtn");
  const surpriseText = document.getElementById("surpriseText");

  const messages = [
    "🎉 Surprise! You're awesome!",
    "🚀 Keep reaching for the stars!",
    "💡 Never stop learning.",
    "🔥 You're on fire today!",
    "🌟 You make the web shine!"
  ];

  surpriseBtn.addEventListener("click", function () {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    surpriseText.textContent = randomMessage;
    
    // Apply effects
    surpriseText.style.opacity = 0;
    surpriseText.style.transition = "all 0.3s ease-in-out";
    setTimeout(() => {
      surpriseText.style.color = getRandomColor();
      surpriseText.style.opacity = 1;
      surpriseText.style.fontSize = "1.4rem";
      surpriseText.style.marginTop = "15px";
      surpriseText.style.fontWeight = "bold";
    }, 100);
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
