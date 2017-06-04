var fs = require('fs')
var mymodule = require('./mymodules');

var file   = process.argv[2];
var filter = process.argv[3];

function callback(err, data) {
  readDir(data);
}

function readDir(data) {
  if(data) {
    for(var i = 0; i < data.length; i++) {
      var filterName = filterFunc(data[i], filter);
      if(filterName) {
        console.log(filterName);
      }
    }
  }
}

function filterFunc(name, ext) {
  var splitStr = name.split('.');
  var extension = splitStr[splitStr.length - 1];
  if(extension == ext || !ext) {
    return name;
  } else {
    return null;
  }
}

function countNewlines(filePath) {
  fs.readdir(filePath, callback);
}

countNewlines(file);

