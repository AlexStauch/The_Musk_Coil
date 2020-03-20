let frames;
let i = 0;

function setup(){
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
	angleMode(RADIANS);	
}

function windowResized(){
	createCanvas(windowWidth, windowHeight);
}


function draw(){
	i++;
	compute(i);
}

function Collatz(n){
    if (n%2 == 0){
      return n/2;
    }
    else{
      return (n*3+1)/2;
    }
}

function compute(i){
	background(0);
	let n = i;
	let length = createVector(10, 60);
	let angle = atan2(mouseY - height/2, mouseX - width/2);
	push();
	resetMatrix();
	translate(width/2, height/1.5);
	do{
		n = Collatz(n);
		if( n % 2 == 0){
			rotate(angle);
		}else{
			rotate(-angle);
		} 
		strokeWeight(random(0, 5));
		stroke(random(150, 185), random(165, 200), random(115, 150));
		line(0, 0, 0, - length.y);
		translate(0, - length.y);
	} while (n != 1);
}
