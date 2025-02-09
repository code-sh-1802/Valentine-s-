// Floating Hearts Animation
function createFloatingHearts() {
    const heartContainer = document.querySelector(".hearts-container");
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heartContainer.appendChild(heart);
    }
}
createFloatingHearts();

// Play Background Music
function playMusic() {
    let music = document.getElementById("bg-music");
    music.play();
}

// Quiz Validation & Surprise
document.getElementById("quiz-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let answer1 = document.getElementById("q1").value.toLowerCase();
    let answer2 = document.getElementById("q2").value.toLowerCase();
    let answer3 = document.getElementById("q3").value.toLowerCase();

    if (answer1.includes("smile") && answer2.includes("perfect") && answer3.includes("beach")) {
        confettiExplosion();
        setTimeout(() => {
            window.location.href = "surprise.html";
        }, 2000);
    } else {
        document.getElementById("quiz-message").textContent = "Oops! Try again, my love! 💕";
    }
});

// Confetti Explosion Effect
function confettiExplosion() {
    let confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}
