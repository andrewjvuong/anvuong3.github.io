
let draw = SVG('canvas').size(600, 600);
let petalRadius = 50;
let centerRadius = 70;
let stemWidth = 10;
let stemHeight = 100;

function petal(x,y){
    draw.circle(petalRadius).fill('pink').move(x,y);
}

function stem(x,y){
    draw.rect(stemWidth, stemHeight).fill('Green').move(x,y);
}

function center(x,y){
    let center = draw.circle(centerRadius).fill('yellow').move(x,y);
    center.click(function() {
        console.log('The center is being clicked')
    })
}

function petals(x,y){
    petal(x - ((centerRadius - 10)/2), y - ((centerRadius+10)/2));
    petal(x - ((centerRadius - 10)/2), y);
    petal(x - ((centerRadius - 10)/2), y + ((centerRadius+10)/2));
}

//center and petals are being mixed up and screwing up the flower, fix hat next time we meet


function flower(x,y){
    //petal(x - ((centerRadius-10)/2) - ((petalRadius + //30)/2)), y - ((petalRadius + 10)/2);
    var group = draw.group();
    group.add(
        stem(x,y),
        console.log('drew stem, about to draw first petal'),
        petal(x+9,y),
        draw.circle(petalRadius).fill('pink').move(x+30,y-40),
        draw.circle(petalRadius).fill('pink').move(x+10,y-75),
        draw.circle(petalRadius).fill('pink').move(x-35,y-80),
        draw.circle(petalRadius).fill('pink').move(x-60,y-40),
        draw.circle(petalRadius).fill('pink').move(x-50,y),
        center(x - ((centerRadius - 10)/2), y - ((centerRadius+10)/2)),
        console.log('finished drawing flower'),
    );

    group.click(function() {
        console.log('The flower is being clicked')
    });
}


/*function flower(x,y){
    petal = draw.circle(petalRadius).fill('pink').move(x - ((centerRadius-10)/2) - ((petalRadius + 30)/2)), y - ((petalRadius + 10)/2);
    rect = draw.rect(stemWidth, stemHeight).fill('Green').move(x,y);
    center = draw.circle(centerRadius).fill('yellow').move(x,y);
    
}
*/

function flowerGrid(x,y){
    console.log('drawing flower 1');
    flower(x+60,y+80);
    console.log('drawing flower 2');
    flower(x+240, y+80);

    flower(x+400, y+80);

    flower(x+60,y+260);

    flower(x+60,y+420);

    flower(x+240,y+260);

    flower(x+400, y+260);

    flower(x+400, y+420);

    flower(x+240, y+420);

}

flowerGrid(100,100);


let beeRadius = 30;

function beeBody(x,y){

    var group = draw.group();
    group.add(
        draw.circle(beeRadius).fill('yellow').move(x+30,y),
        draw.ellipse(50,30).fill('yellow').move(x,y),
        draw.circle(5).fill('black').move(x+49,y+7),
        draw.rect(5, 30).fill('black').move(x+20,y),
        draw.rect(5, 22).fill('black').move(x+7,y+4),
        draw.rect(5, 22).fill('black').move(x+32,y+4),
        draw.rect(5, 15).fill('black').move(x+43,y-13),
        draw.rect(5, 15).fill('black').move(x+50,y-13),
        draw.ellipse(30,40).fill('gray').move(x+10,y-35)
    );
}

beeBody(2,35);




