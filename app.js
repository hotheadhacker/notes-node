console.log("Starting App");
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');


const argv = yargs.argv;

var user = os.userInfo();

command = argv._[0];

console.log(process.argv);
console.log(argv);

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
  notes.getAll();
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
