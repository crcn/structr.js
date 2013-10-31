Structr is a thin class library that helps create, and extend prototypes.

## Example


```javascript
var Animal = structr({
	construct: function(name) {
		this.name = name;
	}
});

var Cat = Animal.extend({
	meow: function() {
		console.log(this.name + ": meow!");
	}
});

var cat = new Cat("sam");
cat.meow(); // sam: meow!
```