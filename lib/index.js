function _copy (to, from) {

	for (var i = 0, n = from.length; i < n; i++) {

		var target = from[i];

		for (var property in target) {
			to[property] = target[property];
		}
	}

	return to;
}

function structr (superclass, constructor) {

	var mixins = Array.prototype.slice.call(arguments, 2);


	if (typeof constructor !== "function") {
		if(constructor) mixins.unshift(constructor); // constructor is a mixin
		constructor   = superclass;
		superclass    = undefined;
	} else {
		mixins.unshift(superclass.prototype);
	}

	_copy(constructor.prototype, mixins);

	if (superclass) {

		// copy static properties
		_copy(constructor, superclass);

		constructor.__super__     = superclass.prototype;
		constructor.superclass    = superclass;
	}

	if (!constructor.extend) {
		constructor.extend = function(subclass) {
			return structr.apply(this, [this].concat(Array.prototype.slice.call(arguments, 0)));
		}
		constructor.mixin = function(proto) {
			_copy(this.prototype, arguments);
		}
	}

	return constructor;
}


module.exports = structr;