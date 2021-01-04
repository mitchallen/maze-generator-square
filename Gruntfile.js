module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

    grunt.initConfig({

        // used by the changelog task
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                node: true
            },
            all: ['*.js','src/*.js']
        },

        shell: {
            publish: {
                command: 'npm publish'
            },

            pubinit: {
                command: 'npm publish --access public'
            }
        },

        // To test: grunt bump --dry-run

        bump: {
            options: {

                commit: true,
                createTag: true,
                push: true,
                pushTo: 'origin',

                updateConfigs: ['pkg'],
                commitFiles: ['package.json']
            }
        },

        browserify: {
            dist: {
                options: {
                    browserifyOptions: {
                        standalone: 'MitchAllen.MazeGeneratorSquare'
                    },
                    transform: [['babelify', {presets: ['es2015']}]],
                    plugin: [[ "browserify-derequire" ]]
                },
                files: {
                   // if the source file has an extension of es6 then
                   // we change the name of the source file accordingly.
                   // The result file's extension is always .js
                   "./dist/maze-generator-square.js": ["./src/index.js"]
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    './dist/maze-generator-square.min.js': ['./dist/maze-generator-square.js']
                }
            }
        },

        watch: {
             scripts: {
                files: ["./src/*.js"],
                tasks: ["browserify",'uglify']
             }
        },

        jsdoc2md: {
              oneOutputFile: {
                src: 'src/*.js',
                dest: 'DOC-API.md'
              }
              // separateOutputFilePerInput: {
              //   files: [
              //     { src: 'src/jacket.js', dest: 'api/jacket.md' },
              //     { src: 'src/shirt.js', dest: 'api/shirt.md' }
              //   ]
              // },
              // withOptions: {
              //   options: {
              //     'no-gfm': true
              //   },
              //   src: 'src/wardrobe.js',
              //   dest: 'api/with-index.md'
              // }
        }
    });



    grunt.registerTask('default', ['build']);
    grunt.registerTask('monitor', ['jshint','watch']);
    grunt.registerTask('build-doc', ['jsdoc2md']);
    grunt.registerTask("build", ['jshint','build-doc','browserify','uglify']);
    grunt.registerTask('pubinit', ['build','shell:pubinit']);
    grunt.registerTask('publish', ['build','bump','shell:publish']);
};