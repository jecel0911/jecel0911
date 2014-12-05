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
           'dist/js/modernizr.js': ['js/modernizr.js']
          ,'dist/js/main.min.js': ['js/jquery-2.1.1.min.js'
                                  ,'assets/owl-carousel/owl.carousel.min.js'
                                  ,'js/waypoints.js'
                                  ,'js/jquery.fittext.js'
                                  ,'js/magnific-popup.js'
                                  ,'js/wow.min.js'
                                  ,'js/jquery.nicescroll.min.js'
                                  ,'js/script.js'
                                  ,'js/googleanalitycs.js'
                                  ]

                                    }
                                  }
                                },
      //Clean Unused CSS styles
      uncss: {
        dist: {
          files: {
            'dist/css/main.min.css': ['index.html' /*, 'app/about.html'*/]
          }
        }
      },
      //Minified css
      cssmin: {
        combine: {
          files: {
            'dist/css/main.min.css': [ 'dist/css/main.min.css'/*'css/normalize.css'
                                     //,'css/preLoadingPage.css'
                                     ,'css/base.css'
                                     ,'css/responsive.css'*/]
                                   }
                                 }
                               },
      //copy files and folders (static content)
      copy: {
        main: {
          expand: true,
          src: ['static/**','assets/**','images/**'], 
          dest: 'dist/'
        }
      }

    });

	//loading libraries
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

	//registering tasks
	grunt.registerTask('default', ['htmlmin','uglify','uncss','cssmin','copy']);


};