Structr - Giving structure to Javascript            
======================================== 
Structr is a framework that aims to:

* Provide a super low learning curve comming from OO background. 
* Help javascript developers write re-useable, clean, and consistent code.
* Be fun, and easy to work with!
		   
		
Using Structr
-------------


               
	var Recipe = Structr({  
		
		
		'__construct': function(name)
		{
			this._name = name;
		},                
		
		'name': function()
		{
			return this._name;
		},
		
		'ingredients': function()
		{
			alert('Ingredients for '+this._name+':');
		}
		
	});                      

	var tiramisuRecipe = new Recipe('Tiramisu');   
	console.log(tiramisuRecipe.name()); //tiramisu



### Class.extend


	var TiramisuRecipe = Recipe.extend({

		'override __construct': function()
		{
			this._super('Tiramisu');
		},
		
		'override ingredients': function()
		{
			this._super();
			
			alert('Mascarpone, Heavy Cream, Eggs, Espresso, Sugar, Cocoa, Baileys, and Lady Fingers.');
		}
	});
	
	var PastaRecipe = Recipe.extend({
		
		'override __construct': function()
		{
			this._super('Pasta');
		},
		
		'override ingredients': function()
		{
			this._super();
			
			alert('Eggs, Flour, Water, Salt');
		}
	});
	
	var tiramisu = new TiramisuRecipe();
	var pasta = new PastaRecipe();
	
	tiramisu.ingredients();
	pasta.ingredients();

Properties
----------

### __construct

Called on instantiation of the class.



Modifiers
---------      
                      
                        
### Final Methods
                        
### Final Methods 

### Abstract Methods
    
### Static Keyword 

### Getters & Setters     


Tips:
----

* Use underscores before any private method / property. 

E.g: 
	
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
	
* Wrap methods / properties in single, or double quotes. 


	


