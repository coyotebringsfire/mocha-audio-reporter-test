var Mocha=require('mocha'),
	debug=require('debug')("mocha:audioreporter:test"),
	sounds=require('mario-sounds');

process.on('SIGABRT',function(evt) {
	debug("%j", evt);
});

var mocha = new Mocha({
	timeout: 10000,
    ui: 'bdd',
    reporter: "mocha-multi",
    reporterOptions: {
	    "mocha-audio-reporter": {
		    stdout: '/dev/null',
		    options: {
		    	onPass: "pass",
		    	onFail: "fail",
		        onSuiteFail: sounds["smb_gameover"],
		        onSuitePass: sounds["smb_stage_clear"]
		    }

	    },
	    spec: {
		    stdout: "-"
		}
	}
});
mocha.addFile("test/success.js");
mocha.addFile("test/failure.js");
mocha.run();