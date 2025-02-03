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

let yesButton = document.getElementById("yes");
let maxFontSize = 360; // Maximum font size for YES button in px
let maxPadding = 120; // Maximum padding for YES button in px

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
    // Get the current font size and padding of the YES button
    let currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    let currentPadding = parseFloat(window.getComputedStyle(yesButton).paddingTop);

    // Increase size until the maximum size is reached
    if (currentFontSize < maxFontSize || currentPadding < maxPadding) {
        let newFontSize = currentFontSize * 1.1; // Increase font size by 10%
        let newPadding = currentPadding * 1.1; // Increase padding by 10%

        // Set the new size, ensuring it doesn't exceed the maximum allowed values
        yesButton.style.fontSize = `${Math.min(newFontSize, maxFontSize)}px`;
        yesButton.style.padding = `${Math.min(newPadding, maxPadding)}px ${Math.min(newPadding, maxPadding)}px`;
    }
}

function showMessage() {
    // Show the final love message
    document.getElementById("message").innerText = "I love you Meena Kutty ❤️";
    
    // Hide the question and buttons
    document.getElementById("question").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
}
