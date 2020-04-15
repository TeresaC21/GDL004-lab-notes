import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { v4 as uuidv4 } from 'uuid';
import { registerFB } from './helper-firebaseAuth'

const Register = () => {
  const [user, setSaveUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);

  // Take values email and password of input
  const onChangeInput = (e) => {
    setSaveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const { name, email, password, confirmPassword } = user;

  // Click user
  const onSubmit = (e) => {
    e.preventDefault();

    // Validate not empty inputs
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError(true);
      return;
    }
    // Delete mesage error
    setError(false);

    // import function Firebase for register
    registerFB(user);

    // I THINK ------ ID HERE PUT ID FIREBASE
/*     user.id = uuidv4(); */
    //console.log(user);

    // Password min of six caracters

    // The 2 password same

    // Run action
  };

  return (
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
                  <h4 className="mt0 mb3 textColorLogo">Register</h4>
                  <div className="grey-text">
                    <div className="input-field col s12">
                      <input
                        name="name"
                        type="text"
                        id="text"
                        className="validate"
                        value={name}
                        onChange={onChangeInput}
                      />
                      <label htmlFor="text">Name</label>
                    </div>
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
                    <div className="input-field col s12">
                      <input
                        name="confirmPassword"
                        type="password"
                        id="confirmPassword"
                        className="validate"
                        value={confirmPassword}
                        onChange={onChangeInput}
                      />
                      <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn waves-effect waves-light deep-orange"
                      type="submit"
                      name="action"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <Link to={"/"}>
                  <p className="right-align">Login</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;