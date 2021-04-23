const canvas1 = document.getElementById('canvas1');

/* clear canvas button */
const clearEl1 = document.getElementById('clear1');

const ctx1 = canvas1.getContext('2d');


/* initialize global variables */
let radius1 = 8;           /* this is the circle radius and the line width */
let isPressed1 = true;
let color1 = '#D1574F';
let currPosX1, currPosY1; /* position of the mouse; they start out undefined */

/* set up the event listeners */
canvas1.addEventListener('mousedown', (e) => {
   isPressed1 = true;

   currPosX1 = e.offsetX;
   currPosY1 = e.offsetY;

   /* I think we want to draw a circle when the mouse is just clicked */
   /* not just when the mouse is moved */
   /* I changed this from the original program */
   drawCircle1(currPosX1, currPosY1);

   // console.log(isPressed, currPosX, currPosY);
});

canvas1.addEventListener('mouseup', (e) => {
   isPressed1 = false;

   currPosX1 = undefined;
   currPosY1 = undefined;

   // console.log(isPressed, currPosX, currPosY);
}); /* end mouseup eventListener */

canvas1.addEventListener('mousemove', (e) => {
   if( isPressed1) {  /* we only want to do this when the mouse is held down */
      const x21 = e.offsetX;
      const y21 = e.offsetY;

      drawCircle1(x21, y21); /* but this can't keep up with fast movement, so draw line also */
      /*drawLine1(currPosX1, currPosY1, x21, y21);*/ /*if take this line away, it will draw dots*/

      /* we need to update the current position */
      currPosX1 = x21;
      currPosY1 = y21;

      // console.log(offsetX, offsetY);
   } /* end isPressed */

   // console.log(isPressed, currPosX, currPosY);
}); /* end mousemove eventListener */


/* x, y define center of circle */
/* radius is the radius */
/* the next two are start angle and end angle in RADIANS */
/* 2*PI is 360 degrees */
function drawCircle1(x1, y1) {
   ctx1.beginPath();
   ctx1.arc(x1, y1, radius1, 0, Math.PI * 2);
   ctx1.fillStyle = color1;
   ctx1.fill();
} /* end drawCircle() */

/* draw lines in between the circles to fill in the drawing */
/* move to the first coordinate pair, draw to the second */
function drawLine1(moveToX1, moveToY1, lineToX1, lineToY1) {
   ctx1.beginPath();
   ctx1.moveTo(moveToX1, moveToY1);
   ctx1.lineTo(lineToX1, lineToY1);
   ctx1.strokeStyle = color1;

   /* we want diameter so line width matches circle */
   ctx1.lineWidth = radius1 * 2;
   ctx1.stroke();                /* actually draw the line */
}  /* end drawLine() */

/* the clear button */
clearEl1.addEventListener('click', () => 
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height));




/*-----------circle 2 canvas-------------------------------*/
            const canvas2 = document.getElementById('canvas2');

            /* clear canvas button */
            const clearEl2 = document.getElementById('clear2');
            
            const ctx2 = canvas2.getContext('2d');
            
            /* initialize global variables */
            let radius2 = 3;           /* this is the circle radius and the line width */
            let isPressed2 = true;
            let color2 = '#0d2d53';
            let currPosX2, currPosY2; /* position of the mouse; they start out undefined */
            
            /* set up the event listeners */
            canvas2.addEventListener('mousedown', (e) => {
               isPressed2 = true;
            
               currPosX2 = e.offsetX;
               currPosY2 = e.offsetY;
            
               /* I think we want to draw a circle when the mouse is just clicked */
               /* not just when the mouse is moved */
               /* I changed this from the original program */
               drawCircle2(currPosX2, currPosY2);
            
               // console.log(isPressed, currPosX, currPosY);
            });
            
            canvas2.addEventListener('mouseup', (e) => {
               isPressed2 = false;
            
               currPosX2 = undefined;
               currPosY2 = undefined;
            
               // console.log(isPressed, currPosX, currPosY);
            }); /* end mouseup eventListener */
            
            canvas2.addEventListener('mousemove', (e) => {
               if( isPressed2) {  /* we only want to do this when the mouse is held down */
                  const x22 = e.offsetX;
                  const y22 = e.offsetY;
            
                  drawCircle2(x22, y22); /* but this can't keep up with fast movement, so draw line also */
                  drawLine2(currPosX2, currPosY2, x22, y22);
            
                  /* we need to update the current position */
                  currPosX2 = x22;
                  currPosY2 = y22;
                  // console.log(offsetX, offsetY);
               } /* end isPressed */
            
               // console.log(isPressed, currPosX, currPosY);
            }); /* end mousemove eventListener */
            
            /* x, y define center of circle */
            /* radius is the radius */
            /* the next two are start angle and end angle in RADIANS */
            /* 2*PI is 360 degrees */
            function drawCircle2(x2, y2) {
               ctx2.beginPath();
               ctx2.arc(x2, y2, radius2, 0, Math.PI * 2);
               ctx2.fillStyle = color2;
               ctx2.fill();
            } /* end drawCircle() */
            
            /* draw lines in between the circles to fill in the drawing */
            /* move to the first coordinate pair, draw to the second */
            function drawLine2(moveToX2, moveToY2, lineToX2, lineToY2) {
               ctx2.beginPath();
               ctx2.moveTo(moveToX2, moveToY2);
               ctx2.lineTo(lineToX2, lineToY2);
               ctx2.strokeStyle = color2;
            
               /* we want diameter so line width matches circle */
               ctx2.lineWidth = radius2 * 2;
               ctx2.stroke();                /* actually draw the line */
            }  /* end drawLine() */
            
            /* the clear button */
            clearEl2.addEventListener('click', () => 
                        ctx2.clearRect(0, 0, canvas2.width, canvas2.height));




