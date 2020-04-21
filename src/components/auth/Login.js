import React, { useState, Fragment, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom'; // tiene prop history

// Components
import Header from '../layout/Header';
import { loginFB } from '../firebase/helper-firebaseAuth'

const Login = ({ history }) => {
  // State from value email and password
  const [user, setSaveUser] = useState({
    email: "",
    password: "",
  });

  // State from not empty inputs
  const [error, setError] = useState({
    errorFields: false,
    errorUs: false
  });

  // Take values email and password of input
  const onChangeInput = (e) => {
    setSaveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const { email, password } = user;

  // Click user
  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate not empty inputs
    if (email.trim() === "" || password.trim() === "") {
      setError({
        ...error,
        errorFields: true
      });
      return;
    }
    // Delete mesage error
    setError({
      ...error,
      errorFields: false
    });

    // Login with Firebase
    try {
      const showUser = await loginFB(user);
      console.log(showUser);
       history.push('/home') 
    } catch (error) {
      console.error('Error login account', error.message)
      setError({
        ...error,
        errorUs: error.message
      })
      return;
    }
    
    
   // I THINK ------ ID HERE PUT ID FIREBASE
   /*  user.id = uuidv4(); */
    //console.log(user);
  };
  
  return (
    <Fragment>
      <div className="backgroundForms">
        <Header title="NOTES" />

        <div className="container">
          <div className="row loginRow">
            <div className="col s12 m8 offset-m2 xl6 offset-xl3">
              <div className="card center-align opacity-tc">
                <div className="card-content">
                  {error.errorFields ? (
                    <p className="card-panel lighten-5 z-depth-1 backgrounOpacity textColorate mb3">
                      ALL FIELDS ARE REQUIRED
                    </p>
                  ) : null}

                  <form onSubmit={onSubmit}>
                    <h4 className="mt0 mb3 textColorLogo">Log in</h4>
                    <div className="grey-text">
                      <div className="input-field col s12">
                        <input
                          name="email"
                          type="email"
                          id="email"
                          className="validate"
                          value={email}
                          onChange={onChangeInput}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          name="password"
                          type="password"
                          id="password"
                          className="validate"
                          value={password}
                          onChange={onChangeInput}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        className="btn waves-effect waves-light deep-orange"
                        type="submit"
                        name="action"
                      >
                        Login
                      </button>
                    </div>

                    {error.errorUs ? ( 
                    <p className="card-panel lighten-5 z-depth-1 backgrounOpacity textColorate mb2">{error.errorUs}</p>
                    ) : null}

                  </form>

                  <Link to={"/register"}>
                    <p className="right-align">Sign up</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
 
export default withRouter (Login);