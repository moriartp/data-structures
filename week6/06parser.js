// Require modules
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var async = require('async');
var asyncEachObject = require('async-each-object');

// Declare Variables
var content = fs.readFileSync('/home/ubuntu/workspace/week1/data/aa07.txt');
var $ = cheerio.load(content);
var apiKey = process.env.GMAKEY;
var meetings = [];

// Select table element and loop through table's row elements
$('tbody tr').each(function(i, elem) {
    // Split each meeting into an array to be parsed, declare as 'raw' 
    var raw = $(elem).find('td').eq(1).html().replace('\r\n                    \t\t\r\n\t\t\t\t\t', '').split('<br>\r\n                    \t<br>');
    // console.log(raw);
    for (var i = 0; i < raw.length; i++) {
        // Ignore items which are blank (because the split function also ropes the whitespace that comes after the split into the array)
        if (raw[i] !== '') {
            // Further cleaning up - remove new line, carriage return, tab characters, forward slashes, <br>s, and <b>s
            var text = raw[i].replace(/[\r\n\t\/]/g, '').replace(/(<br>)/g, '').replace(/(<b>)/g, '');
            console.log(text);
            // Declare meeting object to hold meeting info
            var meeting = new Object;
            // Assign the info to the object
            meeting.address = $(elem).find('td').eq(0).html().split('\n')[3].split(',')[0].split('- ')[0].split('(')[0].trim() + ', New York, NY';
            // meeting.addressALT = $(elem).find('td').eq(0).html().split('<br>')[2].trim().split(', ')[0].trim() + ', New York, NY';           //(",",1); 
            meeting.day = $(elem).find('td').eq(1).html().split('<b>')[1].trim().split('s ')[0].trim();
            meeting.startTime = $(elem).find('td').eq(1).html().split('</b> ')[1].split('M')[0].trim()+'M';
            meeting.endTime = $(elem).find('td').eq(1).html().split('</b> ')[2].trim().split('M')[0].trim()+"M";

            meetings.push(meeting);
            console.log(meetings);
        }
    }
});


// Cycle through the object (using async.echObject instead of async.eachSeries) and request for each meeting's latLong using GMAPS API
async.eachObject(meetings, function(value, key, callback) {
    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value.address.split(' ').join('+') + '&key=' + apiKey;
    request(apiRequest, function(err, resp, body) {
        if (err) { throw err; }
        // Assign latLong data to current meeting object
        value.latLong = JSON.parse(body).results[0].geometry.location;
        value.lat = JSON.parse(body).results[0].geometry.location;
        value.lon = JSON.parse(body).results[0].geometry.location;
    });
    // Not sure but I think the the callback delay isn't working because the data came out immediately
    setTimeout(callback, 2000);
}, function() {
    console.log(meetings);
    // Write the meetings data to output.txt
    fs.writeFileSync('/home/ubuntu/workspace/week7/_09meetingsOutput.txt', JSON.stringify(meetings));
});
