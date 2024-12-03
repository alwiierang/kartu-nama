// script.js

// Function to adjust theme based on background color
function adjustTheme() {
    const body = document.body;
    const bgColor = getComputedStyle(body).backgroundColor;
    
    const isDark = bgColor.includes('rgb(30, 60, 114)'); // Example RGB for dark blue background
    if (isDark) {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
    }
}

// Run the function when the page loads
window.onload = adjustTheme;
