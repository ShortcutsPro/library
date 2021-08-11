return checkVersions(installed,latest)

function checkVersions(installed,latest) {
    if (compare(installed,latest) === 0) {  
      console.log('Update Available')
      return 1;
    }
    console.log('No Update')
    return 0;
}

function compare(a, b) {
  if (a === b) {
    return 0;
  }
  var a_components = a.split(".");
  var b_components = b.split(".");
  var len = Math.min(a_components.length, b_components.length);
  for (var i = 0; i < len; i++) {
    if (parseInt(a_components[i]) > parseInt(b_components[i])) {
      return 1;
    }
    if (parseInt(a_components[i]) < parseInt(b_components[i])) {
      return -1;
    }
  }
  if (a_components.length > b_components.length) {
    return 1;
  }
  if (a_components.length < b_components.length) {
    return -1;
  }
  return 0;
}