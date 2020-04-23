import React, { Fragment, useState, useEffect } from 'react';

import { noteFB } from '../firebase/helper-firebaseAuth';

// components
import Notes from './Notes' // I still dont not it can be notes or notesinput
import Notesinput from './Notesinput'

const Listnote = ({ modalInput, hideModalAddNote }) => {  // props of components Home
  // List of notes
  const [notes, setNotes] = useState([]);

  // Function take notes actually and add the new
  const createNote = (note) => {
    setNotes([...notes, note]);
  };
console.log(notes);

// Insert in list all notes of firestore
useEffect(() => {
  const searchData = async () => {
   const data = await noteFB().get();
   setNotes(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  }
   searchData();
 }, []);

 /* useEffect(() => {
    noteFB().onSnapshot((snapshot) => {
      const newQuote = snapshot.docs.map((doc) =>({
          id: doc.id,
          ...doc.data() 
  }))
  setNotes([...notes, note, newQuote]);
  })  
}, [])  */

  return (
    <Fragment>
      {modalInput ? <Notesinput createNote={createNote} hideModalAddNote={hideModalAddNote} /> : null}
      <div>
        <h5 className="textPurple mlL">LIST NOTES</h5>
        {notes.map((note) => (
          <Notes
           key={note.id} 
           note={note}
           />
        ))}
        
      </div>
    </Fragment>
  );
};
 
export default Listnote;

/*  const notes = [{
    note: '', status: true
}]; */
/* {notes.length === 0
    ? (<li><h5>Notes Empty</h5></li>)
    : notes.map(note =>()) } */