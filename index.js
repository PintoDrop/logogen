let inquierer = require("inquirer");
let jest = require("jest");


let questions = [
  {
    message: "What letters would you like to use? (Up to 3)",
    type: "input",
    name: "abrv",
  },
  {
    message: "What color would you like for the text?",
    type: "list",
    name: "colortxt",
  },
  {
    message: "What shape would you like the logo to be?",
    type: "input",
    choices: ["Circle", "Triangle", "Square" ],
    name: "shape",
  },
  {
    message: "What color would you like for the shape?",
    type: "input",
    name: "colorshp",
  },
];

// function logoGen() {
  inquierer
    .prompt(questions)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => console.log(err));
// }