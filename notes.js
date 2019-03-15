console.log('Starting notes.js');
const fs = require('fs');

//Refactored Version of fetch and saveNotes

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e){
     return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title,body) => {

  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Grabbing Notes...');
};

var read = (title) => {
  console.log('Reading a Note...', title);
};

var remove = (title) => {
  console.log('Note Removed Successfully...', title);
};
module.exports =  {
addNote,
getAll,
read,
remove
};
