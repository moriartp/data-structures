var request = require('request'); //load module with npm request
var fs = require('fs');

for (var i = 0; i <10; i++){
request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=0'+i, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa2/aa'+i, body);
  }
  else {console.error('request failed')}
})}