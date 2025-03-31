let inc = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // 마우스 위치에 기반하여 노이즈 값 생성
  let n = noise(mouseX * 0.01, mouseY * 0.01);
  // 노이즈 값에 따라 원의 크기를 변화시킵니다.
  let diameter = map(n, 0, 1, 50, 200);
  ellipse(width / 2, height / 2, diameter);
}
