// Check if image loads correctly, if not try alternative path
const mainImage = document.getElementById("mainImage");

mainImage.onerror = function () {
  // If the relative path doesn't work, try from the root
  if (this.src.includes("./images/")) {
    this.src = "/images/wave-juancarlitros.gif";
  }
  // If that fails too, log an error
  this.onerror = function () {
    console.error("Failed to load Juancarlitros image");
  };
};

// Quotes from Juancarlitros or related to No Controles
const quotes = [
  "¡No controles!",
  "¡Chachi piruli!",
  "Soy Juancarlitros, el rey de la fiesta",
  "¡Viva la música!",
  "La vida es una fiesta",
];

// Display random quotes
const quoteDisplay = document.getElementById("quoteDisplay");
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
  setTimeout(showRandomQuote, 5000); // Change quote every 5 seconds
}
showRandomQuote();

// Emoji rain effect
//   const emojis = [
//     "🎸",
//     "🎵",
//     "🎶",
//     "🎭",
//     "🎤",
//     "🎧",
//     "🥁",
//     "🎹",
//     "💃",
//     "🕺",
//   ];
//   const emojiContainer = document.getElementById("emojiContainer");

//   function createEmoji() {
//     const emoji = document.createElement("div");
//     emoji.className = "emoji";
//     emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
//     emoji.style.left = `${Math.random() * 100}%`;
//     emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
//     emojiContainer.appendChild(emoji);

//     // Remove emoji after animation completes
//     setTimeout(() => {
//       emoji.remove();
//     }, 5000);
//   }

const emojiImages = [
  "001.png",
  "002.png",
  "003.gif",
  "004.png",
  "005.gif",
  "006.png",
  "007.png",
  "008.png",
  "009.png",
  "010.png",
  "011.gif",
  "012.png",
  "013.png",
  "014.png",
  "015.png",
  "016.png",
  "017.png",
  "018.png",
  "019.png",
  "020.png",
  "021.png",
  "022.png",
  "023.png",
  "024.png",
  "025.png",
];

const emojiContainer = document.getElementById("emojiContainer");

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  const randomEmoji =
    emojiImages[Math.floor(Math.random() * emojiImages.length)];
  emoji.style.backgroundImage = `url(./images/emojis/${randomEmoji})`;
  emoji.style.left = `${Math.random() * 100}%`;
  emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
  emoji.style.width = "19px";
  emoji.style.height = "19px";
  emoji.style.zIndex = "9999";
  emojiContainer.appendChild(emoji);

  // Remove emoji after animation completes
  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

//   setInterval(createEmoji, 300);

// Create audio element for click sound
const clickSound = new Audio();
clickSound.src = "./sounds/sergius.mp3"; // Adjust the path to your sound file
clickSound.preload = "auto";

const emojiClickSound = new Audio();
emojiClickSound.src = "./sounds/notificatin.mp3"; // Change this to your emoji sound file
emojiClickSound.preload = "auto";

document.addEventListener("click", (e) => {
  // Play click sound
  clickSound.currentTime = 0; // Reset sound to beginning
  clickSound.play().catch((e) => console.log("Audio playback failed:", e));

  const clickEmoji = document.createElement("div");
  clickEmoji.className = "emoji";
  clickEmoji.textContent = "💥";
  clickEmoji.style.left = `${e.clientX}px`;
  clickEmoji.style.top = `${e.clientY}px`;
  clickEmoji.style.fontSize = "48px";
  clickEmoji.style.position = "absolute";
  clickEmoji.style.transform = "translate(-50%, -50%)";
  clickEmoji.style.animation = "none";
  clickEmoji.style.zIndex = "4";

  emoji.addEventListener("click", (e) => {
    // Stop the event from propagating to document click handler
    e.stopPropagation();

    // Play the emoji-specific sound
    emojiClickSound.currentTime = 0;
    emojiClickSound
      .play()
      .catch((e) => console.log("Emoji audio playback failed:", e));

    emoji.style.transform = "scale(2)";
    emoji.style.opacity = "0.8";

    setTimeout(() => {
      emoji.style.transform = "scale(1)";
      emoji.style.opacity = "1";
    }, 300);
  });

  document.body.appendChild(clickEmoji);

  setTimeout(() => {
    clickEmoji.style.transition = "all 0.5s";
    clickEmoji.style.opacity = "0";
    clickEmoji.style.transform = "translate(-50%, -50%) scale(2)";
    setTimeout(() => {
      clickEmoji.remove();
    }, 500);
  }, 100);
});

setInterval(createEmoji, 300);
