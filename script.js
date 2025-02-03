let sadMessages = [
    "😢 But Meena, I already bought chocolates...",
    "🥺 Please say yes, my heart is breaking!",
    "💔 Don't do this to me, Meena!",
    "😞 Guess I'll just eat ice cream alone...",
    "😭 I thought we were meant to be!",
    "💘 My heart is crying, Meena...",
    "😔 I’ll be the saddest person today..."
    "😢 Are you sure, Meena?",
    "💔 That hurts...",
    "😭 Please don't say no...",
    "🥺 Give me a chance...",
    "💘 I won't stop until you say YES!",
];

let messageIndex = 0;

function sadMessage() {
    let messageElement = document.getElementById("message");

    // Show the next sad message
    messageElement.innerText = sadMessages[messageIndex];

    // Loop through messages, restart if we reach the end
    messageIndex = (messageIndex + 1) % sadMessages.length;
}

function showMessage() {
    // Show the final love message
    document.getElementById("message").innerText = "I love you Meena Kutty ❤️";
    
    // Hide the question and buttons
    document.getElementById("question").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
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
