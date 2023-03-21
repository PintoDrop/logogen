// test code with npm run test
const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("should render svg for a blue polygon element", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Square", () => {
  test("should render svg for a green rect element", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(`<rect width="100%" height="100%" fill="green" />`);
  })
})

describe("Circle", () => {
  test("should render svg for a red circle element", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
  })
})
