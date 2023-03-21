
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

// function renderShape(form) {
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    // if (response=square)
    return `<rect width="100%" height="100%" fill="${this.color}" />`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}
// }

// module.exports = Shapes;

module.exports = { Triangle, Square, Circle };
