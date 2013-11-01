
/**
 * plucks out the correct prototype
 */

function _mapPrototype (target) {
	if (typeof target === "function") {
		return target.prototype;
	} else {
		return target;
	}
}

/**
 */

function _extend (from, to) {

	var property, value, oldValue;

	if (!to) to = {};

	for(property in from) {

		value = from[property];

		//if the property is construct, must create a  
		if(property === "construct") {
			oldValue = value;
			value = function () {
				oldValue.apply(this, arguments);
			}
		}

		to[property] = value;
	}

	return to;
}


/**
 * structr(proto, mixin, ...);
 */

function structr () {

	var mixins, child, parent, mixin, construct, proto = {};

	mixins = Array.prototype.slice.call(arguments, 0).map(_mapPrototype);

	if(mixins.length > 1) {
		parent = mixins[0];
	}

	for(var i = 0, n = mixins.length; i < n; i++) {
		proto = _extend(mixins[i], proto);
	}

	if (!(construct = proto.construct)) {
		proto.constructor = proto.construct = construct = function () {};
	}

	proto.constructor = proto.construct;

	if (!construct.extend) {
		construct.extend = function () {
			return structr.apply(this, [this].concat(Array.prototype.slice.call(arguments, 0)));
		}
	}

	proto.superclass          = parent ? parent.construct : undefined;
	proto.construct.prototype = proto;
	proto.construct.__super__ = parent;

	return proto.constructor;
}



module.exports = structr;