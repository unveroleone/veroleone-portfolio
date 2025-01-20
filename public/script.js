// Canvas-Setup
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

// Canvas-Größe anpassen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Sternen-Array erstellen
let stars = [];
const numStars = 600; // Anzahl der Sterne

// Funktion zur Erstellung eines einzelnen Sterns
function createStar() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height, 
        radius: Math.random() * 2 + 0.5,  
        speed: Math.random() * 0.5 + 0.2,  
        opacity: Math.random()           
    };
}

for (let i = 0; i < numStars; i++) {
    stars.push(createStar());
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    }
}


function animateStars() {
    for (let star of stars) {
        star.opacity += (Math.random() - 0.5) * 0.02;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 1) star.opacity = 1;
    }
}

function animate() {
    drawStars();
    animateStars();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(createStar());
    }
});

animate();
