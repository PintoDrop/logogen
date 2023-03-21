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



// <${renderShape(data.shape)} fill="${data.colorshp}"/>

