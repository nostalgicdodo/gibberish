
;function () {

assertEquals(0, gibberish.generateOpposingPixel(0, 0));
assertEquals(1, gibberish.generateOpposingPixel(0, 1));
assertEquals(1, gibberish.generateOpposingPixel(1, 0));
assertEquals(0, gibberish.generateOpposingPixel(1, 1));

}());
