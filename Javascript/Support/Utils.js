var utils = {
	norm: function (value, min, max) {
		return (value - min) / (max - min);
	},

	lerp: function (norm, min, max) {
		return (max - min) * norm + min;
	},

	map: function (value, sourceMin, sourceMax, destMin, destMax) {
		return utils.lerp(utils.norm(value, sourceMin, sourceMax), destMin, destMax);
	},

	clamp: function (value, min, max) {
		return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
	},

	distance: function (p0, p1) {
		var dx = p1.x - p0.x,
			dy = p1.y - p0.y;
		return Math.sqrt(dx * dx + dy * dy);
	},

	distanceXY: function (x0, y0, x1, y1) {
		var dx = x1 - x0,
			dy = y1 - y0;
		return Math.sqrt(dx * dx + dy * dy);
	},

	circleCollision: function (c0, c1) {
		return utils.distance(c0, c1) <= c0.radius + c1.radius;
	},

	circlePointCollision: function (x, y, circle) {
		return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
	},

	pointInRect: function (x, y, rect) {
		return utils.inRange(x, rect.x, rect.x + rect.width) &&
			utils.inRange(y, rect.y, rect.y + rect.height);
	},

	inRange: function (value, min, max) {
		return value >= Math.min(min, max) && value <= Math.max(min, max);
	},

	rangeIntersect: function (min0, max0, min1, max1) {
		return Math.max(min0, max0) >= Math.min(min1, max1) &&
			Math.min(min0, max0) <= Math.max(min1, max1);
	},

	rectIntersect: function (r0, r1) {
		return utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
			utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
	},

	degreesToRads: function (degrees) {
		return degrees / 180 * Math.PI;
	},

	radsToDegrees: function (radians) {
		return radians * 180 / Math.PI;
	},

	randomRange: function (min, max) {
		return min + Math.random() * (max - min);
	},

	randomInt: function (min, max) {
		return Math.floor(min + Math.random() * (max - min + 1));
	},

	findhover: function (origin_x, origin_y, destination_x, destination_y) {
		const hover_distance = utils.distanceXY(origin_x, origin_y, destination_x, destination_y)
		return hover_distance
	},

	checkhover: function(hover_distance, checking_gap) {
		if (hover_distance < checking_gap) {
			return true
		} else {
			return false
		}
	},

	checkclick: function(condition , boolean_value) {
		if (condition) {
			boolean_value = true
		} else {
			boolean_value = false
		}
		return boolean_value
	}

}