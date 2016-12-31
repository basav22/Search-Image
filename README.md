# Search-Image

Steps to run
1. Install Node
2. Install bower and gulp using npm (npm install -g bower gulp)
3. Run npm install
4. Run bower install
5. Small change in bower.json file of bootstrap(inside bower_components folder)
    replace "main" object with

    "main": [
      "dist/css/bootstrap.min.css",
      "dist/js/bootstrap.js"
    ]

6. Run gulp serve - to launch UI on default browser
