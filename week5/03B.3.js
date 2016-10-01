var fs = require('fs');
var request = require('request'); // npm install request
// var async = require('async'); // npm install async

// SETTING ENVIRONMENT VARIABLES (in Linux): 
// export NEW_VAR = "api key goes here";////NO SPACES
// printenv | grep NEW_VAR;
// var apiKey = process.env.GMAKEY;



var meetingsData = [];
// var addresses = fs.readFile('/home/ubuntu/workspace/week5/data/m07meetings.txt', callback);
var times = ["Saturdays From</b>  7:30 AM","Tuesdays From</b>  7:00 PM","Wednesdays From</b>  6:00 PM","Mondays From</b>  2:30 PM","Mondays From</b>  7:15 PM","Tuesdays From</b>  7:00 PM","Thursdays From</b>  7:00 PM","Saturdays From</b>  6:00 PM","Fridays From</b>  6:30 PM","Sundays From</b>  3:30 PM","Tuesdays From</b>  6:15 PM","Sundays From</b>  5:00 PM","Mondays From</b>  7:15 AM","Sundays From</b>  9:00 AM","Fridays From</b>  7:30 PM","Fridays From</b>  6:30 PM","Fridays From</b>  8:00 PM","Fridays From</b>  6:15 PM","Mondays From</b>  6:15 PM","Tuesdays From</b>  12:30 PM","Wednesdays From</b>  6:30 PM","Saturdays From</b>  11:00 AM","Mondays From</b>  7:00 PM","Wednesdays From</b>  6:30 PM","Tuesdays From</b>  7:00 PM","Saturdays From</b>  7:00 PM","Thursdays From</b>  11:00 AM","Wednesdays From</b>  7:00 PM","Saturdays From</b>  3:15 PM","Mondays From</b>  7:00 PM","Mondays From</b>  7:15 PM","Wednesdays From</b>  9:30 AM","Mondays From</b>  6:30 PM","Mondays From</b>  7:15 PM","Saturdays From</b>  9:30 AM","Wednesdays From</b>  12:30 PM","Fridays From</b>  6:45 PM","Saturdays From</b>  11:00 AM","Wednesdays From</b>  7:00 PM","Wednesdays From</b>  6:30 PM","Thursdays From</b>  6:30 PM","Mondays From</b>  6:00 PM","Saturdays From</b>  6:30 PM","Tuesdays From</b>  6:00 AM","Saturdays From</b>  9:15 AM","Saturdays From</b>  10:00 AM","Sundays From</b>  10:00 AM","Saturdays From</b>  6:30 PM","Tuesdays From</b>  12:00 PM","Fridays From</b>  7:00 PM","Wednesdays From</b>  6:15 PM","Thursdays From</b>  8:00 PM","Thursdays From</b>  8:00 PM"];
var timesAlt = [];
var mIndex = [];

for (var j = 0;j< times.length; j++){
    mIndex[j] = times[j].indexOf("y",1);//(","||"-",1);
    timesAlt[j] = times[j].substring(0,mIndex[j]+1);
    console.log(mIndex[j]);
}

console.log(timesAlt);

////even index values are start times, odd indexes are finish times
fs.writeFileSync('/home/ubuntu/workspace/week5/data/meetingTimesDAY.txt', JSON.stringify(timesAlt));



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