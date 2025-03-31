let x, y;
let xoff = 0.0;
let yoff = 1000;
let hueOffset = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100); // HSB 모드: (360도 색상, 채도, 밝기, 알파값)
    background(0, 0, 0, 0);
    noStroke();

    x = width / 2;
    y = height / 2;
}

function draw() {
    if (mouseIsPressed) {
    } else {
        background(0, 0, 0, 30);
    }
      
    let targetX = mouseX;
    let targetY = mouseY;

    let noiseX = (noise(xoff) - 0.5) * 400;
    let noiseY = (noise(yoff) - 0.5) * 400;

    x = lerp(x, targetX + noiseX, 0.05);
    y = lerp(y, targetY + noiseY, 0.05);

    xoff += 0.01;
    yoff += 0.01;

    hueOffset = (hueOffset + 1) % 360;

    drawGradient(x, y);
}

function drawGradient(x, y) {
    let radius = 45;
    let h = hueOffset;
    for (let r = radius; r > 0; --r) {
        fill(h, 90, 90);
        ellipse(x, y, r, r);
        h = (h + 1) % 360;
    }
}

function keyPressed() {
    if (key === 's' || key === 'S') {
      saveCanvas('myCanvas', 'png');
    }
  }