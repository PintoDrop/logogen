const inquierer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const path = require("path");
let generateLogo = require("./lib/generateLogo");

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
    choices: ["circle", "triangle", "square"],
    // validate: function(input) {
    //   if(input.data = triangle) {
    //     return polygon;
    //   }else if (input.data = square){
    //   return rect;
    // }
    // }
    name: "shape",
  },
  {
    message: "What color would you like for the shape?",
    type: "input",
    name: "colorshp",
  },
];


function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function logoGen() {
inquierer
  .prompt(questions)
  .then((response) => {
    console.log("Generated logo.svg", response);
    return writeToFile("logo.svg", generateLogo({ ...response }));
    })
    // console.log("Generated logo.svg")
    .catch((err) => console.log(err));
}

logoGen()
