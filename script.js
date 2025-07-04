const canvas = document.getElementById('starrySkyCanvas');
const ctx = canvas.getContext('2d');

let currentName = "NELLY";
let currentZodiac = "Aries";

const letterMap = {
    'A': {
        points: [{x: .5, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: .25, y: .5}, {x: .75, y: .5}],
        lines: [[0, 1], [0, 2], [3, 4]]
    },
    'B': {
        points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: .25}, {x: 0, y: .5}, {x: 1, y: .75}],
        lines: [[0, 1], [0, 2], [2, 3], [3, 4], [4, 1]]
    },
    'C': {
        points: [{x: 1, y: .2}, {x: .2, y: 0}, {x: 0, y: .5}, {x: .2, y: 1}, {x: 1, y: .8}],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4]]
    },
    'D': {
        points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: .75}, {x: 1, y: .25}],
        lines: [[0, 1], [0, 2], [2, 3], [3, 0]]
    },
    'E': {
        points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, {x: .5, y: .5}, {x: 1, y: 1}],
        lines: [[0, 1], [0, 2], [1, 4], [3, 0]]
    },
    'F': {points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, {x: .5, y: .5}], lines: [[0, 1], [0, 2], [0, 3]]},
    'G': {
        points: [{x: 1, y: .2}, {x: .2, y: 0}, {x: 0, y: .5}, {x: .2, y: 1}, {x: 1, y: .8}, {x: .5, y: .5}],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
    },
    'H': {
        points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 0, y: .5}, {x: 1, y: .5}],
        lines: [[0, 1], [2, 3], [4, 5]]
    },
    'I': {
        points: [{x: .5, y: 0}, {x: .5, y: 1}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}],
        lines: [[0, 1], [2, 3], [4, 5]]
    },
    'J': {points: [{x: 1, y: 0}, {x: 1, y: .7}, {x: .5, y: 1}, {x: 0, y: .7}], lines: [[0, 1], [1, 2], [2, 3]]},
    'K': {
        points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, {x: 0, y: .5}, {x: 1, y: 1}],
        lines: [[0, 1], [2, 3], [3, 4]]
    },
    'L': {points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}], lines: [[0, 1], [1, 2]]},
    'M': {
        points: [{x: 0, y: 1}, {x: 0, y: 0}, {x: .5, y: .5}, {x: 1, y: 0}, {x: 1, y: 1}],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4]]
    },
    'N': {points: [{x: 0, y: 1}, {x: 0, y: 0}, {x: 1, y: 1}, {x: 1, y: 0}], lines: [[0, 1], [1, 2], [2, 3]]},
    'O': {
        points: [{x: .5, y: 0}, {x: 0, y: .5}, {x: .5, y: 1}, {x: 1, y: .5}],
        lines: [[0, 1], [1, 2], [2, 3], [3, 0]]
    },
    'P': {points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: .25}, {x: 0, y: .5}], lines: [[0, 1], [0, 2], [2, 3], [3, 0]]},
    'Q': {
        points: [{x: .5, y: 0}, {x: 0, y: .5}, {x: .5, y: 1}, {x: 1, y: .5}, {x: .7, y: .7}, {x: 1.2, y: 1.2}],
        lines: [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5]]
    },
    'R': {
        points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: .25}, {x: 0, y: .5}, {x: 1, y: 1}],
        lines: [[0, 1], [0, 2], [2, 3], [3, 4]]
    },
    'S': {
        points: [{x: 1, y: .1}, {x: .1, y: 0}, {x: 0, y: .5}, {x: 1, y: .5}, {x: .9, y: 1}, {x: 0, y: .9}],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
    },
    'T': {points: [{x: .5, y: 0}, {x: .5, y: 1}, {x: 0, y: 0}, {x: 1, y: 0}], lines: [[0, 1], [2, 3]]},
    'U': {points: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 0}], lines: [[0, 1], [1, 2], [2, 3]]},
    'V': {points: [{x: 0, y: 0}, {x: .5, y: 1}, {x: 1, y: 0}], lines: [[0, 1], [1, 2]]},
    'W': {
        points: [{x: 0, y: 0}, {x: .25, y: 1}, {x: .5, y: .5}, {x: .75, y: 1}, {x: 1, y: 0}],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4]]
    },
    'X': {points: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 1, y: 0}, {x: 0, y: 1}], lines: [[0, 1], [2, 3]]},
    'Y': {points: [{x: 0, y: 0}, {x: .5, y: .5}, {x: 1, y: 0}, {x: .5, y: 1}], lines: [[0, 1], [2, 1], [1, 3]]},
    'Z': {points: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}], lines: [[0, 1], [1, 2], [2, 3]]},
    ' ': {points: [], lines: []}
};

