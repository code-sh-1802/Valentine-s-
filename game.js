// Wait for the DOM to load before setting up the game
document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("start-game");
  const gameArea = document.getElementById("game-area");
  const secretMessage = document.getElementById("secret-message");
  const totalHearts = 10; // Number of hearts to pop

  // Start the game when the button is clicked
  startButton.addEventListener("click", startGame);

  function startGame() {
    startButton.disabled = true; // Prevent multiple starts
    gameArea.innerHTML = ""; // Clear game area if necessary
    secretMessage.classList.add("hidden"); // Hide secret message if visible

    // Create hearts
    for (let i = 0; i < totalHearts; i++) {
      let heart = document.createElement("div");
      heart.className = "game-heart";
      heart.innerHTML = "💖";
      // Position hearts randomly within the game area boundaries
      heart.style.left = Math.random() * 90 + "%";
      heart.style.top = Math.random() * 90 + "%";
      
      // When a heart is clicked, it "pops" and is removed
      heart.addEventListener("click", function() {
        heart.classList.add("pop");
        setTimeout(() => {
          heart.remove();
          checkGameCompletion();
        }, 300); // Time for pop animation to finish
      });
      gameArea.appendChild(heart);
    }
  }

  function checkGameCompletion() {
    const remainingHearts = document.querySelectorAll("#game-area .game-heart");
    if (remainingHearts.length === 0) {
      // Reveal the secret love message when all hearts are popped
      secretMessage.classList.remove("hidden");
    }
  }
});
