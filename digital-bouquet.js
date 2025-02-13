document.addEventListener("DOMContentLoaded", function(){
  const flowerElements = document.querySelectorAll(".flower");
  const bouquetContainer = document.getElementById("bouquet");
  const completeButton = document.getElementById("complete-bouquet");
  const finalMessageDiv = document.getElementById("final-message");
  
  let bouquet = [];
  const minFlowers = 3; // Minimum flowers required before enabling complete button

  // When a flower is clicked, add it to the bouquet
  flowerElements.forEach(flower => {
    flower.addEventListener("click", function(){
      const flowerName = flower.getAttribute("data-flower");
      // Add a copy of the flower image to the bouquet container
      const bouquetFlower = document.createElement("img");
      bouquetFlower.src = flower.src;
      bouquetFlower.alt = flower.alt;
      bouquetFlower.className = "bouquet-flower";
      bouquet.push(flowerName);
      bouquetContainer.appendChild(bouquetFlower);
      
      // Enable the "Complete Bouquet" button if enough flowers are added
      if (bouquet.length >= minFlowers) {
        completeButton.classList.remove("hidden");
      }
    });
  });
  
  completeButton.addEventListener("click", function(){
    // Hide the selection areas and show the final message as a surprise
    document.getElementById("flower-selection").classList.add("hidden");
    document.getElementById("bouquet-container").classList.add("hidden");
    completeButton.classList.add("hidden");
    finalMessageDiv.classList.remove("hidden");
  });
});
