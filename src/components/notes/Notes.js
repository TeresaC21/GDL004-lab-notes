import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


const Notes = ({note}) => {

  return (
   <div className="row">
    <div className="col s12 m6 "> 
      <div className="card opacity-tc">
      <span className="card-title textColorLogo">Card Title</span>
        <div className="card-image">
        <a 
        className="btn-floating halfway-fab waves-effect waves-light red mb1 textColorsBar"><i 
        className="material-icons">add_circle</i></a>
         {/*  <img src="images/sample-1.jpg" /> */}
        </div>
            <div className="card-content textColorLogo">
                <p>NOTE: {note.note}</p>
            </div>
        <div className="card-action">
          <a href="#" className="textColorsBar ml80"></a> {/* Delete */}
        </div>
      </div>
     </div>
  </div> 
    );
}
 
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

{/* {error ? <p className="card-panel lighten-5 z-depth-1 backgrounOpacity textColorsBar mb3">field are required</p>
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
            </form> */}