let particles = [];
let num = 10000;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();

    for (let i = 0; i < num; i++) {
        particles.push(createVector(random(width), random(height)));
    }
}

function draw() {
    colorMode(HSB);

    ellipse(windowWidth / 2, windowHeight / 2, 70, 70);
    
    let delta = map(mouseX, 0, windowWidth, 0, 255);
    fill(255 - delta, 95, 95, 100);
    stroke(255 - delta, 95, 95, 100);

    for (let i = 0; i < num; i++) {
        let p = particles[i];
        point(p.x, p.y);

        let dx = map(mouseX, 0, windowWidth, 2, 200);
        let dy = map(mouseY, 0, windowHeight, 2, 200);

        p.x += (noise(p.x / 200, p.y / 200, 300000000) - 0.54) * dx;
        p.y += (noise(p.x / 200, p.y / 200, 30000) - 0.5) * dy;
    }
}

function mousePressed() {
    let d = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
    if (d < 35) {
        background(0);

        for (let i = 0; i < num; i++) {
            particles[i] = createVector(random(width), random(height));
        }
    }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('screenshot', 'png');
  }
}