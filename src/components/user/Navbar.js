import React, { Fragment, useContext } from 'react';
import Sidenav from './Sidenav';
import { withRouter } from 'react-router-dom';// it have prop history
import { logout } from '../firebase/helper-firebaseAuth';
import {AuthContext} from '../auth/Auth'
import firebaseIn from '../firebase/firebase';

const Navbar = ({ history }) => {

  const { userFB } = useContext(AuthContext);
 
  const outUser = async () => {
    await firebaseIn.logout()
    history.push('/') 
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
        <p>{userFB ? userFB.displayName : null}</p>
        </li>
        <li><a href="#!"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="#!" onClick={outUser}><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
      </ul>
    </div>
  </nav>
 {/*  onClick={() => firebaseIn.auth().signOut()}  */}
                        {/* Here bar responsive */}
  <ul className="sidenav backgroundBurger barWidth" id="menuResponsive">
    <Sidenav />
        <li><a href="#!"><i className="material-icons textColorLogo">search</i></a></li>
        <li><a href="#!"><i className="material-icons textColorLogo">cancel_presentation</i></a></li>
  </ul>
  </Fragment>
  );
}

export default withRouter (Navbar);