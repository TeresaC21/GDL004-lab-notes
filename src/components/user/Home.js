import React, { useState } from 'react';

// Components
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import Listnote from '../notes/Listnote';

const Home = () => {
  
  const [modalInput, setModalInput] = useState(false);

  const showModalAddNote = () => {
    setModalInput(true);
  }
  const hideModalAddNote = () => {
    setModalInput(false);
  }

  return (
    <div>
      <Navbar
        showModalAddNote={showModalAddNote}
      />
      <div className="row backgroundColorsHome">
        <div className="">
          <div className="col s3 hide-on-med-and-down l2 backgroundGray marginCollection">
            <Sidenav
            showModalAddNote={showModalAddNote}
            /> 
          </div>
          <div className="col s9 m8 l10">
            {/*  <Notesinput /> */}
            <Listnote 
            modalInput={modalInput}
            hideModalAddNote={hideModalAddNote}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Home;