const zodiacMap = { // (Sin cambios)
    'Aries': {
        points: [{x: 0, y: 0.2}, {x: 0.2, y: 0}, {x: 0.6, y: 0.4}, {x: 0.8, y: 0.6}, {x: 1, y: 1}],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4]]
    },
    "Taurus": {
        "points": [
            {"x": 0.26, "y": 0.22}, {"x": 0.42, "y": 0.35}, {"x": 0.55, "y": 0.40},
            {"x": 0.21, "y": 0.42}, {"x": 0.38, "y": 0.52}, {"x": 0.50, "y": 0.58},
            {"x": 0.60, "y": 0.50}, {"x": 0.70, "y": 0.62}, {"x": 0.83, "y": 0.71},
            {"x": 0.95, "y": 0.78}
        ],
        "lines": [ [0, 1], [1, 2], [3, 4], [4, 5], [2, 6], [5, 6], [6, 7], [7, 8], [8, 9] ]
    },
    'Gemini': {
        points: [
            {x: 0.30, y: 0.15}, {x: 0.35, y: 0.35}, {x: 0.10, y: 0.40},
            {x: 0.40, y: 0.65}, {x: 0.30, y: 0.90}, {x: 0.60, y: 0.25},
            {x: 0.65, y: 0.45}, {x: 0.90, y: 0.55}, {x: 0.70, y: 0.75},
            {x: 0.80, y: 1.00}, {x: 0.50, y: 0.90}, {x: 0.60, y: 1.00}
        ],
        lines: [ [0, 1], [1, 2], [1, 3], [3, 4], [5, 6], [6, 7], [6, 8], [8, 9], [3, 10], [8, 11], [1, 6] ]
    },
    'Cancer': {
        points: [
            {x: 0.30, y: 0.85}, {x: 0.40, y: 0.30}, {x: 0.50, y: 0.55},
            {x: 0.70, y: 0.50}, {x: 0.85, y: 0.40},
        ],
        lines: [ [0, 2], [1, 2], [2, 3], [3, 4] ]
    },
    'Leo': {
        points: [
            {x: 0.60, y: 0.55}, {x: 0.80, y: 0.35}, {x: 0.90, y: 0.30},
            {x: 0.80, y: 0.55}, {x: 0.95, y: 0.60}, {x: 0.98, y: 0.45},
            {x: 0.95, y: 0.30}, {x: 0.90, y: 0.10}, {x: 0.95, y: 0.05},
            {x: 0.98, y: 0.15},
        ],
        lines: [ [0, 1], [2, 1], [0, 3], [3, 4], [2, 5], [5, 4], [2, 7], [7, 8], [8, 9] ]
    },
    'Virgo': {
        points: [
            {x: 0.35, y: 0.25}, {x: 0.65, y: 0.20}, {x: 0.38, y: 0.65},
            {x: 0.75, y: 0.70}, {x: 0.68, y: 0.45} , {x: 0.70, y: 0.82},
            {x: 0.62, y: 0.89}, {x: 0.52, y: 1.15}, {x: 0.25, y: 0.15},
            {x: 0.38, y: 0.90}, {x: 0.34, y: 1.20}, {x: 0.50, y: 0.05},
        ],
        lines: [ [0, 1], [0, 2], [2, 3], [1, 4], [4, 3], [3, 5], [5, 6], [6, 7], [0, 8], [2, 9], [9, 10], [1,11] ]
    },
    'Libra': {
        points: [
            {x: 0.15, y: 0.45}, {x: 0.45, y: 0.20}, {x: 0.35, y: 0.75},
            {x: 0.60, y: 0.75}, {x: 0.75, y: 0.40}, {x: 0.95, y: 0.82},
            {x: 0.60, y: 1.38}, {x: 0.60, y: 1.60}
        ],
        lines: [ [2, 1], [2, 3], [3, 4], [4, 1], [4, 5], [2, 6], [6, 7] ]
    },
    'Scorpio': {
        points: [
            {x: 0.8, y: 0.4}, {x: 0.7, y: 0.1}, {x: 0.9, y: 0.1}, {x: 0.6, y: 0.3},
            {x: 0.5, y: 0.5}, {x: 0.4, y: 0.7}, {x: 0.3, y: 0.9}, {x: 0.2, y: 0.8},
            {x: 0.1, y: 0.75}, {x: 0.15, y: 0.2}
        ],
        lines: [ [0, 3], [1, 3], [2, 3], [3, 4], [4, 5], [5, 6], [6, 8], [8, 9] ]
    },
    'Sagittarius': {
        points: [
            { x: 0.05, y: 0.45 }, { x: 0.20, y: 0.35 }, { x: 0.40, y: 0.48 },
            { x: 0.30, y: 0.70 }, { x: 0.50, y: 0.60 }, { x: 0.80, y: 0.45 },
            { x: 0.85, y: 0.15 }, { x: 0.70, y: 0.10 }, { x: 0.60, y: 0.05 },
            { x: 0.90, y: 0.20 }, { x: 1.00, y: 0.85 }, { x: 0.95, y: 0.40 },
            { x: 0.55, y: 0.95 }, { x: 0.80, y: 0.89 },
        ],
        lines: [ [0, 1], [1, 4], [4, 5], [5, 6], [6, 7], [7, 8], [6, 9], [9, 11], [4, 12], [5,13] ]
    },
    'Capricorn': {
        points: [
            { x: 0.05, y: 0.40 }, { x: 0.15, y: 0.42 }, { x: 0.45, y: 0.35 },
            { x: 0.95, y: 0.15 }, { x: 0.95, y: 0.05 }, { x: 0.75, y: 0.65 },
            { x: 0.55, y: 0.85 }, { x: 0.20, y: 0.65 }
        ],
        lines: [ [0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 7], [7, 0] ]
    },
    'Aquarius': {
        points: [
            { x: 0.74, y: 0.10 }, { x: 0.57, y: 0.23 }, { x: 0.38, y: 0.32 },
            { x: 0.54, y: 0.42 }, { x: 0.67, y: 0.40 }, { x: 0.39, y: 0.44 },
            { x: 0.35, y: 0.45 }, { x: 0.34, y: 0.50 }, { x: 0.48, y: 0.69 },
            { x: 0.48, y: 0.58 }, { x: 0.58, y: 0.57 }, { x: 0.63, y: 0.60 },
            { x: 0.69, y: 0.65 }
        ],
        lines: [ [0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12] ]
    },
    'Pisces': {
        points: [
            { x: 0.16, y: 0.26 }, { x: 0.09, y: 0.22 }, { x: 0.10, y: 0.16 },
            { x: 0.16, y: 0.26 }, { x: 0.15, y: 0.40 }, { x: 0.17, y: 0.49 },
            { x: 0.16, y: 0.65 }, { x: 0.16, y: 0.81 }, { x: 0.23, y: 0.70 },
            { x: 0.28, y: 0.66 }, { x: 0.34, y: 0.59 }, { x: 0.38, y: 0.55 },
            { x: 0.46, y: 0.53 }, { x: 0.66, y: 0.40 }, { x: 0.78, y: 0.36 },
            { x: 0.83, y: 0.30 }, { x: 0.88, y: 0.28 }, { x: 0.93, y: 0.33 },
            { x: 0.90, y: 0.39 }, { x: 0.82, y: 0.45 }, { x: 0.79, y: 0.36 }
        ],
        lines: [ [0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10], [10,11], [11,12], [12,13], [13,14], [14,15], [15,16], [16,17], [17,18], [18,19], [19,20], [20,13], [6,12] ]
    }
};

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function generateNameData(name) {
    const allPoints = [];
    const allLines = [];
    const totalLetters = name.length;
    let letterWidth = 0.08;
    let letterSpacing = 0.04;
    let totalWidth = totalLetters * letterWidth + (totalLetters - 1) * letterSpacing;
    const maxWidth = 0.90;
    if (totalWidth > maxWidth) {
        const scaleFactor = maxWidth / totalWidth;
        letterWidth *= scaleFactor;
        letterSpacing *= scaleFactor;
        totalWidth = maxWidth;
    }
    const startX = (1.0 - totalWidth) / 2;
    const startY = 0.25;
    const letterHeight = 0.1;
    let pointIndexOffset = 0;
    for (let i = 0; i < name.length; i++) {
        const char = name[i];
        const letterDef = letterMap[char];
        if (!letterDef) continue;
        const currentOffsetX = startX + i * (letterWidth + letterSpacing);
        letterDef.points.forEach(p => {
            allPoints.push({x: currentOffsetX + (p.x * letterWidth), y: startY + (p.y * letterHeight)});
        });
        letterDef.lines.forEach(line => {
            allLines.push([line[0] + pointIndexOffset, line[1] + pointIndexOffset]);
        });
        pointIndexOffset += letterDef.points.length;
    }
    return [{name: name, stars: allPoints, lines: allLines}];
}

