document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("fireworks-canvas");
  const ctx = canvas.getContext("2d");
  const surpriseButton = document.getElementById("show-surprise");
  const finalMessageDiv = document.getElementById("final-message");
  
  // Set canvas dimensions (adjust as needed)
  canvas.width = window.innerWidth * 0.9;
  canvas.height = 400;
  
  let particles = [];
  let fireworksCount = 0;
  
  // Particle constructor for each firework particle
  function Particle(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 2 + 1;
    this.color = color;
    this.speedX = (Math.random() - 0.5) * 6;
    this.speedY = (Math.random() - 0.5) * 6;
    this.alpha = 1;
    this.decay = Math.random() * 0.03 + 0.015;
  }
  
  Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= this.decay;
  }
  
  Particle.prototype.draw = function(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
  
  // Create a firework explosion at (x, y)
  function createFirework(x, y) {
    const colors = ["#ff4b5c", "#ff758c", "#ffc1e3", "#a2d2ff"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < 30; i++) {
      particles.push(new Particle(x, y, color));
    }
    fireworksCount++;
    if (fireworksCount >= 5) {
      // After 5 fireworks, reveal the surprise button
      surpriseButton.classList.remove("hidden");
    }
  }
  
  // Animation loop for the fireworks
  function animate() {
    // Fade effect for trails
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw each particle
    for (let i = particles.length - 1; i >= 0; i--) {
      let p = particles[i];
      p.update();
      p.draw(ctx);
      if (p.alpha <= 0) {
        particles.splice(i, 1);
      }
    }
    requestAnimationFrame(animate);
  }
  
  // Launch a firework on canvas click
  canvas.addEventListener("click", function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    createFirework(x, y);
  });
  
  // When the surprise button is clicked, hide the canvas and show the final message
  surpriseButton.addEventListener("click", function() {
    canvas.style.display = "none";
    surpriseButton.classList.add("hidden");
    finalMessageDiv.classList.remove("hidden");
  });
  
  animate();
});
