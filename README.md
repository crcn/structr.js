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
			alert('This is going to be tasty...');
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

### _super

References the parent class method if override is provided.

Modifiers
---------      
                      
### Overriding Methods

Methods overridden have access to the _super property.

	'override __construct': function()
	{
		this._super();
	}

### Overwriting Methods
   
Faster if you don't plan on using _super.

	'__construct': function()
	{
		//cannot access _super __construct
	}
  
### Final Methods 

Final methods cannot be overridden by sub-classes. Otherwise an exception is thrown.

	'final getName': function(){}

### Abstract Methods

Abstract methods must be overridden by sub-classes. Otherwise an exception is thrown.
	
	'abstract getName': function(){}
    
### Static Keyword 

Properties, and methods set to the class versus objects instantiated.

	var Singleton = Structr({
		
		'static getInstance': function()
		{
			return this._instance || (this._instance = new Singleton());
		}
	});
	
	var test1 = Singleton.getInstance();
	var test2 = Singleton.getInstance();
	test2.name = 'Craig';
	
	console.log(test1.name); //Craig

### Getters & Setters   

	var GSTestClass = Structr({
	
		'explicit explicitValue': {
			get: function()
			{
				return this._name;
			},
			set: function(value)
			{
				this._name = value;
			}
		},
		
		'implicit implicitValue': {
			get: function()
			{
				return this._name;
			},
			set: function(value)
			{
				this._name = value;
			}
		},
		
		'explicit explicitValue2':true
	});
	
	
	var test = new GSTestClass();
	test.explicitValue('Craig'); 
	console.log(test.explicitValue());
	
	test.implicitValue = 'Tim';
	console.log(test.implicitValue);//Tim
	console.log(test.explicitValue());//Tim
	
	test.explicitValue2('hello world');
	console.log(test.explicitValue2());//hello world
	

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


	


