module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var livePort = 8080;  //自定义端口号
  var liveSnippet = require('connect-livereload')({port: livePort});
  var liveReload = function(connect, options) {
    return [ liveSnippet, connect.static(options.base), connect.directory(options.base) ];
  };
  grunt.initConfig({
  	connect: {
      client: {
        options: {
          port: 8888,
          hostname: 'localhost',
          base: 'src/',
          middleware: liveReload
        }
      }
    },

    copy: {
  		build: {
        expand: true,
        cwd: 'src',
        src: [ '*.*', '**/*.jpeg', 'jquery/**.*', '!**/*.jade', '!**/*.sass', '!**/*.ls' ],
        dest: 'build'
  		}
  	},

    clean: {
      build: {
        src: [ 'build' ]
      }
    },

    jade: {
      compile: {
        files: [{
          expand: true,
          cwd: 'src',
          src: [ '**/*.jade' ],
          dest: 'build',
          ext: '.html'
        }]
      }
    },

    sass: {
      build: {
        files: [{
          expand: true,
          cwd: 'src',
          src: [ '**/*.sass' ],
          dest: 'build',
          ext: '.css'
        }]
      }
    },

    livescript: {
      build: {
        files: [{
          expand: true,
          cwd: 'src',
          src: [ '**/*.ls' ],
          dest: 'build',
          ext: '.js'
        }]
      }
    },

    watch: {
      jade: {
        files: 'src/**/*.jade',
        tasks: [ 'jade' ]
      },
      sass: {
        files: 'src/**/*.sass',
        tasks: [ 'sass' ]
      },
      livescript: {
        files: 'src/**/*.ls',
        tasks: [ 'livescript' ]
      },
      copy: {
        files: [ 'src/**', '!src/**/*.jade', '!src/**/*.sass', '!src/**/*.ls' ],
        tasks: [ 'copy' ]
      },
      client: {
        options: {
          livereload: true
        },
        files: [ 'build/**/*.*' ]
      }
    },

    // watch: {
    //   files: [ 'src/**', 'src/**/*.jade', 'src/**/*.sass', 'src/**/*.ls' ],
    //   tasks: [ 'build', 'client' ]
    // }
  });

  // grunt.registerTask('jade', [ 'jade' ]);

  // grunt.registerTask('sass', [ 'sass' ]);

  grunt.registerTask('build', [ 'clean', 'copy', 'livescript', 'jade', 'sass' ]);

  grunt.registerTask('default', [ 'build', 'watch' ]);

};


// http://caibaojian.com/writting-an-awesome-build-script-with-grunt.html#t8
// http://javascript.ruanyifeng.com/tool/grunt.html


