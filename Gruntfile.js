module.exports = function(grunt) {
	
	// Load grunt tasks automatically.
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		clean: {
			// Clean the "dist" folder.
		  	dist: {
		    	files: [{
		      		src: [
						'dist'
					]
		    	}]
		  	},
		  	// Clean the "tmp" folder, after the build is done.
		  	tmp: {
		    	src: 'tmp'
			}
		},

		less: {
	      	dist: {
	        	files: {
	          		"dist/css/style.css": "src/less/main.less"
	        	}
	      	},
	      	dev: {
	        	files: {
	          		"src/css/style.css": "src/less/main.less"
	        	}
	      	}
	    },

		// Compile Angular templates.
		html2js: {
      		generated: {
      			options: {
      				module: 'generated-templates', // The name of the angular js module which stores the templates.
      				htmlmin: {
						collapseBooleanAttributes: true,
						collapseWhitespace: true,
						removeAttributeQuotes: true,
						removeComments: true,
						removeEmptyAttributes: true,
						removeRedundantAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true
					}
      			},
        		src: [ 'src/**/*tpl.html' ],
        		dest: 'tmp/templates.js'
      		}
   	 	},

   	 	// Concatenate js files.
    	concat: {
      		app: {
        		files: {
			        'dist/js/app.js': [
			        	'src/**/*.js', 
        				'!src/**/*.spec.js', // Exlcude the spec files.
        				'tmp/*.js'
        			]
			   	}
      		},
      		vendor: {
      			src: [
        			'vendor/angular/angular.js', 
        			'vendor/angular-route/angular-route.js',
        			'vendor/angular-bootstrap/ui-bootstrap-tpls.js'
        		],
        		dest: 'dist/js/vendor.js'
      		}
    	},

    	processhtml: {
    		dist: {
      			files: {
        			'dist/index.html': ['src/index.html']
     			}
    		}
		},

		// Minify js files.
		uglify: {
	     	dist: {
	        	files: {
	          		'dist/js/app.js': [ 'dist/js/app.js' ]
	        	},
	        	options: {
	          		mangle: false
	        	}
	      	}
	    },

	    // Minify html files.
	   	htmlmin: {                                 
			dist: {                                    
				options: {                                 
					removeComments: true,
        			collapseWhitespace: true
				},
				files: {                                 
					'dist/index.html': 'dist/index.html'  
				}
			}
		},

		// Minify css files.
		cssmin: {
			dist: {
				files: {
					'dist/css/style.css': 'dist/css/style.css'
				}
			}
		},

		// Server for dev work - XHR.
		connect: {
			options: {
		        port: 9000,
		        livereload: 35729,
		        hostname: 'localhost'
		    },
		    livereload: {
		        options: {
		            open: {
		                 target: 'http://localhost:9000/src'
		            }
		        }
		    }
		},

		karma: {
	    	unit: {
	        	configFile: 'karma/karma.conf.js'
	      	}
	    },

		watch: {
			dev: {
				files: ['Gruntfile.js', 'src/**/*.js', 'src/**/*.html', 'src/**/*.less'],
				tasks: [
					'less:dev'
				],
				options: {
					 livereload: true
				}
			}
		}
	});

	grunt.registerTask('dev', [
		'connect',
		'watch:dev'
	]);

	grunt.registerTask('test', ['karma:unit']);

	grunt.registerTask('build', [
		'clean:dist',
		'less:dist',
		'html2js:generated',
		'concat:app',
		'concat:vendor',
		'processhtml',
		'uglify',
		'htmlmin',
		'cssmin',
		'clean:tmp'
	]);
};