/*-----------circle 3 canvas-------------------------------*/
const canvas3 = document.getElementById('canvas3');
const clearEl3 = document.getElementById('clear3');
const ctx3 = canvas3.getContext('2d');

/* initialize global variables */
let radius3 = 3;
let isPressed3 = true;
let color3 = '#0d2d53';
let currPosX3, currPosY3;

/* set up the event listeners */
canvas3.addEventListener('mousedown', (e) => {
   isPressed3 = true;

   currPosX3 = e.offsetX;
   currPosY3 = e.offsetY;

   drawCircle3(currPosX3, currPosY3);
   drawLine3(currPosX3, currPosY3, x23, y23); /*if take this line away, it will draw dots*/
});

canvas3.addEventListener('mouseup', (e) => {
   isPressed3 = false;

   currPosX3 = undefined;
   currPosY3 = undefined;
});

canvas3.addEventListener('mousemove', (e) => {
   if( isPressed3) { 
      const x23 = e.offsetX;
      const y23 = e.offsetY;

      drawCircle3(x23, y23);
      drawLine3(currPosX3, currPosY3, x23, y23);

      currPosX3 = x23;
      currPosY3 = y23;
   }
});

function drawCircle3(x3, y3) {
   ctx3.beginPath();
   ctx3.arc(x3, y3, radius3, 0, Math.PI * 2);
   ctx3.fillStyle = color3;
   ctx3.fill();
}

function drawLine3(moveToX3, moveToY3, lineToX3, lineToY3) {
   ctx3.beginPath();
   ctx3.moveTo(moveToX3, moveToY3);
   ctx3.lineTo(lineToX3, lineToY3);
   ctx3.strokeStyle = color3;

   ctx3.lineWidth = radius3 * 2;
   ctx3.stroke();                
} 

clearEl3.addEventListener('click', () => 
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height));






/*NOT IN USE YET*/
/*-----------circle 4 canvas-------------------------------*/
const canvas4 = document.getElementById('canvas4');
const clearEl4 = document.getElementById('clear4');
const ctx4 = canvas4.getContext('2d');

/* initialize global variables */
let radius4 = 3;
let isPressed4 = true;
let color4 = '#0d2d53';
let currPosX4, currPosY4;

/* set up the event listeners */
canvas4.addEventListener('mousedown', (e) => {
   isPressed4 = true;

   currPosX4 = e.offsetX;
   currPosY4 = e.offsetY;

   drawCircle4(currPosX4, currPosY4);
   drawLine4(currPosX4, currPosY4, x24, y24); /*if take this line away, it will draw dots*/
});

canvas4.addEventListener('mouseup', (e) => {
   isPressed4 = false;

   currPosX4 = undefined;
   currPosY4 = undefined;
});

canvas4.addEventListener('mousemove', (e) => {
   if( isPressed4) { 
      const x24 = e.offsetX;
      const y24 = e.offsetY;

      drawCircle4(x24, y24);
      drawLine4(currPosX4, currPosY4, x24, y24);

      currPosX4 = x24;
      currPosY4 = y24;
   }
});

function drawCircle4(x4, y4) {
   ctx4.beginPath();
   ctx4.arc(x4, y4, radius4, 0, Math.PI * 2);
   ctx4.fillStyle = color4;
   ctx4.fill();
}

function drawLine4(moveToX4, moveToY4, lineToX4, lineToY4) {
   ctx4.beginPath();
   ctx4.moveTo(moveToX4, moveToY4);
   ctx4.lineTo(lineToX4, lineToY4);
   ctx4.strokeStyle = color4;

   ctx4.lineWidth = radius4 * 2;
   ctx4.stroke();                
} 

clearEl4.addEventListener('click', () => 
            ctx4.clearRect(0, 0, canvas4.width, canvas4.height));








