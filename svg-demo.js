console.log('loaded svg-demo.js');

let draw = SVG('drawing').size(480, 480);
let rectWidth = 200;
let rectHeight = 200;
let rect = draw.rect(rectWidth, rectHeight).fill('pink');

let moveDistance = 50;
let x = 0;
let y = 0;
let rectDirection = 'right';

function moveRectangle(direction) {

    if (x >= 480 - rectWidth) {
        // normal case = we want to move down and to the right
        console.log('moving down and to the right');
        rectDirection = 'left';
    } 

    if (x <= 0){
        rectDirection = 'right';
    }

    if (rectDirection == 'right'){
        x = x + moveDistance;
        y = y + moveDistance;
        rect.move(x,y);
    } else if (rectDirection == 'left'){
        x = x - moveDistance;
        y = y - moveDistance;
        rect.move(x,y);
    } else{
        console.error('Error moving rectangle, the direction was ' + rectDirection + ".")
    }
}

document.getElementById("move-rectangle").onclick = function() {
    console.log('moving rectangle');

    moveRectangle(moveDistance);

}

