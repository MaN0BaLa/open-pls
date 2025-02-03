let sadMessages = [
    "😢 But Meena, I already bought chocolates...",
    "🥺 Please say yes, my heart is breaking!",
    "💔 Don't do this to me, Meena!",
    "😞 Guess I'll just eat ice cream alone...",
    "😭 I thought we were meant to be!",
    "💘 My heart is crying, Meena...",
    "😔 I’ll be the saddest person today...",
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

    // Increase the size of the YES button every time NO is clicked
    increaseYesButtonSize();

    // Loop through messages, restart if we reach the end
    messageIndex = (messageIndex + 1) % sadMessages.length;
}

function increaseYesButtonSize() {
    let yesButton = document.getElementById("yes");

    // Get current font size and increase it
    let currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    let newFontSize = currentFontSize * 1.2; // Increase size by 20%

    yesButton.style.fontSize = `${newFontSize}px`; // Update font size
}

function showMessage() {
    // Show the final love message
    document.getElementById("message").innerText = "I love you Meena Kutty ❤️";
    
    // Hide the question and buttons
    document.getElementById("question").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
}
