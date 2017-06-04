var fs = require('fs')

var file = process.argv[2];

function countNewlines(filePath) {
  var myFile = fs.readFileSync(filePath);
  var str = myFile.toString()
  return str.split('\n').length - 1;
}

console.log(countNewlines(file));

