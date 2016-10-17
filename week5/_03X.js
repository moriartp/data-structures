var fs = require('fs');
var request = require('request'); // npm install request
var async = require('async'); // npm install async

// SETTING ENVIRONMENT VARIABLES (in Linux): 
// export NEW_VAR = ////NO SPACES
// printenv | grep NEW_VAR;
var apiKey = process.env.NEW_VAR;

var meetingsData = [];
// var addresses = fs.readFile('/home/ubuntu/workspace/week5/data/m07meetings.txt', callback);
var addressesAlt = ["351 East 74th Street, New York, NY","48 East 80th Street, New York, NY","351 East 74th Street, New York, NY","520 Park Avenue, New York, NY","337 E. 74th St., New York, NY","1157 Lexington Avenue, New York, NY","1393 York Avenue, New York, NY","1393 York Avenue, New York, NY","230 East 90th Street, New York, NY","65 East 89th Street, New York, NY","865 Madison Avenue, New York, NY","1296 Lexington Avenue, New York, NY","351 East 74th Street, New York, NY","1157 Lexington Avenue, New York, NY","351 East 74th Street, New York, NY","351 East 74th Street, New York, NY","65 East 89th Street, New York, NY","865 Madison Avenue, New York, NY","65 East 89th Street, New York, NY","351 East 74th Street, New York, NY","135 East 96th Street, New York, NY","351 East 74th Street, New York, NY","2 East 90th Street, New York, NY","1157 Lexington Avenue, New York, NY","351 East 74th Street, New York, NY","351 East 74th Street, New York, NY","351 East 74th Street, New York, NY","48 East 84th Street, New York, NY","408 East 82nd Street, New York, NY","351 East 74th Street, New York, NY","351 East 74th Street, New York, NY","114 East 85th Street, New York, NY","220 East 76th Street, New York, NY","351 East 74th Street, New York, NY","351 East 74th Street, New York, NY","865 Madison Avenue, New York, NY","62 East 92nd Street, New York, NY","351 East 74th Street, New York, NY","420 East 87th Street, New York, NY","593 Park Avenue, New York, NY","65 East 89th Street, New York, NY","865 Madison Avenue, New York, NY","543 Main Street, New York, NY","413 East 79th Street, New York, NY","351 East 74th Street, New York, NY","310 East 67th Street, New York, NY","331 E 70th St, New York, NY","411 East 68th Street, New York, NY","2 East 90th Street, New York, NY","341 East 87th Street, New York, NY","351 East 74th Street, New York, NY","351 East 74th Street, New York, NY","351 East 74th Street, New York, NY"];
var starts = ["7:30 AM","7:00 PM","6:00 PM","2:30 PM","7:15 PM","7:00 PM","7:00 PM","6:00 PM","6:30 PM","3:30 PM","6:15 PM","5:00 PM","7:15 AM","9:00 AM","7:30 PM","6:30 PM","8:00 PM","6:15 PM","6:15 PM","12:30 PM","6:30 PM","11:00 AM","7:00 PM","6:30 PM","7:00 PM","7:00 PM","11:00 AM","7:00 PM","3:15 PM","7:00 PM","7:15 PM","9:30 AM","6:30 PM","7:15 PM","9:30 AM","12:30 PM","6:45 PM","11:00 AM","7:00 PM","6:30 PM","6:30 PM","6:00 PM","6:30 PM","6:00 AM","9:15 AM","10:00 AM","10:00 AM","6:30 PM","12:00 PM","7:00 PM","6:15 PM","8:00 PM","8:00 PM"];
var ends = ["8:30 AM","8:00 PM","7:00 PM","3:30 PM","8:15 PM","8:00 PM","8:00 PM","7:00 PM","7:30 PM","4:30 PM","7:15 PM","5:45 PM","8:15 AM","10:00 AM","8:30 PM","7:30 PM","9:00 PM","7:15 PM","7:15 PM","1:30 PM","7:30 PM","12:00 PM","8:00 PM","7:30 PM","8:00 PM","8:00 PM","12:00 PM","8:30 PM","4:15 PM","8:00 PM","8:15 PM","10:30 AM","7:30 PM","8:15 PM","10:30 AM","1:30 PM","7:45 PM","12:00 PM","8:00 PM","7:30 PM","7:30 PM","7:00 PM","7:30 PM","7:00 AM","10:15 AM","11:00 AM","11:00 AM","7:30 PM","1:00 PM","8:00 PM","7:15 PM","9:00 PM","9:00 PM"];
var days = ["Saturday","Tuesday","Wednesday","Monday","Monday","Tuesday","Thursday","Saturday","Friday","Sunday","Tuesday","Sunday","Monday","Sunday","Friday","Friday","Friday","Friday","Monday","Tuesday","Wednesday","Saturday","Monday","Wednesday","Tuesday","Saturday","Thursday","Wednesday","Saturday","Monday","Monday","Wednesday","Monday","Monday","Saturday","Wednesday","Friday","Saturday","Wednesday","Wednesday","Thursday","Monday","Saturday","Tuesday","Saturday","Saturday","Sunday","Saturday","Tuesday","Friday","Wednesday","Thursday","Thursday"];


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addressesAlt, function(value, callback) {
    console.log(value);
    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value.split(' ').join('+') + '&key=' + apiKey;
    var thisMeeting = new Object;
    thisMeeting.address = value;
    
    // thisMeeting.start = JSON.parse(starts);
    // thisMeeting.end = ends;
    // thisMeeting.day = days;
    request(apiRequest, function(err, resp, body) {
        console.log(resp);
        // if (err) {throw err;}
        // thisMeeting.latLong = JSON.parse(body).results[1].geometry.location;
        // // thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
        // // thisMeeting.lat = JSON.parse(body).results[0].latLong.geometry.location;
        // // thisMeeting.lon = JSON.parse(body).lon[1].geometry.location;        
        
        // // thisMeeting.start = JSON.parse(body).results[0].starts;
        // // thisMeeting.end = JSON.parse(body).results[0].ends;
        // // thisMeeting.day = JSON.parse(body).results[0].days;
        // meetingsData.push(thisMeeting);
    });
    setTimeout(callback, 1300);
}, function() {
    // console.log(meetingsData);
    // fs.writeFileSync('/home/ubuntu/workspace/week5/data/meetingsDataALL.txt', JSON.stringify(meetingsData));
});

//______________________________________________________