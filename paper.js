class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.1,
            'friction':190,
            'density':1.2,
        }

     
     this.body=Bodies.circle(x,y,radius/2,options)
     this.radius=radius


     World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
       fill("yellow")

       circle(0,0,this.radius)
       pop()
    }
}