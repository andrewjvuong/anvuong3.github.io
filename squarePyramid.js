const canvasWidth = 700;
const canvasHeight = 500;
const blockWidth = 50;
const blockHeight = 25;
let rowNumb = window.prompt("Give me the number of rows per Pyramid");;

let draw = SVG('canvas').size(canvasWidth, canvasHeight);


const WHITE = '#fff';
const BLACK = '#000';

for (let i = 0; i < rowNumb; i++){
    let rowY = i * blockHeight;

    let blockPerRow = i + 1;

    for(let j = 0; j < blockPerRow; j++) {
        let blockX = j * blockWidth;

        let rect = {
            element: draw.rect(blockWidth, blockHeight),
            color: WHITE
        };
        rect.element.move((canvasWidth/2) + (blockX - rowY) , canvasHeight/2 + rowY);
        rect.element.stroke(BLACK);
        rect.element.fill('blanchedAlmond')

        let rect2 = {
            element: draw.rect(blockWidth, blockHeight),
            color: WHITE
        };
        rect2.element.move((canvasWidth/2) + (blockX - rowY) , canvasHeight/2 - rowY);
        rect2.element.stroke(BLACK);
        rect2.element.fill('blanchedAlmond')
    }
}