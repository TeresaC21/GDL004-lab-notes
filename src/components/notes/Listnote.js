import React, { Fragment } from 'react';
import Notes from './Notes'

const Listnote = () => {
    const notes = [{
    note: '', status: true
}];

    return (
    <Fragment>
        <h4>List notes</h4>
        <ul> 
        {notes.length === 0
            ? (<li><h5>Notes Empty</h5></li>)
            : notes.map(note =>(        
                <Notes
                key="1"
                note={note}
                />
                ))
        }
        </ul>
    </Fragment>
    );
}
 
export default Listnote;