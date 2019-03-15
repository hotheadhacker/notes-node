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
  notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note Created');
    console.log(_______________________________);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

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
  notes.read(argv.title);
}

else if(command==='remove'){
  console.log('Removing a note');
  notes.remove(argv.title);
}
else{
  console.log('INVALID COMMAND... PLEASE TRY AGAIN WITH A CORRECT ONE!');
}
