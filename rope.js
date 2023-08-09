class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
        
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y)

		fill("white")
		strokeWeight(5)
		//line(rope1.pointA.x, rope1.pointA.y, bob1.position.x, bob1.position.y)
	  
		//ellipse(bob1.position.x, bob1.position.y, 20);
		ground.show();
		
		fill("white")
		strokeWeight(5)
		line(ball.position.x, ball.position.y, ball2.position.x, ball2.position.y)
	  
		ellipse(ball2.position.x,ball2.position.y,20);
		ground.show();
	  
		Engine.update(engine);
	  }
	}

