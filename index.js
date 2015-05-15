var Mocha=require('mocha'),
	sounds=require('mario-sounds');

var mocha = new Mocha({
    ui: 'bdd',
    reporter: "mocha-multi",
    reporterOptions: {
	    "mocha-audio-reporter": {
		    stdout: '/dev/null',
		    options: {
		    	onStart: sounds["smb_vine"],
		        onPass: sounds["smb_coin"],
		        onFail: sounds["smb_mariodie"],
		        onSuiteFail: sounds["smb_gameover"],
		        onSuitePass: sounds["smb_stage_clear"]
		    }

	    },
	    spec: {
		    stdout: "-"
		}
	}
});
mocha.addFile("test/index.js");
mocha.run();