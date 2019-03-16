const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add','Add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list','List all notes')
.command('read', 'Read a Note', {
  title: titleOptions
})
.command('remove', 'remove a note', {
  title: titleOptions
})
.help()
.argv;

var user = os.userInfo();

command = argv._[0];


if(command==='add'){
  console.log('Adding note...');
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note Created');
    notes.logNote(note);

  }
  else{
    console.log('Note Title Take... Try New One.');
  }

}

else if(command==='list'){
  console.log('Listing All Notes');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
}

else if(command==='read'){
  console.log('Reading Note');

  var note = notes.read(argv.title);
  if(note){
  notes.logNote(note);
  }else{
    console.log('Note Not Found!');
  }

}

else if(command==='remove'){
  console.log('Removing a note');
  var noteRemoved = notes.remove(argv.title);

  var message = noteRemoved? 'Not Was Removed' : 'Note Not Found';
  console.log(message);
}
else{
  console.log('INVALID COMMAND... PLEASE TRY AGAIN WITH A CORRECT ONE!');
}
