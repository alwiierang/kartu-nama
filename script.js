// Smooth Scrolling for Anchor Links
document.addEventListener("DOMContentLoaded", function () {
    const socialButtons = document.querySelectorAll(".btn");

    // Add click event listeners to social media buttons
    socialButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const targetUrl = button.getAttribute("href");
            if (targetUrl) {
                window.open(targetUrl, "_blank"); // Open the link in a new tab
            } else {
                console.warn("URL not set for this button.");
            }
        });
    });

    // Ensure smooth scrolling if needed (optional for anchors)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Background Animation Sync (Optional if JS is needed for animations)
const gradientElement = document.body; // Target the body for gradient animation

let gradientStep = 0;
const gradientSpeed = 0.005; // Speed of the gradient animation

const gradientColors = [
    [30, 60, 114], // Dark blue
    [102, 51, 153], // Purple
    [255, 59, 63] // Red
];

const currentColors = [gradientColors[0], gradientColors[1]];
const colorIndices = [0, 1, 2, 3]; // Indices for the gradient colors

function updateGradient() {
    const c0_0 = currentColors[0];
    const c0_1 = currentColors[1];
    const c1_0 = currentColors[2];
    const c1_1 = currentColors[3];

    const istep = 1 - gradientStep;
    const color1 = `rgb(${Math.round(istep * c0_0[0] + gradientStep * c0_1[0])},${Math.round(
        istep * c0_0[1] + gradientStep * c0_1[1]
    )},${Math.round(istep * c0_0[2] + gradientStep * c0_1[2])})`;

    const color2 = `rgb(${Math.round(istep * c1_0[0] + gradientStep * c1_1[0])},${Math.round(
        istep * c1_0[1] + gradientStep * c1_1[1]
    )},${Math.round(istep * c1_0[2] + gradientStep * c1_1[2])})`;

    gradientElement.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;

    gradientStep += gradientSpeed;

    if (gradientStep >= 1) {
        gradientStep %= 1;
        currentColors[0] = gradientColors[colorIndices[0]];
        currentColors[1] = gradientColors[colorIndices[1]];
        currentColors[2] = gradientColors[colorIndices[2]];
        currentColors[3] = gradientColors[colorIndices[3]];

        colorIndices[0] = (colorIndices[0] + 1) % gradientColors.length;
        colorIndices[1] = (colorIndices[1] + 1) % gradientColors.length;
        colorIndices[2] = (colorIndices[2] + 1) % gradientColors.length;
        colorIndices[3] = (colorIndices[3] + 1) % gradientColors.length;
    }
}

setInterval(updateGradient, 10);
