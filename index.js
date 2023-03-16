const inquierer = require("inquirer");
const jest = require("jest");

let questions = [
  {
    message: "What letters would you like to use? (Up to 3)",
    type: "input",
    name: "abrv",
    validate: function(input) {
      if (input.length > 3) {
        // console.log("must be 3 characters or less")
        return "must be 3 characters or less";
      }
      return true;
    }
  },
  {
    message: "What color would you like for the text?",
    type: "input",
    name: "colortxt",
  },
  {
    message: "What shape would you like the logo to be?",
    type: "list",
    choices: ["Circle", "Triangle", "Square"],
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
    console.log(response);
  })
  .catch((err) => console.log(err));
// }
