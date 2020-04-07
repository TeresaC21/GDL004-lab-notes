import React from 'react';
import Notes from '../notes/Notes';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import Listnote from '../notes/Listnote';
import Notesinput from '../notes/Notesinput';

const Home = () => {
  const newLocal = (<div>
    <Navbar />
    <div className="row backgroundColorsHome">
      <div>
        <div className="col s3 hide-on-med-and-down l2 backgroundGray marginCollection">
          <Sidenav />
          
        </div>
        <div className="col s9 m8 l10">
          <Notesinput />
          <Listnote />
        </div>
      </div>
    </div>
  </div>);
    return newLocal;
}
 
export default Home;