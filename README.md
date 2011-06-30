Structr - Giving structure to Javascript            
======================================== 
Structr is a framework that aims to:
	- Feel natural coming from an OO background.   
	- Help javascript developers write re-useable code.
	- Help developers write clean, consistent code.  
	- Be fun, and easy to work with!
		   
		
Using Structr
-------------
               
### Structr(Object) ###  

	var HelloClass = Structr({      
		'__construct': function(name)
		{
			this._name = name;
		},
		'sayHello': function()
		{
			console.log('Hello ' + this._name);
		}
	})                       

	var hello = new HelloClass('Craig');         
	hello.sayHello();  

                   
### __construct ###  
### Class.extend ###

Modifiers
---------      
                      
                        
### Final Methods ###
                        
### Final Methods ###

### Abstract Methods ###
    
### Static Keyword ###

### Getters & Setters ###    


Design tips
---------


