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
    document.getElementById("message").innerText = "YAY! 💕 I love you, Meena! You're the best!";
    createHearts();
}

function sadMessage() {
    let randomIndex = Math.floor(Math.random() * sadMessages.length);
    document.getElementById("message").innerText = sadMessages[randomIndex];
}

function moveButton() {
    let button = document.getElementById("no");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
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
