


function generateLogo(data) {
  
  return `${data.abrv}

  ${data.colortxt}

  ${data.shape}

  ${data.colorshp}

  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${data.shape} width="100%" height="100%" fill="${data.colorshp}" />

  <${data.shape} cx="150" cy="100" r="80" fill="${data.colorshp}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.colortxt}">${data.abrv}</text>

</svg>
`;
}

module.exports = generateLogo;


// Test code:
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill="red" />

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>