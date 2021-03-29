const canvas = document.getElementById('canvas');

/* the buttons at the bottom of the canvas */
const decrBtn = document.getElementById('decr');
const lineWidthEl = document.getElementById('lineWidth');
const incrBtn = document.getElementById('incr');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

/* initialize global variables */
let radius = 10;           /* this is the circle radius and the line width */
let isPressed = false;
let color = 'black';
let currPosX, currPosY; /* position of the mouse; they start out undefined */

/* set up the event listeners */
canvas.addEventListener('mousedown', (e) => {
   isPressed = true;

   currPosX = e.offsetX;
   currPosY = e.offsetY;

   /* I think we want to draw a circle when the mouse is just clicked */
   /* not just when the mouse is moved */
   /* I changed this from the original program */
   drawCircle(currPosX, currPosY);

   // console.log(isPressed, currPosX, currPosY);
});

canvas.addEventListener('mouseup', (e) => {
   isPressed = false;

   currPosX = undefined;
   currPosY = undefined;

   // console.log(isPressed, currPosX, currPosY);
}); /* end mouseup eventListener */

canvas.addEventListener('mousemove', (e) => {
   if( isPressed) {  /* we only want to do this when the mouse is held down */
      const x2 = e.offsetX;
      const y2 = e.offsetY;

      drawCircle(x2, y2); /* but this can't keep up with fast movement, so draw line also */
      drawLine(currPosX, currPosY, x2, y2);

      /* we need to update the current position */
      currPosX = x2;
      currPosY = y2;
      // console.log(offsetX, offsetY);
   } /* end isPressed */

   // console.log(isPressed, currPosX, currPosY);
}); /* end mousemove eventListener */

/* x, y define center of circle */
/* radius is the radius */
/* the next two are start angle and end angle in RADIANS */
/* 2*PI is 360 degrees */
function drawCircle( x, y ) {
   ctx.beginPath();
   ctx.arc(x, y, radius, 0, Math.PI * 2);
   ctx.fillStyle = color;
   ctx.fill();
} /* end drawCircle() */

/* draw lines in between the circles to fill in the drawing */
/* move to the first coordinate pair, draw to the second */
function drawLine(moveToX, moveToY, lineToX, lineToY) {
   ctx.beginPath();
   ctx.moveTo(moveToX, moveToY);
   ctx.lineTo(lineToX, lineToY);
   ctx.strokeStyle = color;

   /* we want diameter so line width matches circle */
   ctx.lineWidth = radius * 2;
   ctx.stroke();                /* actually draw the line */
}  /* end drawLine() */

/* update the value on screen that the +/- control */
function updateRadiusOnScreen() {
   lineWidthEl.innerText = radius;
} /* end updateRadiusOnScreen */

/* the decrease button */
decrBtn.addEventListener('click', () => {
   radius -= 5;

   /* limit it to 5 */
   if (radius < 5) {
      radius = 5;
   }

   updateRadiusOnScreen();
})

/* the increase button */
incrBtn.addEventListener('click', () => {
   radius += 5;

   /* limit it to 50 */
   if (radius > 50) {
      radius = 50;
   }

   updateRadiusOnScreen();
})

/* the color button */
/* (e) = event object (the data about the event)*/
colorEl.addEventListener('change', (e) => 
                     color = e.target.value);

/* the clear button */
clearEl.addEventListener('click', () => 
            ctx.clearRect(0, 0, canvas.width, canvas.height));






/*------CHANGING SQUARES CLICKS------*/
   /*there is definately a more concise way to do this, but will figure out at another time*/
function mouseDown() {document.getElementById("square-grid-item1").style.backgroundColor = "#f6f5eb";}
function mouseUp() {document.getElementById("square-grid-item1").style.backgroundColor = "#f6f5eb";}







