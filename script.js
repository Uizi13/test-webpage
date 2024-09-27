// script.js

// Select the button and the heading
const button = document.getElementById('colorButton');
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

// Add an event listener to the button
button.addEventListener('click', function() {
    // Change the heading's color to a random color
    heading.style.color = getRandomColor();
});
