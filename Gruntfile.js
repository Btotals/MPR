module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
  	copy: {
  		build: {
  			cwd: 'src',
        src: [ '*.*' ],
        dest: 'build',
        expand: true
  		}
  	},
    clean: {
      build: {
        src: [ 'build' ]
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
      copy: {
        files: [ 'src/**', '!src/**/*.jade', '!src/**.*.sass' ],
        tasks: [ 'copy' ]
      }
    }
  });

  grunt.registerTask('default', [ 'build' ])

  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean', 'copy' ]
  );

};
