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
    expect(architect.__super__).to.be(Person.prototype);
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
    expect(cat.__super__).to.be(Animal.prototype);
    expect(Cat.__super__).to.be(Animal.prototype);
  });

});