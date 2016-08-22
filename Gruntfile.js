 module.exports = function(grunt) {

   grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     coffee: {
       compileBare: {
         options: {
           bare: true
         },
         files: {
           'build/embed.js': ['src/embed.coffee']
         }
       }
     },

     uglify: {
       options: {
    mangle: true,
    compress: {
        drop_console: true
      }
  },
    my_target: {
      files: {
        'build/embed.min.js': ['build/embed.js']
      }
    }
  },

     watch: {
       js: {
         files: 'src/*.coffee',
         tasks: ['coffee', 'uglify']
       }
     }

   });
   grunt.loadNpmTasks('grunt-contrib-coffee');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.registerTask('default', ['watch']);

 };
