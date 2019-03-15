console.log('Starting notes.js');


var addNote = (title,body) => {
  console.log('Adding Note...',title,body);
}

var getAll = () => {
  console.log('Grabbing Notes...');
}

var read = (title) => {
  console.log('Reading a Note...', title);
}

var remove = (title) => {
  console.log('Note Removed Successfully...', title);
}
module.exports =  {
addNote,
getAll,
read,
remove
};
