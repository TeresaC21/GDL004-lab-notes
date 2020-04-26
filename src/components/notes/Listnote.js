import React, { Fragment, useState, useEffect } from 'react';

// Helper firebase
import { noteFB } from '../firebase/helper-firebaseAuth';

// components
import Notes from './Notes' // I still dont not it can be notes or notesinput
import Notesinput from './Notesinput'

const Listnote = ({ modalInput, hideModalAddNote }) => {  // props of components Home
  
  const [notes, setNotes] = useState([]);

  // Function take notes actually and add the new
  const createNote = (note) => {
    // get note created in component Noteinput that pass like prop //setNotes([...notes, note]);
  };

// Insert in list all notes of firestore
 useEffect(() => {
    return noteFB().onSnapshot((snapshot) => {
      const noteData = [];
      snapshot.forEach(doc => 
        noteData.push(({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description
        })));
      setNotes(noteData);
      console.log(noteData) 
  })
 }, []); 

  return (
    <Fragment>
      {modalInput ? <Notesinput createNote={createNote} hideModalAddNote={hideModalAddNote} /> : null}
      <div>
        <h5 className="textPurple">LIST NOTES</h5>
        {notes.map((note) => {
          return (
            <Notes
             key={note.id} 
             note={note}
             />
          )
        })}
      </div>
    </Fragment>
  );
};
 
export default Listnote;

  /* const data = await noteFB().get();
   setNotes(data.docs.map(doc => ({...doc.data(), id: doc.id}))); */
  //}
   //searchData();
  // return unsubscribe();