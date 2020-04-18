import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
/* import { v4 as uuidv4 } from 'uuid'; */
import Header from '../layout/Header';
import { loginFB } from '../firebase/helper-firebaseAuth'

const Login = () => {
  // State from value email and password
  const [user, setSaveUser] = useState({
    email: "",
    password: "",
  });

  // State from not empty inputs
  const [error, setError] = useState(false);

  // Take values email and password of input
  const onChangeInput = (e) => {
    setSaveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const { email, password } = user;

 

  // Click user
  const onSubmit = (e) => {
    e.preventDefault();

    // Validate not empty inputs
    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }
    // Delete mesage error
    setError(false);

    // I THINK ------ ID HERE PUT ID FIREBASE
   /*  user.id = uuidv4(); */
    //console.log(user);

    loginFB(user);
   
   
    // Run action
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
                  {error ? (
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
 
export default Login;