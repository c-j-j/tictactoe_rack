module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: ['spec/**/*.js', 'public/**/*.js'],
        tasks: ['karma:continuous'],
      }
    },

    karma: {
      continuous: {
        configFile: 'spec/javascript/karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      },
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
