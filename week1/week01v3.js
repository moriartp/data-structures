var request = require('request'); //load module with npm request
var fs = require('fs');

for (var i = 1; i <=10; i++){
request('http://visualizedata.github.io/datastructures/data/m0'+i+'.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa3/aa'+i, body);
  }
  else {console.error('request failed')}
})}