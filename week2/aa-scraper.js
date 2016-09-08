var fs = require('fs');
var cheerio = require('cheerio');

var content = fs.readFileSync('/home/ubuntu/workspace/week2/UESAA.txt');

var $ = cheerio.load(content);

// // // STARTER CODE
// // Print to console: all reading assignments
// $('h4').each(function(i, elem) {
//     if ($(elem).text() == "Read") {
//         $(elem).next().find('li').each(function(i, elem) {
//             console.log($(elem).text());
//         });
//     }
// })

// Print to console: all reading assignments
$('td').each(function(i, elem) {
        $(elem).find('b').each(function(i, elem) {
            console.log($(elem).text());
        });
})