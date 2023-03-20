function render(shape) {
    if (shape === "triangle") {
      return `polygon points="150, 18 244, 182 56, 180"`;
    } else if (shape === "square") {
      return `rect width="100%" height="100%"`;
    } else if (shape === "circle") {
      return `circle cx="150" cy="100" r="80"`;
    }
}

function generateLogo(data) {
  return `

  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Logo Generator</title>
</head>
<body>
  
  <svg version="1.1" width="300" height="200">
  <${render(data.shape)}fill="${data.colorshp}"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.colortxt}">${data.abrv}</text>

  </svg>
</body>
</html>
  
  `;
}

module.exports = generateLogo;


// <svg version="1.1" width="300" height="200">
  
//   < ${data.shape} cx="150" cy="100" r="80" fill="${data.colorshp}" />
  
//   < ${data.shape} width="100%" height="100%" fill="${data.colorshp}" />
  
//   < ${data.shape} points ="150, 18 244, 182 56, 180" fill="${data.colorshp}"/>

//   < ${data.shape} fill="${data.colorshp}"/>
  
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
//     data.colortxt
//   }">${data.abrv}</text>
  
//   </svg>
// function renderShape(form) {
//   // let shape = shapes;

  // if (shape === "triangle") {
  //     return `polygon points="150, 18 244, 182 56, 180"`;
  //   } else if (shape === "square") {
  //       return `rect width="100%" height="100%"`;
  //     } else if (shape === "circle") {
  //         return `circle cx="150" cy="100" r="80"`;
  //       }

        // return shape;
      // }
// <${renderShape(data.shape)} fill="${data.colorshp}"/>



// Test code:
// circle works, square doesn't work unless it 'rect' is listed, triangle does not work
// triangle = <polygon points="150, 18 244, 182 56, 182"/>
// square = rect
// If statement so choosing square = rect and triangle = polygon points

// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill="red" />

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>
