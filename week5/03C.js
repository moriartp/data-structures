var fs = require('fs');
var request = require('request'); // npm install request
var async = require('async'); // npm install async

// SETTING ENVIRONMENT VARIABLES (in Linux): 
// export NEW_VAR = "api key goes here";////NO SPACES
// printenv | grep NEW_VAR;
// var apiKey = process.env.GMAKEY;



var meetingsData = [];
// var addresses = fs.readFile('/home/ubuntu/workspace/week5/data/m07meetings.txt', callback);
var starts = ["7:30 AM","7:00 PM","6:00 PM","2:30 PM","7:15 PM","7:00 PM","7:00 PM","6:00 PM","6:30 PM","3:30 PM","6:15 PM","5:00 PM","7:15 AM","9:00 AM","7:30 PM","6:30 PM","8:00 PM","6:15 PM","6:15 PM","12:30 PM","6:30 PM","11:00 AM","7:00 PM","6:30 PM","7:00 PM","7:00 PM","11:00 AM","7:00 PM","3:15 PM","7:00 PM","7:15 PM","9:30 AM","6:30 PM","7:15 PM","9:30 AM","12:30 PM","6:45 PM","11:00 AM","7:00 PM","6:30 PM","6:30 PM","6:00 PM","6:30 PM","6:00 AM","9:15 AM","10:00 AM","10:00 AM","6:30 PM","12:00 PM","7:00 PM","6:15 PM","8:00 PM","8:00 PM"];
var ends = ["8:30 AM","8:00 PM","7:00 PM","3:30 PM","8:15 PM","8:00 PM","8:00 PM","7:00 PM","7:30 PM","4:30 PM","7:15 PM","5:45 PM","8:15 AM","10:00 AM","8:30 PM","7:30 PM","9:00 PM","7:15 PM","7:15 PM","1:30 PM","7:30 PM","12:00 PM","8:00 PM","7:30 PM","8:00 PM","8:00 PM","12:00 PM","8:30 PM","4:15 PM","8:00 PM","8:15 PM","10:30 AM","7:30 PM","8:15 PM","10:30 AM","1:30 PM","7:45 PM","12:00 PM","8:00 PM","7:30 PM","7:30 PM","7:00 PM","7:30 PM","7:00 AM","10:15 AM","11:00 AM","11:00 AM","7:30 PM","1:00 PM","8:00 PM","7:15 PM","9:00 PM","9:00 PM"];
var days = ["Saturday","Tuesday","Wednesday","Monday","Monday","Tuesday","Thursday","Saturday","Friday","Sunday","Tuesday","Sunday","Monday","Sunday","Friday","Friday","Friday","Friday","Monday","Tuesday","Wednesday","Saturday","Monday","Wednesday","Tuesday","Saturday","Thursday","Wednesday","Saturday","Monday","Monday","Wednesday","Monday","Monday","Saturday","Wednesday","Friday","Saturday","Wednesday","Wednesday","Thursday","Monday","Saturday","Tuesday","Saturday","Saturday","Sunday","Saturday","Tuesday","Friday","Wednesday","Thursday","Thursday"];

// // eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(starts, function(value, callback) {
    console.log(value);
    var thisMeeting = new Object;
    thisMeeting.start = value;
    // request(apiRequest, function(err, resp, body) {
    //     if (err) {throw err;}
    //     thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
        meetingsData.push(thisMeeting);
    // });
    // setTimeout(callback, 1500);
}, function() {
    console.log(meetingsData);
    fs.writeFileSync('/home/ubuntu/workspace/week5/data/meetingsData1.txt', JSON.stringify(meetingsData));
});