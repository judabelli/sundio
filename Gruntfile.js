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
        postcss: {
            options: {
                map: true, // inline sourcemaps

                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')(), // minify the result
                    require("css-mqpacker")()
                ]
                },
                dist: {
                src: 'site/css/**/*.css'
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
     
    grunt.registerTask('default', ['sass', 'postcss']);
};