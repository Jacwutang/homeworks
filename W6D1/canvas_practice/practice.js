document.addEventListener("DOMContentLoaded", function(){
  const canvas = getElementById("mycanvas";
  canvas.height = 500;
  canvas.width = 500;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "purple";
  ctx.fillRect(0,0,500,500);

  //nothing displaying.

)
});

// Pick a color (e.g. 'red', rgb(255,255,255), etc. ) to set as the fillStyle attribute for ctx
// Call fillRect with the appropriate dimensions to draw the rectangle on the canvas
// Check that everything's working by executing open index.html in your terminal
//
//
// To draw the circle:
//
// Invoke beginPath with no arguments
// Invoke arc with the appropriate dimensions to draw a circle
// Pick a color to set as strokeStyle
// Set the lineWidth attribute to some integer
// Invoke stroke with no arguments
// Open index.html in your browser to view it
// To fill in the circle:
//
// Pick a color to set as fillStyle
// Invoke fill with no arguments
// Open index.html in your browser to view it
