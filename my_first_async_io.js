var fs = require('fs')

var file = process.argv[2];

function callback(err, data) {
  if(data) {
    var str = data;
    console.log(str.split('\n').length - 1);
  }
}

function countNewlines(filePath) {
  fs.readFile(filePath, 'utf8', callback);
}

countNewlines(file);

