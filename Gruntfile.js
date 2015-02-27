module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: ['spec/**/*.js', 'public/**/*.js'],
        tasks: ['karma:continuous'],
      },
      coffee: {
        files: ['public/coffee/*.coffee', 'spec/coffee/*.coffee'],
        tasks: ['coffee'],
      }
    },

    coffee: {
      compile: {
        options: {
          join: true
        },
        files: {
          'public/javascript/main.js': ['public/coffee/*.coffee'],
          'spec/javascript/coffee_scripts_spec.js': ['spec/coffee/*.coffee']
        }
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
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['watch']);
};
