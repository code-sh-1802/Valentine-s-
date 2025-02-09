document.addEventListener("DOMContentLoaded", function() {
  let currentLevel = 1;
  const maxLevel = 3;
  // Define level parameters: number of hearts, message, and (optionally) a digital gift image
  const levels = [
    { level: 1, hearts: 5, message: "Level 1 completed! Your smile brightens my day! 😘", gift: "gift1.png" },
    { level: 2, hearts: 8, message: "Level 2 completed! You are my sunshine! ☀️", gift: "gift2.png" },
    { level: 3, hearts: 10, message: "Level 3 completed! You're the winner of my heart! 👑❤️", gift: "gift3.png" }
  ];
  
  const gameContainer = document.getElementById("game-container");

  // Start the current level
  function startLevel() {
    gameContainer.innerHTML = ""; // Clear previous content
    const levelData = levels[currentLevel - 1];
    
    // Display level header
    const levelHeader = document.createElement("h2");
    levelHeader.textContent = `Level ${levelData.level}`;
    gameContainer.appendChild(levelHeader);

    // Create a game area for hearts
    const gameArea = document.createElement("div");
    gameArea.id = "level-game-area";
    gameArea.className = "game-area";
    gameContainer.appendChild(gameArea);

    // Generate hearts based on the current level's requirement
    for (let i = 0; i < levelData.hearts; i++) {
      const heart = document.createElement("div");
      heart.className = "game-heart";
      heart.textContent = "💖";
      // Randomly position the heart within the game area
      heart.style.left = Math.random() * 90 + "%";
      heart.style.top = Math.random() * 90 + "%";
      // When a heart is clicked, it “pops” (animates) and then is removed
      heart.addEventListener("click", function() {
        heart.classList.add("pop");
        setTimeout(() => {
          heart.remove();
          checkLevelCompletion();
        }, 300); // Wait for pop animation to finish
      });
      gameArea.appendChild(heart);
    }
  }
  
  // Check if all hearts in the current level have been popped
  function checkLevelCompletion() {
    const remainingHearts = document.querySelectorAll("#level-game-area .game-heart");
    if (remainingHearts.length === 0) {
      levelCompleted();
    }
  }
  
  // When a level is completed, show the beautiful message and digital gift
  function levelCompleted() {
    const levelData = levels[currentLevel - 1];
    const messageDiv = document.createElement("div");
    messageDiv.className = "level-message";
    messageDiv.innerHTML = `<h3>${levelData.message}</h3>`;
    
    // If a digital gift image is available, display it
    if (levelData.gift) {
      const giftImg = document.createElement("img");
      giftImg.src = levelData.gift;
      giftImg.alt = `Gift for Level ${levelData.level}`;
      giftImg.className = "gift-img";
      messageDiv.appendChild(giftImg);
    }
    
    gameContainer.appendChild(messageDiv);
    
    // If this isn't the final level, show a "Next Level" button; otherwise, display the final victory message
    if (currentLevel < maxLevel) {
      const nextButton = document.createElement("button");
      nextButton.className = "btn";
      nextButton.textContent = "Next Level";
      nextButton.addEventListener("click", function() {
        currentLevel++;
        startLevel();
      });
      gameContainer.appendChild(nextButton);
    } else {
      const finalMessage = document.createElement("div");
      finalMessage.className = "final-message";
      finalMessage.innerHTML = "<h2>Congratulations! You are the winner of my heart! ❤️👑</h2>";
      gameContainer.appendChild(finalMessage);
    }
  }
  
  // Start the first level when the page loads
  startLevel();
});
