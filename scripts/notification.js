let userInteracted = false;

// Detect user interaction
document.addEventListener("click", () => {
  userInteracted = true;
});

// Function to show notification
function showXPNotification() {
  // Create sound for notification
  const notificationSound = new Audio();
  notificationSound.src = "./sounds/notification.mp3"; // Make sure to add this sound file

  // Create notification elements
  const notification = document.createElement("div");
  notification.className = "xp-notification";

  // Set position based on screen size
  if (window.innerWidth > 768) {
    notification.style.top = "20px";
    notification.style.right = "20px";
  } else {
    notification.style.top = "0";
    notification.style.left = "0";
    notification.style.right = "0";
  }

  // Create notification content
  notification.innerHTML = `
        <div class="xp-notification-title">
          <span>Descarga completada</span>
          <div class="xp-notification-close">✖</div>
        </div>
        <div class="xp-notification-body">
          <div class="xp-notification-icon">✓</div>
          <div class="xp-notification-message">
            <strong>Culitos Brasileños en BlueRay</strong> se ha descargado.
          </div>
        </div>
      `;

  // Append to document
  document.body.appendChild(notification);

  // Play sound only if the user has interacted with the page
  if (userInteracted) {
    notificationSound
      .play()
      .catch((e) => console.log("Sound playback failed:", e));
  } else {
    console.log(
      "Sound playback blocked: User has not interacted with the page."
    );
  }

  // Add close functionality
  const closeButton = notification.querySelector(".xp-notification-close");
  closeButton.addEventListener("click", () => {
    notification.style.animation = "slideOut 0.5s forwards";
    setTimeout(() => {
      notification.remove();
    }, 500);
  });

  // Auto dismiss after 10 seconds
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.style.animation = "slideOut 0.5s forwards";
      setTimeout(() => {
        notification.remove();
      }, 500);
    }
  }, 10000);
}

// Show notification after a delay to simulate download completion
setTimeout(showXPNotification, 2000);
