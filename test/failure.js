var should=require('should'),
	debug=require('debug')('mocha:audioreporter:test'),
	async=require('async');

describe("audioreporter test failures", function() {
	var failCount=5;

	async.times( failCount, function(n, next) {
		it("should fail: "+n, function doIt(done) {
			setTimeout(function() {
				should.fail();
				done();
				next();
			}, 500);
		});
	}, function(err) {
		debug("done");
	});
});