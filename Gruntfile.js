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
        			'dist/index.html': 'index.html',     	// 'destination': 'source'
        			'dist/contact.html': 'demo.html'
      			}
    		}
  		},
  		uglify: {
    		my_target: {
      			files: {
        			'dist/js/main.min.js': ['js/init.js', 
        								    'js/scripts.js']
      			}
    		}
  		}
		});


	//loading libraries
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//registering tasks
	grunt.registerTask('default', ['htmlmin','uglify']);


};