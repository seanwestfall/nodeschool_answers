var fs = require('fs')
var mymodule = require('./mymodule');

var file   = process.argv[2];
var filter = process.argv[3];

function callback(err, data) {
  mymodule.readDir(data, filter);
}

function countNewlines(filePath) {
  fs.readdir(filePath, callback);
}

countNewlines(file);


