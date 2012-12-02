module.exports = function (grunt) {
	
		grunt.registerTask("jstd", "task for running tests with JsTestDriver", function () {

		var done = this.async();

		grunt.utils.spawn({
			cmd: "java",
			args: [
			       "-jar", "tools/JsTestDriver/JsTestDriver-1.3.5.jar",
			       "--config" , "./tools/JsTestDriver/jsTestDriver.conf",
			       '--basePath', ".",
			       "--tests", "reset"
			       ]
		}, function (err, res) {
				grunt.log.writeln(res);
				done(!+(/Fails: ([0-9]+);/.exec(res)[1]));
		});

	});
	
};