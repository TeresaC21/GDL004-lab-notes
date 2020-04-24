import React, { useState } from "react";
import { noteFB } from '../firebase/helper-firebaseAuth';

const Notesinput = ({ createNote, hideModalAddNote }) => { // 
  // State for project
  const [newNote, setNewNote] = useState({
    note: "",
  });
  const [error, setError] = useState(false);

  // Read content the input
  const onChangeNote = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };
  const { note } = newNote; // extract note of project

  // When user save note
  const onSubmitNote = (e) => {
    e.preventDefault();
    // validate note
    if (note.trim() === "") {
      setError(true);
      return;
    }
    // Delete mesage error
    setError(false);
    // Create Note in Firestore
    noteFB().add(newNote)
     .then(function(docRef) {
       const noteData = docRef.id;
      createNote(noteData);
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    }); 
    // reload the form
    setNewNote({
      note: "",
    });
    // Modal
    hideModalAddNote();
  };

  const handleClickModal = (e) => {
    if(e.target === e.currentTarget) {
      hideModalAddNote();
    }
  }

  return (
    <div className="modalInput" onClick={handleClickModal}>
    <div className="card backgroundModal animated fadeInDown">
      <span className="card-title textColorLogo ml3a">New Note</span>
      <div className="card-image">
        <a href="#!" className="btn-floating halfway-fab waves-effect waves-light  deep-orange accent-2 mba7">
          <i className="material-icons">edit</i>
        </a>
        {/*  <img src="images/sample-1.jpg" /> */}
        <a href="#!" className="btn-floating halfway-fab waves-effect waves-light red mr4 mba7">
          <i className="material-icons">delete</i>
        </a>
      </div>
      <div className="card-content textColorLogo">
       
        {error ? (
          <p className="card-panel lighten-5 z-depth-1 backgrounOpacity textColorsBar mb3">
            field are required
          </p>
        ) : null}
        <form onSubmit={onSubmitNote}>
          <textarea
            className="materialize-textarea textColorLogo"
            data-length="120"
            name="note"
            value={note}
            onChange={onChangeNote}
          />
          <button
            className="btn waves-effect waves-light deep-orange ml3a mta1"
            type="submit"
            name="action"
          >
            Save
          </button>
        </form>
      </div>
      <div className="card-action">
        
      </div>
    </div>
    </div>
  );
};

export default Notesinput;
