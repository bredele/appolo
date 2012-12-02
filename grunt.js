 module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-compass');

  /* do clean, meta, jshint, lint, csslint, etc */
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      name: 'Appolo',
      banner: '/*! <%= meta.name %> - v<%= pkg.version %> - <%= grunt.template.today("m/d/yyyy") %>\n' +
              '* <%= pkg.homepage %>\n' +
              '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
              ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    server : {
      port: 8888,
      base: './'
    },
    compass: {
      dist: {}
    },
    lint : {
      files : ['src/js/packages/**/*.js'],
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
      },
      globals: {
        require: true,
        define: true
      }
    },
    watch : {
      test : {
        files : ['<config:lint.files>'],
        tasks : ['lint', 'test']
      },
      theme : {
        files : 'src/theme/sass/*.scss',
        tasks : 'compass'
      }
    }
  });

  grunt.registerTask("launch", "server watch");
  grunt.registerTask("test", "jstd");

  grunt.loadTasks("./tools/grunt");

};
