import React, { Fragment } from 'react';
import Sidenav from './Sidenav';


const Navbar = () => {

    return newFunction();
}
 
function newFunction() {
  return (
<Fragment>
  <nav>
    <div className="nav-wrapper tc-side">
      <a href="#!" className="brand-logo textColorLogo"><i className="Medium material-icons ml2 textColorLogo">favorite</i>Note</a>
      <a href="#" data-target="menuResponsive" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="collapsible.html"><i className="material-icons textColorLogo">refresh</i></a></li>
        <li><a href="mobile.html"><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
      </ul>
    </div>
  </nav>
  
  <ul className="sidenav backgroundBurger" id="menuResponsive">
    <Sidenav />
        <li><a href="sass.html"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="collapsible.html"><i className="material-icons textColorLogo">refresh</i></a></li>
        <li><a href="mobile.html"><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
  </ul>
  </Fragment>
  );
}

export default Navbar;