const textArray = [
    "You are my life ❤️",
    "My happiness begins with you 😊",
    "Forever in my heart 💖",
    "You make my world bright ✨",
    "Wishing you a grand Happy Birthday! 🎂🎉"
];

let index = 0;
const textElement = document.getElementById("changingText");

function changeText() {
    textElement.classList.remove("fade-text");
    setTimeout(() => {
        index = (index + 1) % textArray.length;
        textElement.innerText = textArray[index];
        textElement.classList.add("fade-text");
    }, 500);
}

// Change text every 4 seconds
setInterval(changeText, 4000);

// Create falling hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 500ms
setInterval(createHeart, 500);

