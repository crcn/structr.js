Structr is a thin class library that helps create, and extend prototypes.

## Example


```javascript


function Animal(name) {
  this.name = name;
}

function Cat(name) {
  Cat.__super__.apply(this, arguments);
}

structr(Animal, Cat, {
  meow: function() {
    console.log(this.name + ": meow");
  }
});


```