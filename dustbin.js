class Dustbin{

    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            'restitution':0,
            'friction':0.5,
            'density':1.0,
        }

     this.body=Bodies.rectangle(x,y,width,height,options)
     this.width=width
     this.height=height

     World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        scale=0.2
        fill("blue")

        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
     }     
}
