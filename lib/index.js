function _copy (from, to) {
	for(var property in from) {
		if(property === "constructor") continue;
		to[property] = from[property];
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

	var proto = { };


	for (var i = 0, n = mixins.length; i < n; i++) {
		_copy(mixins[i], proto);
	}

	_copy(proto, constructor.prototype);

	if (superclass) {

		// copy static properties
		_copy(superclass, constructor);

		constructor.__super__     = superclass.prototype;
		constructor.superclass    = superclass;
	}

	if (!constructor.extend) {
		constructor.extend = function(subclass) {
			return structr.apply(this, [this].concat(Array.prototype.slice.call(arguments, 0)));
		}
	}

	return constructor;
}


module.exports = structr;