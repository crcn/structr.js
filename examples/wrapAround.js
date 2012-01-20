var structr = require('../');


var clazz = structr({
	
	/**
	 */


	'thru -> sayHello': function(name) {
		console.log('hello!')
	},

	/**
	 */

	'thru': function(name)
	{
		console.log("THRU ME!" + name);
		this.next();
	}
});

var childClazz = clazz.extend({
	
	/**
	 */

	'override sayHello': function() {
		this._super('craig');

		console.log("GOLD");
	}
})


var obj = new childClazz();

obj.sayHello('craig');