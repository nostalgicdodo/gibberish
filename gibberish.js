
;(function () {

	var _ = this.gibberish || {};





	var
		RGB_WHITE = 3 * 255,
		ALMOST_TRANSPARENT = 19;

	_.approximatePixelToBinary = function approximatePixel (pixel) {
		return (pixel[3] < ALMOST_TRANSPARENT || pixel[0] + pixel[1] + pixel[2] === RGB_WHITE) ? 0 : 1;
	};

	_.binaryToPixel = function binaryToPixel (binaryNum) {
		return binaryNum ? [0, 0, 0, 255] : [255, 255, 255, 255];
	};

	_.generateOpposingPixel = function generateOpposingPixel (theSourcePixel, theRandomPixel) {
		return theSourcePixel ? (theRandomPixel ? 0 : 1) : theRandomPixel;
	};





	this.gibberish = _;

	console.log("#@!*^");

}.call(this));
