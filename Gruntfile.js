/*
* 先合并再压缩
*/
module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/deps-drawing.js', 'src/general_drawing.js'],
        dest: 'dest/libs.js'
      }
    },
    uglify: {
      build: {
        src: 'dest/libs.js',
        dest: 'dest/libs.min.js'
      }
    },
    cssmin: {
        options: {
            banner: "/*"+
                    "* FE-engineering-boilerplate \n"+
                    "* http://conversejs.org \n"+
                    "* Copyright (c) 2015, Webeautiful <xiongfusong@gmail.com> \n"+
                    "* Dual licensed under the MIT and GPL Licenses \n"+
                    "* Date:<%= grunt.template.today('yyyy-mm-dd') %> \n"+
                    "*/"
        },
        minify: {
            dest: 'res/main.min.css',
            src: ['bower_components/h5bp/dist/css/normalize.css', 'bower_components/h5bp/dist/css/main.css', 'res/main.css']
        }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // 默认任务
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}
