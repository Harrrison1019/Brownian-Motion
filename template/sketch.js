	var particlesize;//var for particle size

    var x,y;     //x and y

    var stepslider;//slider that goes from 1 to 10

    var myspan; 

function setup(){
createElement('h3','Brownian Motion ');
//text "brownian motion"
//h3=size?

createCanvas(600,400);

background(255);

stroke('black');
//line
noFill();
//don't fill
rect(30,20,600-60,400-60); 
 //dimension

fill('black');
x=300;
y=200;
particlesize=2; 
//radius that is 2 pixels long
ellipse(x,y,particlesize);
//create ellipse which starts at 300,200

createElement('br');
myspan=createSpan('Step size: ');
//myspan gets the value from createspan
//"stepsize"  is the value that is changed by the slider

stepslider=createSlider(1,10,3);
//the sliders greatest number is 10 
//the smallest number is 1
//it begins at 3

stepslider.position(100,465); 
//position of the slider

createP('Step size is the max distance the particle can cover in any direction.');

}

function draw(){
    var stepSize=stepslider.value();
    mySpan.html('Step size:'  ,('+ stepSize +') )
}