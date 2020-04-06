import React from 'react';

const Navbar = () => {

    return ( 
        <nav>
        <div className="nav-wrapper tc-side">
          <a href="#!" 
          className="brand-logo textColorLogo"><i 
          className="Medium material-icons ml2 textColorLogo">favorite</i>Note Fast</a><ul 
          className="right hide-on-med-and-down">
            <li><a href="sass.html"><i 
            className="material-icons textColorLogo">search</i></a></li>
            <li><a href="badges.html"><i 
            className="material-icons textColorLogo">view_module</i></a></li>
            <li><a href="collapsible.html"><i 
            className="material-icons textColorLogo">refresh</i></a></li>
            <li><a href="mobile.html"><i 
            className="material-icons textColorLogo">more_vert</i></a></li>
          </ul>
        </div>
      </nav>
     );
}
 
export default Navbar;