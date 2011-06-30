Structr - Giving structure to Javascript            
======================================== 
Structr is a framework that aims to:

* Provide a super low learning curve comming from OO background. 
* Help javascript developers write re-useable, clean, and consistent code.
* Be fun, and easy to work with!
		   
		
Using Structr
-------------
               
### Structr(Object) 

	var HelloClass = Structr({  
		
		/**
		 * Constructor
		 * @name the name of the person to say hello to
		 */
		    
		'__construct': function(name)
		{
			this._name = name;
		},                
		
		/**
		 * says hello to the user 
		 */
		 
		'sayHello': function()
		{
			console.log('Hello ' + this._name);
		}
	});                      

	var hello = new HelloClass('Craig');         
	hello.sayHello();  

                   
### __construct   
### Class.extend

Modifiers
---------      
                      
                        
### Final Methods
                        
### Final Methods 

### Abstract Methods
    
### Static Keyword 

### Getters & Setters     


Tips:
----

* Use underscores before any private method / property. E.g:
	
	var SomeClass = Structr({
		'__construct': function()
		{
			this._myPrivateVariable = 'some private value';
		},
		'_myPrivateMethod': function()
		{
			//private stuff here
		}
	});
	
* Always wrap methods / properties in single, or double quotes. 


	


