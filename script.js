// script.js

const heading = document.getElementById('heading');
const body = document.body;

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    let opposite_color = '#';
    for (let i = 0; i < 6; i++) {
        let l = Math.floor(Math.random() * 16);
        color += letters[l];
        opposite_color += letters[15 - l];
    }
    return color, opposite_color;
}

function onPageLoad() {
    const color = getRandomColor();
    heading.style.color = color[0];
    body.style.backgroundColor = color[1];
    setTimeout(onPageLoad, 4000);
}

window.onload = onPageLoad;
