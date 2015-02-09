module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
  	copy: {
  		build: {
        expand: true,
        cwd: 'src',
        src: [ '*.*', '!**/*.jade', '!**/*.sass' ],
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
          swd: 'src',
          src: [ '**/*.jade' ],
          dest: 'build',
          ext: '.html'
        }]
      }
    },

    sass: {
      build: {
        options: {
          linenos: true,
          compress: false
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: [ '**/*.sass' ],
          dest: 'build',
          ext: '.css'
        }]
      }
    },

    auto_reload: {
      jade: {
        files: 'src/**/*.jade',
        tasks: [ 'jade' ],
        options: {
          livereload: true
        }
      },
      sass: {
        files: 'src/**/*.sass',
        tasks: [ 'sass' ],
        options: {
          livereload: true
        }
      },
      copy: {
        files: [ 'src/**', '!src/**/*.jade', '!src/**.*.sass' ],
        tasks: [ 'copy' ]
      }
    }
  });

  grunt.registerTask('build', [ 'clean', 'copy', 'jade', 'sass' ]);

  grunt.registerTask('default', [ 'build' ]);

  grunt.registerTask('watch', [ 'build' ]);

};


// http://caibaojian.com/writting-an-awesome-build-script-with-grunt.html#t8
// http://javascript.ruanyifeng.com/tool/grunt.html


