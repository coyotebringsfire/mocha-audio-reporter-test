var Mocha=require('mocha'),
	sounds=require('mario-sounds');

var mocha = new Mocha({
	timeout: 10000,
    ui: 'bdd',
    reporter: "mocha-multi",
    reporterOptions: {
	    "mocha-audio-reporter": {
		    stdout: '/dev/null',
		    options: {
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