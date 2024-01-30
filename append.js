console.log("Starting append.js")

const fs = require('fs')
const os = require('os')
const _ = require('lodash')

const notes = require("./notes")

// const { fileURLToPath } = require('url')

// var user = os.userInfo()

// fs.appendFile("Greetings.txt", "Hello " + user.username + " !\n", function(err) {
//     if(err) {
//         console.log("Failed to write to the file")
//     }
//     else{
//         console.log("Sucessfully written to file")
//     }
// })


// using a back tick instead of concatenation

// fs.appendFile("Greetings.txt", `Hello ${user.username} ! You are ${notes.age}`, function(error) {
//     if(error){
//         console.log("An error has occured")
//     }
//     else{
//         console.log("Successfully written to the file")
//     }
// })
// console.log(user)



// var sum = notes.add(2,-9)
// console.log(`Result: ${sum}`)


// using lodash utility .isString
// console.log(_.isString(true))
// console.log(_.isString('Astrie'))


// using lodash utility .uniq

// var filteredArray = _.uniq([1,2,"Astrie","Astrie",1,45]);
// console.log(filteredArray)



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