function generateZodiacData(zodiacName, startY = 0.5) {
    const zodiacDef = zodiacMap[zodiacName];
    if (!zodiacDef) return [];
    const points = zodiacDef.points;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    points.forEach(p => {
        minX = Math.min(minX, p.x);
        minY = Math.min(minY, p.y);
        maxX = Math.max(maxX, p.x);
        maxY = Math.max(maxY, p.y);
    });
    const shapeWidth = maxX - minX;
    const shapeHeight = maxY - minY;
    const scale = Math.min(0.3 / shapeWidth, 0.3 / shapeHeight);
    const scaledPoints = points.map(p => {
        const centeredX = p.x - (minX + shapeWidth / 2);
        const centeredY = p.y - (minY + shapeHeight / 2);
        return {
            x: 0.5 + centeredX * scale,
            y: startY + centeredY * scale
        };
    });
    return [{name: zodiacName, stars: scaledPoints, lines: zodiacDef.lines}];
}

let stars = [];
let shootingStars = [];
let nebulas = [];
let mouseX = 0;
let mouseY = 0;
let interactiveShapes = [];
let activeShape = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeSky();
}

class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 1.5 + 0.5;
        this.originalRadius = this.radius;
        this.originalOpacity = Math.random() * 0.7 + 0.3;
        this.opacity = this.originalOpacity;
        this.blinkSpeed = Math.random() * 0.02 + 0.005;
        this.direction = 1;
        this.z = Math.random() * 0.6 + 0.4;
    }

    draw(offsetX, offsetY) {
        const currentX = this.x + offsetX * this.z;
        const currentY = this.y + offsetY * this.z;
        ctx.beginPath();
        ctx.shadowBlur = this.radius * 3;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.arc(currentX, currentY, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }

    update() {
        this.opacity += this.blinkSpeed * this.direction;
        if (this.opacity > this.originalOpacity || this.opacity < 0.1) {
            this.direction *= -1;
            this.opacity = Math.max(0.1, Math.min(this.originalOpacity, this.opacity));
        }
    }
}

