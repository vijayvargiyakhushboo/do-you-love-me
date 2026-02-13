const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const questionCard = document.querySelector(".question-container");
const resultCard = document.querySelector(".result-container");
const loader = document.getElementById("loader");
const music = document.getElementById("bgMusic");

function moveNoButton(e) {
  e.preventDefault();
  
  const container = questionCard;
  const containerRect = container.getBoundingClientRect();
  
  const padding = 20;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Calculate boundaries relative to container
  const maxX = containerRect.width - btnWidth - (padding * 2);
  const maxY = containerRect.height - btnHeight - (padding * 2);

  // Random position within bounds
  const x = Math.random() * maxX + padding;
  const y = Math.random() * maxY + padding;

  // Set position
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none"; // Reset any transforms
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", async () => {
  try {
    await music.play();
  } catch (e) {
    console.log("Music play blocked:", e);
  }
  
  document.body.classList.add("after-yes");
  questionCard.classList.add("hidden");
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");
    resultCard.classList.remove("hidden");
  }, 1500);
});