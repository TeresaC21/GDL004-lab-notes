import React, { useState, useContext } from "react";
import { noteFB } from '../firebase/helper-firebaseAuth';
import {AuthContext} from '../auth/Auth';

const Notesinput = ({ createNote, hideModalAddNote }) => { // 

  const { userCurrent } = useContext(AuthContext);

  // State for project
  const [newNote, setNewNote] = useState({ title: "", description: "" });
  const [error, setError] = useState(false);

  // Read content the input
  const onChangeNote = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };
  const { title, description } = newNote; // extract note of project

  // When user save note
  const onSubmitNote = (e) => {
    e.preventDefault();
    // validate note
    if (description.trim() === "" || title.trim() === "") {
      setError(true);
      return;
    }
    // Delete mesage error
    setError(false);

    // Create Note in Firestore
    noteFB().add({
      ...newNote,
      userId: userCurrent.uid,
    })
     .then(function(docRef) {
       const noteData = {
         title,
         description,
         id: docRef.id,
         userId: userCurrent.uid
        }
      createNote(noteData);
      //console.log("Document written with ID: ", noteData);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    }); 
    
    // reload the form
    setNewNote({
      description: "",
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
        <form onSubmit={onSubmitNote} autoComplete="off">
          <div className="card-content textColorLogo">
            <span className="card-title textColorLogo">New Note</span>
            <div className="card-image">
              <a
                role="button"
                tabIndex="0"
                className="btn-floating halfway-fab waves-effect waves-light  deep-orange accent-2 mba7"
              >
                <i className="material-icons">star</i>
              </a>
            </div>

            {error ? (
              <p className="card-panel lighten-5 z-depth-1 backgrounOpacity textColorsBar mb3">
                field are required
              </p>
            ) : null}
            <div className="row">
              <div className="input-field col s6">
                <input
                  autcomplete="off"
                  className="textColorLogo"
                  id="title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={onChangeNote}
                />
                <label htmlFor="title">I'm a title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  autcomplete="off"
                  className="materialize-textarea textColorLogo"
                  data-length="120"
                  id="textareaDescription"
                  name="description"
                  value={description}
                  onChange={onChangeNote}
                />
                <label htmlFor="textareaDescription">Add note description...</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s4 right">
                <button
                  className="btn btn-block waves-effect waves-light deep-orange"
                  type="submit"
                  name="action"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notesinput;
