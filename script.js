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
let maxFontSize = 2560; // Maximum font size for YES button in px
let maxPadding = 1440; // Maximum padding for YES button in px

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
        let newFontSize = currentFontSize * 1.5; // Increase font size by 50%
        let newPadding = currentPadding * 1.5; // Increase padding by 50%

        // Set the new size, ensuring it doesn't exceed the maximum allowed values
        yesButton.style.fontSize = `${Math.min(newFontSize, maxFontSize)}px`;
        yesButton.style.padding = `${Math.min(newPadding, maxPadding)}px ${Math.min(newPadding, maxPadding)}px`;
    }
}

function showMessage() {
    let messageElement = document.getElementById("message");

    // Directly change the text and apply styles
    messageElement.innerText = "I love you soooo much Meena Kutty ❤️";
    messageElement.style.fontSize = "40px";  // Make the message bigger
    messageElement.style.fontWeight = "bold";  // Make the message bolder
    messageElement.style.color = "#d6336c";  // Ensure the text color is correct (optional)
    messageElement.style.transition = "all 0.3s";  // Add transition for smooth effect

    // Create heart splash animation (fireworks effect)
    for (let i = 0; i < 40; i++) { // Increase the number of hearts to 40
        let heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.classList.add("heart");

        let angle = Math.random() * 360; // Random angle for direction
        let distance = Math.random() * 200 + 50; // Distance from center between 50px and 250px
        let xPosition = window.innerWidth / 2 + distance * Math.cos(angle * Math.PI / 180); // Calculate x position
        let yPosition = window.innerHeight / 2 + distance * Math.sin(angle * Math.PI / 180); // Calculate y position
        let animationDelay = Math.random() * 0.5; // Random delay for animation
        let animationDuration = Math.random() * 3 + 2; // Random duration between 2s and 5s

        heart.style.left = `${xPosition}px`;
        heart.style.top = `${yPosition}px`;
        heart.style.animationDelay = `${animationDelay}s`;
        heart.style.animationDuration = `${animationDuration}s`;

        document.body.appendChild(heart);

        // Remove the heart after animation
        setTimeout(() => {
            heart.remove(); // Remove heart after animation ends
        }, (animationDuration + animationDelay) * 1000); // Remove after total duration
    }

    // Hide the question and buttons
    document.getElementById("question").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

     // Fade out the message after 3 seconds
    setTimeout(() => {
        messageElement.style.opacity = "0";

        // After fading, show the "CLICK HERE" button
        setTimeout(() => {
            let clickHereBtn = document.createElement("button");
            clickHereBtn.innerText = "CLICK HERE";
            clickHereBtn.id = "click-here";
            clickHereBtn.onclick = function () {
                window.location.href = "https://your-image-link.com"; // Replace with actual image link
            };

            document.body.appendChild(clickHereBtn);
        }, 3000); // Delay before showing the button
    }, 3000);
}
}
