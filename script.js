let sadMessages = [
    "😢 But Meena, I already bought chocolates...",
    "🥺 Please say yes, my heart is breaking!",
    "💔 Don't do this to me, Meena!",
    "😞 Guess I'll just eat ice cream alone...",
    "😭 I thought we were meant to be!",
    "💘 My heart is crying, Meena...",
    "😔 I’ll be the saddest person today..."
];

function showMessage() {
    // Change the message
    document.getElementById("message").innerText = "I love you Meena Kutty ❤️";
    
    // Hide the question and buttons
    document.getElementById("question").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    // Show hearts animation
    createHearts();
}


function sadMessage() {
    let randomIndex = Math.floor(Math.random() * sadMessages.length);
    document.getElementById("message").innerText = sadMessages[randomIndex];
}

function moveButton() {
    let button = document.getElementById("no");

    // Get the maximum allowed positions (keeping it inside the viewport)
    let maxX = window.innerWidth - button.offsetWidth - 20;
    let maxY = window.innerHeight - button.offsetHeight - 20;

    // Generate a random new position within screen bounds
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    // Apply the new position
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

    // Ensure button stays visible
    button.style.display = "block"; 
}



function createHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.className = "heart";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}
