const canvasWidth = 700;
const canvasHeight = 500;
const blockWidth = 50;
const blockHeight = 25;
const rowNumb = 5;
const blockNumb = 10

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

        rect.element.move(blockX, rowY);
        rect.element.stroke(BLACK);
        rect.element.fill('blanchedAlmond')

    }
}