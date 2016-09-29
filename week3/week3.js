var fs = require('fs');
var request = require('request'); // npm install request
var async = require('async'); // npm install async

// SETTING ENVIRONMENT VARIABLES (in Linux): 
// export NEW_VAR = "plsace-API=string-here";
// printenv | grep NEW_VAR;
// var apiKey = process.env.GMAKEY;
var apiKey = 'AIzaSyCQR8lPd8IwfdC0LPaSJ8FoX2jC1NPizns';

var meetingsData = [];
var addresses = ["351 East 74th Street,  2nd Floor,","48 East 80th Street, 2nd Floor Library, Ring Bell Next to Sign.,","351 East 74th Street, 2nd Floor,","520 Park Avenue,","337 E. 74th St.,","1157 Lexington Avenue,","1393 York Avenue,","1393 York Avenue,","230 East 90th Street, Downstairs,","65 East 89th Street, Basement,","865 Madison Avenue, Basement,","1296 Lexington Avenue, Basement,","351 East 74th Street, Mazaryk Room,","1157 Lexington Avenue, 1st Floor,","351 East 74th Street, Mazaryk Room,","351 East 74th Street, 2nd Floor,","65 East 89th Street,","865 Madison Avenue,","65 East 89th Street - Rectory basement, \r\n\t\t\t\t\t\t10128","351 East 74th Street, 2nd Floor,","135 East 96th Street,","351 East 74th Street, 2nd Floor Kitchen,","2 East 90th Street,","1157 Lexington Avenue,","351 East 74th Street 2nd floor,","351 East 74th Street, 2nd Floor,","351 East 74th Street, 2nd Floor Chapel Room,","48 East 84th Street,","408 East 82nd Street,  Rectory,","351 East 74th Street, 2nd Floor Front Room,","351 East 74th Street,  2nd Floor - Front Room,","114 East 85th Street, Ramaz School Entrance,","220 East 76th Street,","351 East 74th Street, cafeteria, ground floor,","351 East 74th Street, 2nd Floor Kitchen,","865 Madison Avenue, 3rd Floor,","62 East 92nd Street, Basement,","351 East 74th Street, 2nd Floor Front Room,","420 East 87th Street, Basement,","593 Park Avenue,  5th Floor Library,","65 East 89th Street, Ring Red Buzzer, Chelsea Room,","865 Madison Avenue,  Basement,","Church of the Good Shepard, 543 Main St., Basement 10044,","413 East 79th Street,  Basement,","351 East 74th Street, Sanctuary,","310 East 67th Street, Auditorium,","331 E 70th St,","411 East 68th Street,","2 East 90th Street, Basement,","341 East 87th Street,  Choir Room (Ring Bell),","351 East 74th Street,  2nd Floor Museum Room,","351 East 74th Street, 2nd Floor Kitchen,","351 East 74th Street,  2nd Floor,  Masaryk Room,"];
var addressesAlt = [];
var commaIndex = [];

for (var j = 0;j< addresses.length; j++){
    commaIndex[j] = addresses[j].indexOf(",",1);//(","||"-",1);
    addressesAlt[j] = addresses[j].substring(0,commaIndex[j])+", New York, NY";
    // console.log(commaIndex[j]);
}
var problemChildA = addressesAlt.indexOf("Church of the Good Shepard, New York, NY",1);
var problemChildB = addressesAlt.indexOf("65 East 89th Street - Rectory basement, New York, NY",1);
var problemChildC = addressesAlt.indexOf("351 East 74th Street 2nd floor, New York, NY",1);

addressesAlt[problemChildA] = '543 Main Street, New York, NY';
addressesAlt[problemChildB] = '65 East 89th Street, New York, NY';
addressesAlt[problemChildC] = '351 East 74th Street, New York, NY';

// console.log(addressesAlt);

fs.writeFileSync('/home/ubuntu/workspace/week3/addressesAlt.txt', JSON.stringify(addressesAlt));



// // eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addressesAlt, function(value, callback) {
    console.log(value);
    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value.split(' ').join('+') + '&key=' + apiKey;
    var thisMeeting = new Object;
    thisMeeting.address = value;
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
        meetingsData.push(thisMeeting);
    });
    setTimeout(callback, 1500);
}, function() {
    console.log(meetingsData);
    fs.writeFileSync('/home/ubuntu/workspace/week3/data/aa-latLong.txt', JSON.stringify(meetingsData));
});