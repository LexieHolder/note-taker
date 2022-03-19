const fs = require("fs");
const path = require("path");


//function to create a new note
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    //notes to db
    fs.writeFileSync(
        path.join(__dirname, '../../db/'),
        //notes to notes array in db
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
}

//export note to db
module.exports = {
    createNote,
    updateDb,
}

//currently not working, need check zookeepr lib