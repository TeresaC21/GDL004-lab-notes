import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const Notes = ({createNote}) => {

  // State for project
  const [newNote, setNewNote] = useState({
    note: ''
  })
  const {note} = newNote; // extract name of project

  // Read content the input
  const onChangeNote = e => {
    setNewNote({
      ...newNote,
      [e.target.name] : e.target.value
    })
  }
  const [error, setError] = useState(false)

  // When user save note
  const onSubmitNote = e => {
    e.preventDefault();

    // validate note
    if(note.trim() === ''){
      setError(true);
      return;
    }

    //add the state

    // reload the form

    // ID
  newNote.id = uuidv4();
    
  // Create note

  }
    return (
   <div className="row">
    <div className="col s12 m6 "> 
      <div className="card opacity-tc">
      <span className="card-title textColorLogo">Card Title</span>
        <div className="card-image">
        <a 
        className="btn-floating halfway-fab waves-effect waves-light red mb1"><i 
        className="material-icons">edit</i></a>
         {/*  <img src="images/sample-1.jpg" /> */}
        </div>
        <div className="card-content textColorLogo">
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
            </form>
        </div>
        <div className="card-action">
          <a href="#" className="textColorsBar ml80">Delete</a>
        </div>
      </div>
     </div>
  </div> 
    );
}
 
export default Notes;

