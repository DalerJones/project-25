class Ball {
    constructor(x,y){
      
      var options = {
          restitution: 0.6,
          friction: 0.3,
          density: 0.2
          
        }
        this.radius = 60
      this.body = Bodies.circle(x,y,this.radius,options)
      
      this.image = loadImage("paper.png");

      World.add(world,this.body)
    }
   display(){
     var pos = this.body.position 
    
     push();
     translate(pos.x,pos.y)
    
     imageMode(RADIUS);
     image( this.image,0, 0, 60,60 )
     pop()
    }
}