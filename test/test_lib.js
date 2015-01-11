
function assertEquals(expected, given) {
	return expected === given || console.log("expected " + given + " to be equal to " + expected);
}

function assertNotEquals(expected, given) {
	return expected !== given || console.log("expected " + given + " to not be equal to " + expected);
}
