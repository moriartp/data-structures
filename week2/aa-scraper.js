// var fs = require('fs');
// var cheerio = require('cheerio');
// var content = fs.readFileSync('/home/ubuntu/workspace/week2/UESAA.html');
// var $ = cheerio.load(content);

// // // // STARTER CODE
// // // Print to console: all reading assignments
// // $('h4').each(function(i, elem) {
// //     if ($(elem).text() == "Read") {
// //         $(elem).next().find('li').each(function(i, elem) {
// //             console.log($(elem).text());
// //         });
// //     }
// // })

// // // // V1 SCRAPED Bs
// // // Print to console: all reading assignments
// // $('td').each(function(i, elem) {
// //         $(elem).find('b').each(function(i, elem) {
// //             console.log($(elem).text());
// //         });
// // })

// // // V1 SCRAPED Bs
// // // Print to console: all reading assignments
// // $('tbody').each(function(i, elem) {
// //         $(elem).find('tr').each(function(i, elem) {
// //             console.log($(elem).text());
// //         });
// // })

// // // V1 SCRAPED Bs
// // Print to console: all reading assignments
// $('tbody').each(function(i, elem) {
//         $(elem).find('td').each(function(i, elem) {
//             console.log($(elem).text());
//         });
// });

/////////////////////////////////////////////////////////////////////////

var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio

var content = fs.readFileSync('/home/ubuntu/workspace/week2/UESAA.html');
var meetings = [];

var $ = cheerio.load(content);

$('tbody').find('tr').each(function(i, elem){
        meetings.push($(elem).find('td').eq(0).html().split('<br>')[2].trim());
    });

console.log(meetings.length); // print number of meetings in meetings array
fs.writeFileSync('/home/ubuntu/workspace/week2/meetingsArray.txt', JSON.stringify(meetings));

