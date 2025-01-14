import React, { Fragment, useState, useContext } from 'react';

// Helper Firebase
import { logOutFB } from '../firebase/helper-firebaseAuth';
import {AuthContext} from '../auth/Auth';

// Component
import Sidenav from './Sidenav';

const Navbar = ({ showModalAddNote }) => { // prop from component home

  const { userCurrent } = useContext(AuthContext);

  const outUser =  async () => {
    await logOutFB();
    console.log('No user, sing out');
  }

  return (
<Fragment>
  <nav>
    <div className="nav-wrapper tc-side">
      <a href="#!!" className="brand-logo textColorLogo"><i className="Medium material-icons ml2 textColorLogo">favorite</i>Note</a>
      <a href="#!" data-target="menuResponsive" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#!" className="mb1">{userCurrent ? userCurrent.displayName : null}</a></li>
        
        <li><a href="#!"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="#!" onClick={outUser}><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
      </ul>
    </div>
  </nav>
                        {/* Here bar responsive */}
  <ul className="sidenav backgroundBurger barWidth" id="menuResponsive"> 
  <Sidenav showModalAddNote={showModalAddNote} />  
        <li><a href="#!"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="#!"><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
  </ul>

  </Fragment>
  );
}

export default Navbar;

 /* {hideNav ? <Sidenav showSideNav onClick={showModalAddNote} />  : null} */
 /* const [hideNav, setHideNav] = useState(false)
  const showSideNav = () => {
    setHideNav(true);
  } */