module.exports = function(grunt) {
  
  	//configuration
	grunt.initConfig({
		  //Minified HTML
  		htmlmin: {                                     		// Task
    		dist: {                                      	// Target
      			options: {                                 	// Target options
        			removeComments: true,
        			collapseWhitespace: true
      			},
      			files: {                                   	// Dictionary of files
        			'dist/index.html': 'index.html'     	// 'destination': 'source'
        			//,'dist/contact.html': 'demo.html'
      			}
    		}
  		},
      //Minified js
  		uglify: {
    		my_target: {
      			files: {
        			'dist/js/init.min.js': ['js/init.js'
        								              ,'js/modernizr.js'
                                     ]
             /*,'dist/js/main.min.js': ['js/init.js'
                                      //,'js/scripts.js'
                                     ] */
      			  
            }
    		}
  		},
      //Minified css
      cssmin: {
        combine: {
          files: {
            'dist/css/main.min.css': ['css/normalize.css'
                                     ,'css/base.css'
                                     ,'css/responsive.css']
          }
        }
      },
      //copy files and folders (static content)
      copy: {
  main: {
    src: 'static/*',
    dest: 'dist/',
  }
}

    });

	//loading libraries
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

	//registering tasks
	grunt.registerTask('default', ['htmlmin','uglify','cssmin','copy']);


};