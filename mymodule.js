var exports = module.exports = {};

function filterFunc(name, ext) {
  var splitStr = name.split('.');
  var extension = splitStr[splitStr.length - 1];
  if(extension == ext || !ext) {
    return name;
  } else {
    return null;
  }
}

exports.readDir = function(data, filter) {
  if(data) {
    for(var i = 0; i < data.length; i++) {
      var filterName = filterFunc(data[i], filter);
      if(filterName) {
        console.log(filterName);
      }
    }
  }
}

