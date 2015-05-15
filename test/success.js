var should=require('should'),
	debug=require('debug')('mocha:audioreporter:test'),
	async=require('async');

describe("audioreporter test passes", function() {
	var passCount=5;

	async.times( passCount, function(n, next) {
		it("should pass: "+n, function doIt(done) {
			setTimeout(function() {
				done();
				next();
			}, 200);
		});
	}, function(err) {
		debug("done");
	});
});