class ShootingStar {
    constructor() {
        const edge = Math.floor(Math.random() * 4);
        switch (edge) {
            case 0: this.x = Math.random() * canvas.width; this.y = -50; this.angle = Math.PI * 0.25 + Math.random() * Math.PI * 0.5; break;
            case 1: this.x = canvas.width + 50; this.y = Math.random() * canvas.height; this.angle = Math.PI * 0.75 + Math.random() * Math.PI * 0.5; break;
            case 2: this.x = Math.random() * canvas.width; this.y = canvas.height + 50; this.angle = Math.PI * 1.25 + Math.random() * Math.PI * 0.5; break;
            case 3: this.x = -50; this.y = Math.random() * canvas.height; this.angle = -Math.PI * 0.25 + Math.random() * Math.PI * 0.5; break;
        }
        this.speed = Math.random() * 5 + 3;
        this.length = Math.random() * 80 + 50;
        this.opacity = 1;
        this.fadeSpeed = 0.015;
    }

    draw() {
        ctx.beginPath();
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 255, 220, 0.7)';
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x - Math.cos(this.angle) * this.length, this.y - Math.sin(this.angle) * this.length);
        gradient.addColorStop(0, `rgba(255, 255, 220, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 220, 0)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.moveTo(this.x, this.y);
        const prevX = this.x - Math.cos(this.angle) * this.length;
        const prevY = this.y - Math.sin(this.angle) * this.length;
        ctx.lineTo(prevX, prevY);
        ctx.stroke();
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= this.fadeSpeed;
    }

    isOffScreen() { return this.opacity <= 0; }
}

class NebulaParticle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 1;
        this.color = color;
        this.opacity = 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.decay = Math.random() * 0.02 + 0.01;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        ctx.fill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.decay;
        this.radius *= 0.98;
    }

    isFaded() { return this.opacity <= 0.05 || this.radius < 0.1; }
}

class Nebula {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        const colors = [{r: 255, g: 100, b: 150}, {r: 100, g: 150, b: 255}, {r: 255, g: 200, b: 100}, { r: 150, g: 255, b: 100 }];
        const numParticles = Math.random() * 50 + 100;
        for (let i = 0; i < numParticles; i++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            this.particles.push(new NebulaParticle(this.x, this.y, color));
        }
    }

    draw() { this.particles.forEach(p => p.draw()); }

    update() {
        this.particles.forEach(p => p.update());
        this.particles = this.particles.filter(p => !p.isFaded());
    }

    isEmpty() { return this.particles.length === 0; }
}

setInterval(() => {
    if (Math.random() < 0.2) {
        shootingStars.push(new ShootingStar());
    }
}, 2000);

function initializeSky() {
    stars = [];
    interactiveShapes = [];
    let constellationData = [];
    if (currentName) {
        const nameData = generateNameData(currentName);
        constellationData.push(...nameData);
    }
    if (currentZodiac) {
        const yPos = currentName ? 0.75 : 0.5;
        const zodiacData = generateZodiacData(currentZodiac, yPos);
        constellationData.push(...zodiacData);
    }
    initConstellationShapes(constellationData);
    initRandomStars();
}

function initConstellationShapes(constellationData) {
    let globalPointIndexOffset = 0;
    constellationData.forEach(data => {
        let shape = {name: data.name, stars: [], lines: [], center: {x: 0, y: 0}, opacity: 0};
        let totalX = 0, totalY = 0;
        data.stars.forEach(starData => {
            const x = starData.x * canvas.width;
            const y = starData.y * canvas.height;
            const star = new Star(x, y);
            star.radius = Math.random() * 2 + 1.5;
            star.originalRadius = star.radius;
            star.originalOpacity = Math.random() * 0.5 + 0.5;
            star.z = 1.1;
            shape.stars.push(star);
            stars.push(star);
            totalX += x;
            totalY += y;
        });
        data.lines.forEach(line => {
            shape.lines.push([line[0] + globalPointIndexOffset, line[1] + globalPointIndexOffset]);
        });
        globalPointIndexOffset += data.stars.length;
        if (shape.stars.length > 0) {
            shape.center.x = totalX / shape.stars.length;
            shape.center.y = totalY / shape.stars.length;
        }
        interactiveShapes.push(shape);
    });
}

function initRandomStars() {
    const numStars = Math.floor((canvas.width * canvas.height) / 5000);
    for (let i = 0; i < numStars; i++) {
        stars.push(new Star(Math.random() * canvas.width, Math.random() * canvas.height));
    }
}

canvas.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});
canvas.addEventListener('click', (event) => {
    nebulas.push(new Nebula(event.clientX, event.clientY));
});
window.addEventListener('resize', debounce(resizeCanvas, 250));

function updateActiveShape() {
    let closestShape = null;
    let minDistance = 250;
    const parallaxOffsetX = (mouseX - canvas.width / 2) * .05;
    const parallaxOffsetY = (mouseY - canvas.height / 2) * .05;
    interactiveShapes.forEach(shape => {
        if (!shape.center) return;
        const centerParallaxX = shape.center.x + parallaxOffsetX * 1.1;
        const centerParallaxY = shape.center.y + parallaxOffsetY * 1.1;
        const dist = Math.sqrt(Math.pow(centerParallaxX - mouseX, 2) + Math.pow(centerParallaxY - mouseY, 2));
        if (dist < minDistance) {
            minDistance = dist;
            closestShape = shape
        }
    });
    if (activeShape !== closestShape) {
        if (activeShape) {
            activeShape.stars.forEach(star => star.radius = star.originalRadius)
        }
        activeShape = closestShape
    }
}

function drawConstellations(offsetX, offsetY) {
    const allStarsForLines = [];
    interactiveShapes.forEach(s => allStarsForLines.push(...s.stars));
    interactiveShapes.forEach(shape => {
        if (shape === activeShape) {
            shape.opacity = Math.min(1, shape.opacity + .05)
        } else {
            shape.opacity = Math.max(0, shape.opacity - .05)
        }
        if (shape.opacity > 0) {
            ctx.strokeStyle = `rgba(255,255,255,${shape.opacity * .5})`;
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(255,255,255,${shape.opacity * .7})`;
            shape.lines.forEach(line => {
                const s1 = allStarsForLines[line[0]];
                const s2 = allStarsForLines[line[1]];
                if (!s1 || !s2) return;
                ctx.beginPath();
                ctx.moveTo(s1.x + offsetX * s1.z, s1.y + offsetY * s1.z);
                ctx.lineTo(s2.x + offsetX * s2.z, s2.y + offsetY * s2.z);
                ctx.stroke()
            });
            if (shape === activeShape) {
                const pulse = Math.sin(Date.now() * .006) * .8;
                shape.stars.forEach(star => {
                    star.radius = star.originalRadius + pulse
                });
                if (zodiacMap[shape.name]) {
                    const centerParallaxX = shape.center.x + offsetX * 1.1;
                    let bottomY = 0;
                    shape.stars.forEach(star => {
                        const yPos = star.y + offsetY * star.z;
                        if (yPos > bottomY) { bottomY = yPos; }
                    });
                    ctx.font = "18px 'Inter', sans-serif";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = `rgba(255, 255, 255, ${shape.opacity * 0.8})`;
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = `rgba(255, 255, 255, ${shape.opacity * 0.6})`;
                    ctx.fillText(shape.name, centerParallaxX, bottomY + 40);
                }
            }
        }
    })
}

function drawCursorAura() {
    const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 40);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 40, 0, Math.PI * 2);
    ctx.fill()
}

function animate() {
    const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height));
    gradient.addColorStop(0, '#1a2a45');
    gradient.addColorStop(1, '#0d1117');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const parallaxOffsetX = (mouseX - canvas.width / 2) * .05;
    const parallaxOffsetY = (mouseY - canvas.height / 2) * .05;
    drawCursorAura();
    stars.forEach(star => {
        star.update();
        star.draw(parallaxOffsetX, parallaxOffsetY)
    });
    ctx.shadowBlur = 0;
    nebulas.forEach((nebula, index) => {
        nebula.update();
        nebula.draw();
        if (nebula.isEmpty()) { nebulas.splice(index, 1) }
    });
    shootingStars.forEach((sStar, index) => {
        sStar.update();
        sStar.draw();
        if (sStar.isOffScreen()) { shootingStars.splice(index, 1) }
    });
    updateActiveShape();
    drawConstellations(parallaxOffsetX, parallaxOffsetY);
    ctx.shadowBlur = 0;
    requestAnimationFrame(animate)
}

window.onload = function () {
    resizeCanvas();
    animate();
};