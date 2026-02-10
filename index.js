
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const questionCard = document.querySelector(".question-container");
const resultCard = document.querySelector(".result-container");
const loader = document.getElementById("loader");

function moveNoButton1() {
  const padding = 20;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
function moveNoButton(e) {
  e.preventDefault();
  
  const container = questionCard; // Use the card as boundary
  const containerRect = container.getBoundingClientRect();
  
  const padding = 20;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Calculate boundaries relative to container
  const maxX = containerRect.width - btnWidth - padding;
  const maxY = containerRect.height - btnHeight - padding;

  const minX = padding;
  const minY = padding;

  const x = Math.max(minX, Math.min(Math.random() * maxX, maxX));
  const y = Math.max(minY, Math.min(Math.random() * maxY, maxY));

  // Use absolute positioning relative to container
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", moveNoButton);
const music = document.getElementById("bgMusic");

yesBtn.addEventListener("click", async () => {
  try {
    await music.play(); // MUST be inside user interaction
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