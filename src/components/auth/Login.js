import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

const [user, setSaveUser] = useState({
  email: '',
  password: ''
})
const { email, password } = user

// Take values email and password of input
const onChangeInput = e => {
  setSaveUser({
    ...user,
    [e.target.name] : e.target.value
  })
}

// Click user
const onSubmit = e => {
  e.preventDefault();

  // Validate not empty inputs


  // Run action
  
}

    return (
      <div className="backgroundForms">
      <div className="container">
        <div className="row loginRow">
          <div className="col s12 m8 offset-m2 xl6 offset-xl3">
            <div className="card center-align opacity-tc">
              <div className="card-content">
                <form
                  onSubmit={onSubmit}
                >
                  <h4 className="mt0 mb3">Log in</h4>
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
                    <label for="email">Email</label>
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
                    <label for="password">Password</label>
                  </div>
                  </div>
                  <div className="text-center">
                  <button
                  className="btn waves-effect waves-light deep-orange"
                  type="submit"
                  name="action"
                  >Login
                  </button>
                  </div>
                </form>
                <Link to={'/register'}>
                  <p className="right-align">
                  Sign up
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
}
 
export default Login;