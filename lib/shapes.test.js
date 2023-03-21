
// test code with npm run test
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual(
  '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
);


const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual(`rect width="100%" height="100%"`);


const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual(`circle cx="150" cy="100" r="80"`);