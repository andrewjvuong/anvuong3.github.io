
let draw = SVG('canvas').size(500, 500);
let petalRadius = 50;
let centerRadius = 70;
let stemWidth = 10;
let stemHeight = 100;

function petal(x,y){
    petal = draw.circle(petalRadius).fill('pink').move(x,y);
}

function stem(x,y){
    rect = draw.rect(stemWidth, stemHeight).fill('Green').move(x,y);
}

function center(x,y){
    center = draw.circle(centerRadius).fill('yellow').move(x,y);
}

function petals (a,b){
    center(a - ((centerRadius - 10)/2), b - ((centerRadius+10)/2));
    center(a - ((centerRadius - 10)/2), b);
    center(a - ((centerRadius - 10)/2), b + ((centerRadius+10)/2));
}

//center and petals are being mixed up and screwing up the flower, fix hat next time we meet


function flower(x,y){
    petal(x - ((centerRadius-10)/2) - ((petalRadius + 30)/2)), y - ((petalRadius + 10)/2);
    stem(x,y);
    petals(x,y);
    center(x - ((centerRadius - 10)/2), y - ((centerRadius+10)/2));

}



flower(200,200);


