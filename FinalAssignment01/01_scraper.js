var request = require('request'); //load module with npm request
var fs = require('fs');


request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=01&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa01.html', body);
  }
  else {console.error('request failed')}
})

request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=02&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa02.html', body);
  }
  else {console.error('request failed')}
})

request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=03&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa03.html', body);
  }
  else {console.error('request failed')}
})

request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=04&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa04.html', body);
  }
  else {console.error('request failed')}
})

request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=05&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa05.html', body);
  }
  else {console.error('request failed')}
})

request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=06&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa06.html', body);
  }
  else {console.error('request failed')}
})
request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=07&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa07.html', body);
  }
  else {console.error('request failed')}
})

request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=08&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa08.html', body);
  }
  else {console.error('request failed')}
})

request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=09&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa09.html', body);
  }
  else {console.error('request failed')}
})

request('http://www.nyintergroup.org/meetinglist/meetinglist.cfm?zone=10&borough=M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/aa/aa10.html', body);
  }
  else {console.error('request failed')}
})