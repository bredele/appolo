module.exports = function (grunt) {
	
		grunt.registerTask("jsDoc", "task for generating the jsDoc", function () {
		
		var done = this.async();

		grunt.utils.spawn({
			cmd: "java",
			args: [
			    "-jar", "tools/JsDoc/jsrun.jar",
				"tools/JsDoc/app/run.js", "src",
				"-r=2",
				"-d=docs",
				"-t=tools/JsDoc/templates/jsdoc"
			]
		}, function (err, res) {
				grunt.log.writeln(res);
				done();
		});

	});
	
};