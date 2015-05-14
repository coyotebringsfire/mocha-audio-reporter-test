var should=require('should'),
	debug=require('debug')('mocha:audioreporter:test');

describe("audioreporter", function() {
	var passCount=5, failCount=5;

	for( i=0; i<passCount; i++) {
		it("passing test", function doIt(done) {
			setTimeout(function() {
				done();
			}, 500);
		});	
	}
	for( i=0; i<failCount; i++) {
		it("should set mongo options programmatically", function doIt(done) {
			setTimeout(function() {
				should.fail();
				done();
			}, 500);
		});
	}
});