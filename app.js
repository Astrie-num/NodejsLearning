console.log("Starting append.js")

const fs = require('fs')
const os = require('os')
const _ = require('lodash')

const notes = require("./notes")

console.log(process.argv)
var command = process.argv[2]
console.log('Command : ' + command)


if (command == 'add') {
    console.log("Adding a new note")
}
else if (command == 'list') {
    console.log("Listing notes")
}
else if (command == 'read') {
    console.log("Reading all the notes")
}
else if (command == 'delete') {
    console.log("Deleting a note")
}
else {
    console.log("That command does not exist")
}
