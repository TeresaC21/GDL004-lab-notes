import React, { useState, useContext }  from 'react';
import {AuthContext} from '../auth/Auth';

import { noteFB } from '../firebase/helper-firebaseAuth';

const Notes = ({ note }) => { // note from component Listnote and showModal from Home
  
  const { userCurrent } = useContext(AuthContext);

  const { id, title, description, userId } = note;

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
         {/*  <span>{userCurrent ? userCurrent.displayName : null}</span> */}
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
