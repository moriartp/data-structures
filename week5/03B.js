var fs = require('fs');
var request = require('request'); // npm install request
// var async = require('async'); // npm install async

// SETTING ENVIRONMENT VARIABLES (in Linux): 
// export NEW_VAR = "api key goes here";////NO SPACES
// printenv | grep NEW_VAR;
// var apiKey = process.env.GMAKEY;



var meetingsData = [];
// var addresses = fs.readFile('/home/ubuntu/workspace/week5/data/m07meetings.txt', callback);
var times = ["7:30 AM <b>to","8:30 AM <br><b>Meeting Type","7:00 PM <b>to","8:00 PM <br><b>Meeting Type","6:00 PM <b>to","7:00 PM <br><b>Meeting Type","2:30 PM <b>to","3:30 PM <br><b>Meeting Type","7:15 PM <b>to","8:15 PM <br><b>Meeting Type","7:00 PM <b>to","8:00 PM <br><b>Meeting Type","7:00 PM <b>to","8:00 PM <br><b>Meeting Type","6:00 PM <b>to","7:00 PM <br><b>Meeting Type","6:30 PM <b>to","7:30 PM <br><b>Meeting Type","3:30 PM <b>to","4:30 PM <br><b>Meeting Type","6:15 PM <b>to","7:15 PM <br><b>Meeting Type","5:00 PM <b>to","5:45 PM <br><b>Meeting Type","7:15 AM <b>to","8:15 AM <br><b>Meeting Type","9:00 AM <b>to","10:00 AM <br><b>Meeting Type","7:30 PM <b>to","8:30 PM <br><b>Meeting Type","6:30 PM <b>to","7:30 PM <br><b>Meeting Type","8:00 PM <b>to","9:00 PM <br><b>Meeting Type","6:15 PM <b>to","7:15 PM <br><b>Meeting Type","6:15 PM <b>to","7:15 PM <br><b>Special Interest","12:30 PM <b>to","1:30 PM <br><b>Meeting Type","6:30 PM <b>to","7:30 PM <br><b>Meeting Type","11:00 AM <b>to","12:00 PM <br><b>Meeting Type","7:00 PM <b>to","8:00 PM <br><b>Meeting Type","6:30 PM <b>to","7:30 PM <br><b>Meeting Type","7:00 PM <b>to","8:00 PM <br><b>Meeting Type","7:00 PM <b>to","8:00 PM <br><b>Meeting Type","11:00 AM <b>to","12:00 PM <br><b>Meeting Type","7:00 PM <b>to","8:30 PM <br><b>Meeting Type","3:15 PM <b>to","4:15 PM <br><b>Meeting Type","7:00 PM <b>to","8:00 PM <br><b>Meeting Type","7:15 PM <b>to","8:15 PM <br><b>Meeting Type","9:30 AM <b>to","10:30 AM <br><b>Meeting Type","6:30 PM <b>to","7:30 PM <br><b>Meeting Type","7:15 PM <b>to","8:15 PM <br><b>Meeting Type","9:30 AM <b>to","10:30 AM <br><b>Meeting Type","12:30 PM <b>to","1:30 PM <br><b>Meeting Type","6:45 PM <b>to","7:45 PM <br><b>Meeting Type","11:00 AM <b>to","12:00 PM <br><b>Meeting Type","7:00 PM <b>to","8:00 PM <br><b>Meeting Type","6:30 PM <b>to","7:30 PM <br><b>Meeting Type","6:30 PM <b>to","7:30 PM <br><b>Meeting Type","6:00 PM <b>to","7:00 PM <br><b>Meeting Type","6:30 PM <b>to","7:30 PM <br><b>Meeting Type","6:00 AM <b>to","7:00 AM <br><b>Meeting Type","9:15 AM <b>to","10:15 AM <br><b>Meeting Type","10:00 AM <b>to","11:00 AM <br><b>Meeting Type","10:00 AM <b>to","11:00 AM <br><b>Meeting Type","6:30 PM <b>to","7:30 PM <br><b>Meeting Type","12:00 PM <b>to","1:00 PM <br><b>Meeting Type","7:00 PM <b>to","8:00 PM <br><b>Meeting Type","6:15 PM <b>to","7:15 PM <br><b>Meeting Type","8:00 PM <b>to","9:00 PM <br><b>Meeting Type","8:00 PM <b>to","9:00 PM <br><b>Meeting Type"];
var timesAlt = [];
var mIndex = [];

for (var j = 0;j< times.length; j++){
    mIndex[j] = times[j].indexOf("M",1);//(","||"-",1);
    timesAlt[j] = times[j].substring(0,mIndex[j]+1);
    console.log(mIndex[j]);
}

console.log(timesAlt);

////even index values are start times, odd indexes are finish times
fs.writeFileSync('/home/ubuntu/workspace/week5/data/meetingTimes.txt', JSON.stringify(timesAlt));



// // // eachSeries in the async module iterates over an array and operates on each item in the array in series
// async.eachSeries(addressesAlt, function(value, callback) {
//     console.log(value);
//     var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value.split(' ').join('+') + '&key=' + apiKey;
//     var thisMeeting = new Object;
//     thisMeeting.address = value;
//     request(apiRequest, function(err, resp, body) {
//         if (err) {throw err;}
//         thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
//         meetingsData.push(thisMeeting);
//     });
//     setTimeout(callback, 1500);
// }, function() {
//     console.log(meetingsData);
//     fs.writeFileSync('/home/ubuntu/workspace/week5/data/meetingsData.txt', JSON.stringify(meetingsData));
// });