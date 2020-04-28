import React, { Fragment, useContext } from 'react';

// Helper Firebase
import { logOutFB } from '../firebase/helper-firebaseAuth';
import {AuthContext} from '../auth/Auth';

// Component
import Sidenav from './Sidenav';

const Navbar = ({ showModalAddNote }) => {

  const { userCurrent } = useContext(AuthContext);

  const outUser =  async () => {
    await logOutFB();
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
        <li>
        <p>{userCurrent ? userCurrent.displayName : null}</p>
        </li>
        <li><a href="#!"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="#!" onClick={outUser}><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
      </ul>
    </div>
  </nav>
 {/*  onClick={() => firebaseIn.auth().signOut()}  */}
                        {/* Here bar responsive */}
  <ul className="sidenav backgroundBurger barWidth" id="menuResponsive"> 
 
  <Sidenav showSideNav showModalAddNote={showModalAddNote} />
        <li><a href="#!"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="#!"><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
  </ul>

  </Fragment>
  );
}

export default Navbar;

 /* {hideNav ? <Sidenav showSideNav showModalAddNote={showModalAddNote} />  : null} */
 /* const [hideNav, setHideNav] = useState(false)
  const showSideNav = () => {
    setHideNav(true);
  } */