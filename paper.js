class Paper {  
    constructor(x, y, radius){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
        }
        this.paper = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image=loadImage("paper.png")
	    World.add(world, this.paper);
       
   }
   display(){
    push();
    imageMode(RADIUS);
    image(this.image,this.paper.position.x, this.paper.position.y, this.radius, this.radius);
    pop();
   }
}
