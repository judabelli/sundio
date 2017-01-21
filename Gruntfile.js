'use strict';
module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
 
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'site/css/style.css': 'sass/style.scss'
                }
            }
        },
        watch: {
          scripts: {
            files: ['sass/**/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            },
          },
        }
    });
     
    grunt.registerTask('default', ['sass']);
};