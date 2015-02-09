module.exports = function(grunt) {
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
    }
  });

  grunt.registerTask('default', [ 'build' ])

  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean', 'copy' ]
  );

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

};