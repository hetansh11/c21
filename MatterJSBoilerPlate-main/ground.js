class ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            
            
        }
        
        this.w=w
        this.h=h
    
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,ball)
    }
    display()
    {
        var groundpos=this.body.position
        push()
        translate(groundpos.x,groundpos.y)
       fill(255,255,0)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
pop()
    }
}