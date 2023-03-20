// const newShape = new Circle(`circle cx="150" cy="100" r="80"`);

// const newShape = new Triangle(`polygon points="150, 18 244, 182 56, 180"`);

// const newShape = new Square(`rect width="100%" height="100%"`);

const Shapes = require("../generateLogo.js");
// const newShapes = new Triangle

function renderShape(form) {
  class Triangle {
    triangle() {
      return `polygon points="150, 18 244, 182 56, 180"`;
    }
  }
  class Square {
    square() {
      // if (response=square)
      return `rect width="100%" height="100%"`;
    }
  }
  class Circle {
    circle() {
      return `circle cx="150" cy="100" r="80"`;
    }
  }
}

module.exports = Shapes;

// class Triangle {
//   constructor(shape) {
//     this.shape = triangle
//   }
// }

// class Square {
//   constructor(shape){
//     this.shape = square
//   }
// }

// class Circle {
//   constructor(shape) {
//     this.shape = circle;
//   }
// }

// }
