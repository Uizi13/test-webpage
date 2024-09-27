// script.js

const heading = document.getElementById('heading');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function onPageLoad() {
    heading.innerText = "changing";
    heading.style.color = getRandomColor();
    setTimeout(onPageLoad, 4000);
}

window.onload = onPageLoad;
