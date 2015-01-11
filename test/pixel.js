
;(function () {

	assertEquals(1, gibberish.approximatePixelToBinary([
		9, 169, 1, 255
	]));
	assertEquals(1, gibberish.approximatePixelToBinary([
		9, 169, 1, 109
	]));
	assertEquals(0, gibberish.approximatePixelToBinary([
		255, 255, 255, 99
	]));
	assertEquals(1, gibberish.approximatePixelToBinary([
		19, 81, 155, 19
	]));
	assertEquals(0, gibberish.approximatePixelToBinary([
		19, 81, 155, 18
	]));

}());
