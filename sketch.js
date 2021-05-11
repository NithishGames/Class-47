var drawing = []
var currentPath = []
var draw = false






function setup() {
  createCanvas(1000, 600);

database = firebase.database ();
canvas.mousePressed(start);
canvas.mouseReleased(end);

form = new Form ();
form.display();


}

function draw() {
  background("White");

  
  
  
}
