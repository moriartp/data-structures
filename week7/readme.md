$ ./mongod //start mongodb
$ mongo //shell access

#sample aggregate command
db.aa_meetings.aggregate( [ { $match: { day: "Sunday"} }, { $group: { _id: "address" } } ] )

db aa
collection aa_meetings