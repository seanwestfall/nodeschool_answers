var http = require('http');
var https = require('https');

var url = process.argv[2];

function callback(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    console.log(data);
  });
}

function printReq(url) {
  var substr = url.split(':');
  if(substr[0] == 'http') {
    http.get(url, callback);
  } else if (substr[0] == 'https') {
    https.get(url, callback);
  }
}

printReq(url);
