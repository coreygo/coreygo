/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */

// We'll ride the spiral to the end and may just go where no one's been
// Spiral out, keep going ...

export default function sketch(p) {
  const phi = 1.6180339;
  p.state = [];
  p.dispatch = () => {};

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noFill();
    p.smooth();
  };

  p.draw = () => {
    p.background(255);
    p.stroke(10, 10);
    p.spiral(p.width / 2, p.height / 2, 0, 1000);
  };

  p.spiral = (x, y, origin, lines) => {
    for (let i = 0; i < lines; i += 1) {
      p.translate(x, y);
      p.rotate(p.radians(p.noise((p.frameCount - i) * 0.001 * phi) * 10 + 100));
      p.line(origin, 0, 0, 0);
      p.translate(-x, -y);
      x += origin += phi;
    }
  };
}
