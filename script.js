const canvas1 = document.getElementById('canvas1');

/* clear canvas button */
const clearEl1 = document.getElementById('clear1');

const ctx1 = canvas1.getContext('2d');


/* initialize global variables */
let radius1 = 3;           /* this is the circle radius and the line width */
let isPressed1 = true;
let color1 = '#0d2d53';
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
      drawLine1(currPosX1, currPosY1, x21, y21); /*if take this line away, it will draw dots*/

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





   /*---------circle 2 canvas---------------------*/
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























// /*-----circle 2 canvas-------------------------------------*/
// const canvas2 = document.getElementById('canvas2');

// /* clear canvas button */
// const clearEl2 = document.getElementById('clear2');

// const ctx2 = canvas2.getContext('2d');

// /* initialize global variables */
// let radius2 = 3;           /* this is the circle radius and the line width */
// let isPressed2 = true;
// let color2 = '#0d2d53';
// let currPosX2, currPosY2; /* position of the mouse; they start out undefined */

// /* set up the event listeners */
// canvas2.addEventListener('mousedown', (e) => {
//    isPressed2 = true;

//    currPosX2 = e.offsetX;
//    currPosY2 = e.offsetY;

//    /* I think we want to draw a circle when the mouse is just clicked */
//    /* not just when the mouse is moved */
//    /* I changed this from the original program */
//    drawCircle(currPosX2, currPosY2);

//    // console.log(isPressed, currPosX, currPosY);
// });

// canvas2.addEventListener('mouseup', (e) => {
//    isPressed2 = false;

//    currPosX2 = undefined;
//    currPosY2 = undefined;

//    // console.log(isPressed, currPosX, currPosY);
// }); /* end mouseup eventListener */

// canvas2.addEventListener('mousemove', (e) => {
//    if( isPressed2) {  /* we only want to do this when the mouse is held down */
//       const x22 = e.offsetX;
//       const y22 = e.offsetY;

//       drawCircle(x22, y22); /* but this can't keep up with fast movement, so draw line also */
//       drawLine(currPosX2, currPosY2, x22, y22);

//       /* we need to update the current position */
//       currPosX2 = x22;
//       currPosY2 = y22;
//       // console.log(offsetX, offsetY);
//    } /* end isPressed */

//    // console.log(isPressed, currPosX, currPosY);
// }); /* end mousemove eventListener */

// /* x, y define center of circle */
// /* radius is the radius */
// /* the next two are start angle and end angle in RADIANS */
// /* 2*PI is 360 degrees */
// function drawCircle(x, y) {
//    ctx2.beginPath();
//    ctx2.arc(x, y, radius2, 0, Math.PI * 2);
//    ctx2.fillStyle = color2;
//    ctx2.fill();
// } /* end drawCircle() */

// /* draw lines in between the circles to fill in the drawing */
// /* move to the first coordinate pair, draw to the second */
// function drawLine(moveToX, moveToY, lineToX, lineToY) {
//    ctx2.beginPath();
//    ctx2.moveTo(moveToX, moveToY);
//    ctx2.lineTo(lineToX, lineToY);
//    ctx2.strokeStyle = color2;

//    /* we want diameter so line width matches circle */
//    ctx2.lineWidth = radius2 * 2;
//    ctx2.stroke();                /* actually draw the line */
// }  /* end drawLine() */

// /* the clear button */
// clearEl2.addEventListener('click', () => 
//             ctx2.clearRect(0, 0, canvas2.width, canvas2.height));

