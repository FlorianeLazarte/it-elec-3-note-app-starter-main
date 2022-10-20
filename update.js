const fs = require('fs');

const update = function(note,oldNote){
   let oNote = JSON.parse(oldNote);

   let newNote = oNote.map(function(n, index){

       if(n.id == note.id){
           n.title = note.title
           n.body = note.body
       }
           return n;
       
   })
       fs.writeFileSync('./note.txt',JSON.stringify(newNote));
   
}

module.exports = update;