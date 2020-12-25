class Bin{
    
    constructor(x,y,width,height){

        var options = {
            isStatic:true
        }

        this.bin = Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.bin)
    }

    display(){
        push()
        rectMode(CENTER)
        rect(this.bin.position.x,this.bin.position.y,this.width,this.height)
        pop();
    }

}