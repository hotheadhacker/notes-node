// CONVERTING OBJ 2 STRING

// var obj = {
//   name: 'Salman'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);
 

//CONVERTING STRING TO OBJECT

// var personString = '{"name": "Salman", "age": 23}';
//
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person.age);

//EXPLORING MORE OF JSON IN NODE.JS

const fs = require('fs');

var originalNote = {
  title: "Some Title",
  body: "Some Body Stored Here"
};

//originalNoteString
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
