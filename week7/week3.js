var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');

var apiKey = 'AIzaSyAN8M-vIsMaznmXFIlKRaoulhmZZ0HYnfA'; //process.env.GMAKEY;

var meetingsData = [];
var addresses = JSON.parse(fs.readFileSync('/home/ubuntu/workspace/week7/data/09meetingsArray.txt'));

// Require modules;
var cheerio = require('cheerio');

// Declare Variables
var content = fs.readFileSync('/home/ubuntu/workspace/week6/data/m07meetings.txt');
var $ = cheerio.load(content);
var apiKey = process.env.GMAKEY;
var meetings = [];



function fixAddresses(address) {
    var newAddress = address.substring(0, address.indexOf(',')) + ', New York, NY';
    return newAddress;
    address.address = $(elem).find('td').eq(0).html().split('\n')[3].split(',')[0].split('- ')[0].split('(')[0].trim() + ', New York, NY';
    // meeting.addressALT = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(', ')[0].trim() + ', New York, NY';           //(",",1); 
    meeting.day = $(elem).find('td').eq(1).html().split('<b>')[1].trim().split('s ')[0].trim();
    meeting.startTime = $(elem).find('td').eq(1).html().split('</b> ')[1].split('M')[0].trim()+'M';
    meeting.endTime = $(elem).find('td').eq(1).html().split('</b> ')[2].trim().split('M')[0].trim()+"M";

    meetings.push(meeting);    
    
    
    
    
}

// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + fixAddresses(value).split(' ').join('+') + '&key=' + apiKey;
    var thisMeeting = new Object;
    thisMeeting.address = fixAddresses(value);
    thisMeeting.originalAddress = value;
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        if (JSON.parse(body).status != "ZERO_RESULTS") {
            thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
            thisMeeting.lat = JSON.parse(body).results[0].geometry.location;
            thisMeeting.lng = JSON.parse(body).results[0].geometry.location;
        }
        else {console.log(apiRequest);}
        meetingsData.push(thisMeeting);
    });
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('/home/ubuntu/workspace/week7/data/_09geocodedMeetingsArray.txt', JSON.stringify(meetingsData));
});