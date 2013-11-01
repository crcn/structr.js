var expect = require("expect.js"),
structr    = require("..");

describe("basic#", function() {


  it("can create a structr", function () {
    var Person = structr({
      construct: function(name) {
        this.name = name;
      }
    });

    var person = new Person("craig");
    expect(person.name).to.be("craig");
  });


  it("can extend a value via structr", function () {

    var Person = structr({
      construct: function (name) {
        this.name = name;
      }
    });

    var Architect = structr(Person, {
      isArchitect: true
    });

    var architect = new Architect("craig");
    expect(architect.isArchitect).to.be(true);
    expect(architect.name).to.be("craig");
    expect(architect.construct.__super__).to.be(Person.prototype);
    expect(architect.superclass).to.be(Person);
  });


  it("can extend via .extend()", function() {
    var Animal = structr({
      construct: function (name) {
        this.name = name;
      }
    });

    var Cat = Animal.extend({
      meow: function() {
        return this.name + " meow";
      }
    })

    var cat = new Cat("sam");
    expect(cat.meow()).to.be("sam meow");
    expect(Cat.__super__).to.be(Animal.prototype);
  });


  it("can call super on a parent class", function() {
    var Animal = structr({
      construct: function (name) {
        this.name = name;
      },
      speak: function() {
        return this.name + " says...";
      }
    });

    var Cat = Animal.extend({
      speak: function() {
        return Cat.__super__.speak.call(this) + " meow";
      }
    });

    var Kitten = Cat.extend({
      speak: function() {
        return Kitten.__super__.speak.call(this) + "!";
      }
    });

    var cat = new Cat("molly"),
    kitten  = new Kitten("arnold");
    expect(cat.speak()).to.be("molly says... meow");
    expect(kitten.speak()).to.be("arnold says... meow!");
  });

});