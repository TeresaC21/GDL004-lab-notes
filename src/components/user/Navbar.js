import React, { Fragment } from 'react';
import Sidenav from './Sidenav';
import { logout } from '../auth/helper-firebaseAuth';

const Navbar = () => {

  return (
<Fragment>
  <nav>
    <div className="nav-wrapper tc-side">
      <a href="#!" className="brand-logo textColorLogo"><i className="Medium material-icons ml2 textColorLogo">favorite</i>Note</a>
      <a href="#" data-target="menuResponsive" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="#" onClick={logout()} ><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
      </ul>
    </div>
  </nav>
 {/*  onClick={() => firebaseIn.auth().signOut()}  */}
                        {/* Here bar responsive */}
  <ul className="sidenav backgroundBurger barWidth" id="menuResponsive">
    <Sidenav />
        <li><a href="#"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="#"><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
  </ul>
  </Fragment>
  );
}

export default Navbar;