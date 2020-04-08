import React, { Fragment, useState } from 'react';
import Notes from './Notes' // I still dont not it can be notes or notesinput
import Notesinput from './Notesinput'

const Listnote = () => {
   
// List of notes
const [notes, setNotes] = useState([])

// Function take notes actually and add the new
const createNote = note => {
   setNotes([
       ...notes,  note
   ])   
}
    return (
    <Fragment>
        <ul> 
               <Notesinput
                createNote={createNote}
                />
        </ul>
        <div>
            <h3>LIST NOTES</h3>
            {notes.map(note => (
                <Notes
                key={note.id}
                note={note}
                />
            ))}
        </div>
    </Fragment>
    );
}
 
export default Listnote;

/*  const notes = [{
    note: '', status: true
}]; */
/* {notes.length === 0
    ? (<li><h5>Notes Empty</h5></li>)
    : notes.map(note =>()) } */