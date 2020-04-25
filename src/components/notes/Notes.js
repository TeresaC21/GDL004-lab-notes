import React, { useState }  from 'react';

import { noteFB } from '../firebase/helper-firebaseAuth';

const Notes = ({ note, showModalAddNote }) => { // note from component Listnote and showModal from Home
 console.log(note);
  const { id, title, description } = note;
   const [currentNote, setCurrentNote] = useState({
     title,
      description
   });

  const onEditFB = () => {
    noteFB().doc(id).set({
      ...currentNote,
      description: currentNote.description
    });
  };                   

  const onDeleteFB = () => {
    noteFB().doc(id).delete();
  };
  const onChangeNew = e => {
    setCurrentNote({
      ...currentNote,
      description: e.target.value
    });
  };  

  return (
      <div className="col s12 m6 ">
        <div className="card opacity-tc actionBtnContainer">
          <div className="card-content textNote">

          <span className="card-title textNote">{currentNote.title}</span>
            {/* <p>{note.note}</p> */}
    <input value={currentNote.description} onChange={onChangeNew} />  
          </div>

          <div className="card-action">
          
          <a href="#!" className="actionBtn ml70" onClick={onDeleteFB}>delete</a> 
            <a href="#!" className="actionBtn" onClick={onEditFB}>edit</a> 
          </div>
        </div>
      </div>
  );
};
 
export default Notes;


  // ************** New Notes that add the COMPONENT ListNote ***************
  // State for project
/*   const [newNote, setNewNote] = useState({
    note: ''
  })
  const [error, setError] = useState(false)
  // Read content the input
  const onChangeNote = e => {
    setNewNote({
      ...newNote,
      [e.target.name] : e.target.value
    })
  }
  const {note} = newNote; // extract name of project

  // When user save note
  const onSubmitNote = e => {
    e.preventDefault();

    // validate note
    if(note.trim() === ''){
      setError(true);
      return;
    }
    // Delete mesage error
      setError(false)

    // I THINK ------ ID HERE PUT ID FIREBASE 
    newNote.id = uuidv4();
    //console.log(user);

    
  // Create note

  //add the state

   // reload the form


  } */

/* {error ? <p className="card-panel lighten-5 z-depth-1 backgrounOpacity textColorsBar mb3">field are required</p>
              : null}

            <form 
            onSubmit={onSubmitNote} 
            >
            <input
            type="text"
            name="note"
            value={note}
            onChange={onChangeNote}
            />
            <button
              className="btn waves-effect waves-light deep-orange"
              type="submit"
              name="action"
              >Save
            </button> 
            </form> */