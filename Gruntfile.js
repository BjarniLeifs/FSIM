module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({ // The object of configuration
    pkg: grunt.file.readJSON('package.json'),
    concat: { // Minifying  task
      options: {
        separator: '\n',
        banner: '/*! Made on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      basic: {
        src: ['public/views/angularApp.js', 'public/views/**/**/*.js', 'public/views/**/*.js'],
        dest: 'public/assets/mainbuild/myApp.js',
      }
    },
    concat_css: {
      options: {
        banner: '/*! Made on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      all: {
        src: ['public/assets/css/**/*.css','public/views/**/**/*.css'],
        dest: 'public/assets/mainbuild/myApp.css',
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0,
        banner: '/*! Made on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      site: {
        src: ['public/assets/mainbuild/myApp.css'],
        dest: 'public/assets/mainbuild/myApp.min.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! Made on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      basic: {
        files: {
          'public/assets/mainbuild/myApp.min.js': ['<%= concat.basic.dest %>']
        }
      }
    },
    jshint: {
      files: ['server.js', 'Gruntfile.js', 'public/views/angularApp.js', 'server/**/*.js', 'server/models/*.js', 'server/routes/*.js', 'server/config/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          curly: true,
          eqeqeq: true,
          immed: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          boss: true,
          eqnull: true,
          node: true,
          strict: false,
          mocha: true
        }
      }
    },
    watch: {
      js: {
        files: ['public/views/components/*.js' , 'public/views/components/**/*.js'],
        tasks: ['concat:basic'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['public/assets/css/**/*.css'],
        tasks: ['concat_css'],
        options: {
          nospawn: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'bin/www',
        ignore:  ['node_modules/**','bower_components/**']
      }
    },
    concurrent: {
      dev: {
        tasks: ['concat_css','cssmin','jshint', 'concat', 'uglify', 'nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
    

  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-ng-template');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('serve', '', function (){
		return grunt.task.run([
	      'concurrent',
	      'concat_css',
	      'cssmin',
	      'jshint', 
	      'concat', 
	      'uglify', 
	      'nodemon', 
	      'watch'
		]);
	});

  // Task run in this order
  grunt.registerTask('default', '', function () {
    var taskList = [
      'concurrent',
      'concat_css',
      'cssmin',
      'jshint', 
      'concat', 
      'uglify', 
      'nodemon', 
      'watch'
    ];
    grunt.task.run(taskList);
  });
};