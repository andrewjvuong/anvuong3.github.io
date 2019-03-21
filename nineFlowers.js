
let draw = SVG('canvas').size(600, 600);
let petalRadius = 50;
let centerRadius = 70;
let stemWidth = 10;
let stemHeight = 100;

let beeRadius = 30;





function petal(x,y){
    draw.circle(petalRadius).fill('pink').move(x,y);
}

function stem(x,y){
    draw.rect(stemWidth, stemHeight).fill('Green').move(x,y);
}

function center(x,y){
    let center = draw.circle(centerRadius).fill('yellow').move(x,y);
}

function petals(x,y){
    petal(x - ((centerRadius - 10)/2), y - ((centerRadius+10)/2));
    petal(x - ((centerRadius - 10)/2), y);
    petal(x - ((centerRadius - 10)/2), y + ((centerRadius+10)/2));
}

//center and petals are being mixed up and screwing up the flower, fix hat next time we meet


function flower(x,y){
    //petal(x - ((centerRadius-10)/2) - ((petalRadius + //30)/2)), y - ((petalRadius + 10)/2);
    var flower = draw.group()
    flower.add(
        draw.rect(stemWidth, stemHeight).fill('Green').move(x,y),
    );
    console.log('drew stem, about to draw first petal');
    flower.add(
        draw.circle(petalRadius).fill('pink').move(x+9,y),
    );
    flower.add(
        draw.circle(petalRadius).fill('pink').move(x+30,y-40),
    );
    flower.add(
        draw.circle(petalRadius).fill('pink').move(x+10,y-75),
    );
    flower.add(
        draw.circle(petalRadius).fill('pink').move(x-35,y-80),
    );
    flower.add(
        draw.circle(petalRadius).fill('pink').move(x-60,y-40),
    );
    flower.add(
        draw.circle(petalRadius).fill('pink').move(x-50,y),
    );
    flower.add(
        draw.circle(centerRadius).fill('yellow').move(x - ((centerRadius - 10)/2), y - ((centerRadius+10)/2)),
        
    );
    console.log('finished drawing flower'),

    flower.click(function(event) {
        console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
        bee.animate().move(event.clientX, event.clientY)
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

function beeBody(x,y){

    var bee = draw.group()
    bee.add(
        draw.circle(beeRadius).fill('yellow').move(x+30,y),
    );
    bee.add(
        draw.ellipse(50,30).fill('yellow').move(x,y),
    );
    bee.add(
        draw.circle(5).fill('black').move(x+49,y+7),
    );
    bee.add(
        draw.rect(5, 30).fill('black').move(x+20,y),
    );
    bee.add(
        draw.rect(5, 22).fill('black').move(x+7,y+4),
    );
    bee.add(
        draw.rect(5, 22).fill('black').move(x+32,y+4),
    );
    bee.add(
        draw.rect(5, 15).fill('black').move(x+43,y-13),
    );
    bee.add(
        draw.rect(5, 15).fill('black').move(x+50,y-13),
    );
    bee.add(
        draw.ellipse(30,40).fill('gray').move(x+10,y-35)
    );
    bee.click(function(){
        console.log('Bee is being clicked')
    });

    return bee;
}

bee = beeBody(2,35);
