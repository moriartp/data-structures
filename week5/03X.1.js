var fs = require('fs');
var request = require('request'); // npm install request
var async = require('async'); // npm install async

// SETTING ENVIRONMENT VARIABLES (in Linux): 
// export NEW_VAR = ////NO SPACES
// printenv | grep NEW_VAR;
// var apiKey = process.env.GMAKEY;
// var apiKey = xxx;

var meetingsData = [];
// var addresses = fs.readFile('/home/ubuntu/workspace/week5/data/m07meetings.txt', callback);
var addresses = ["351 East 74th Street,  2nd Floor,","48 East 80th Street, 2nd Floor Library, Ring Bell Next to Sign.,","351 East 74th Street, 2nd Floor,","520 Park Avenue,","337 E. 74th St.,","1157 Lexington Avenue,","1393 York Avenue,","1393 York Avenue,","230 East 90th Street, Downstairs,","65 East 89th Street, Basement,","865 Madison Avenue, Basement,","1296 Lexington Avenue, Basement,","351 East 74th Street, Mazaryk Room,","1157 Lexington Avenue, 1st Floor,","351 East 74th Street, Mazaryk Room,","351 East 74th Street, 2nd Floor,","65 East 89th Street,","865 Madison Avenue,","65 East 89th Street - Rectory basement, \r\n\t\t\t\t\t\t10128","351 East 74th Street, 2nd Floor,","135 East 96th Street,","351 East 74th Street, 2nd Floor Kitchen,","2 East 90th Street,","1157 Lexington Avenue,","351 East 74th Street 2nd floor,","351 East 74th Street, 2nd Floor,","351 East 74th Street, 2nd Floor Chapel Room,","48 East 84th Street,","408 East 82nd Street,  Rectory,","351 East 74th Street, 2nd Floor Front Room,","351 East 74th Street,  2nd Floor - Front Room,","114 East 85th Street, Ramaz School Entrance,","220 East 76th Street,","351 East 74th Street, cafeteria, ground floor,","351 East 74th Street, 2nd Floor Kitchen,","865 Madison Avenue, 3rd Floor,","62 East 92nd Street, Basement,","351 East 74th Street, 2nd Floor Front Room,","420 East 87th Street, Basement,","593 Park Avenue,  5th Floor Library,","65 East 89th Street, Ring Red Buzzer, Chelsea Room,","865 Madison Avenue,  Basement,","Church of the Good Shepard, 543 Main St., Basement 10044,","413 East 79th Street,  Basement,","351 East 74th Street, Sanctuary,","310 East 67th Street, Auditorium,","331 E 70th St,","411 East 68th Street,","2 East 90th Street, Basement,","341 East 87th Street,  Choir Room (Ring Bell),","351 East 74th Street,  2nd Floor Museum Room,","351 East 74th Street, 2nd Floor Kitchen,","351 East 74th Street,  2nd Floor,  Masaryk Room,"];
var starts = ["7:30 AM","7:00 PM","6:00 PM","2:30 PM","7:15 PM","7:00 PM","7:00 PM","6:00 PM","6:30 PM","3:30 PM","6:15 PM","5:00 PM","7:15 AM","9:00 AM","7:30 PM","6:30 PM","8:00 PM","6:15 PM","6:15 PM","12:30 PM","6:30 PM","11:00 AM","7:00 PM","6:30 PM","7:00 PM","7:00 PM","11:00 AM","7:00 PM","3:15 PM","7:00 PM","7:15 PM","9:30 AM","6:30 PM","7:15 PM","9:30 AM","12:30 PM","6:45 PM","11:00 AM","7:00 PM","6:30 PM","6:30 PM","6:00 PM","6:30 PM","6:00 AM","9:15 AM","10:00 AM","10:00 AM","6:30 PM","12:00 PM","7:00 PM","6:15 PM","8:00 PM","8:00 PM"];
var ends = ["8:30 AM","8:00 PM","7:00 PM","3:30 PM","8:15 PM","8:00 PM","8:00 PM","7:00 PM","7:30 PM","4:30 PM","7:15 PM","5:45 PM","8:15 AM","10:00 AM","8:30 PM","7:30 PM","9:00 PM","7:15 PM","7:15 PM","1:30 PM","7:30 PM","12:00 PM","8:00 PM","7:30 PM","8:00 PM","8:00 PM","12:00 PM","8:30 PM","4:15 PM","8:00 PM","8:15 PM","10:30 AM","7:30 PM","8:15 PM","10:30 AM","1:30 PM","7:45 PM","12:00 PM","8:00 PM","7:30 PM","7:30 PM","7:00 PM","7:30 PM","7:00 AM","10:15 AM","11:00 AM","11:00 AM","7:30 PM","1:00 PM","8:00 PM","7:15 PM","9:00 PM","9:00 PM"];
var days = ["Saturday","Tuesday","Wednesday","Monday","Monday","Tuesday","Thursday","Saturday","Friday","Sunday","Tuesday","Sunday","Monday","Sunday","Friday","Friday","Friday","Friday","Monday","Tuesday","Wednesday","Saturday","Monday","Wednesday","Tuesday","Saturday","Thursday","Wednesday","Saturday","Monday","Monday","Wednesday","Monday","Monday","Saturday","Wednesday","Friday","Saturday","Wednesday","Wednesday","Thursday","Monday","Saturday","Tuesday","Saturday","Saturday","Sunday","Saturday","Tuesday","Friday","Wednesday","Thursday","Thursday"];

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

console.log(addressesAlt);

fs.writeFileSync('/home/ubuntu/workspace/week5/data/addressesAlt.txt', JSON.stringify(addressesAlt));

//______________________________________________________________

var dbName = 'aa';
var collName = 'meetings';

var fs = require('fs');

// Read the file that contains an array of objects to insert into the "meetings" collection in "aa" in MongoDB
var geocodedMeetingsArray = JSON.parse(fs.readFileSync('/home/ubuntu/workspace/week5/writeFile/meetingsData.txt'));

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

    var collection = db.collection(collName);

    // THIS IS WHERE THE DOCUMENTS ARE INSERTED IN THE meetings COLLECTION IN MONGO:
    collection.insert(geocodedMeetingsArray);
    collection.insert(starts)
    collection.insert(ends)
    collection.insert(starts)
    db.close();
    
}); //MongoClient.connect