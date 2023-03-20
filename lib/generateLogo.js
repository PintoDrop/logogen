// function renderShape(form) {
//   // let shape = "";

//   if (shape === "triangle") {
  //     shape = `polygon points="150, 18 244, 182 56, 180"`;
  //   } else if (shape === "square") {
    //     shape = `rect width="100%" height="100%"`;
    //   } else if (shape === "circle") {
      //     shape = `circle cx="150" cy="100" r="80"`;
      //   }
      
      //   return shape;
      // }
      // <${renderShape(data.shape)} fill="${data.colorshp}"/>

function generateLogo(data) {
  return `
  
  ${data.abrv}

  ${data.colortxt}

  ${data.shape}

  ${data.colorshp}

  <svg version="1.1" width="300" height="200">

  <${data.shape} cx="150" cy="100" r="80" fill="${data.colorshp}" />

  <${data.shape} width="100%" height="100%" fill="${data.colorshp}" />

  <${data.shape} points ="150, 18 244, 182 56, 180" fill="${data.colorshp}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.colortxt}">${data.abrv}</text>

</svg>
`;
}

module.exports = generateLogo;

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
