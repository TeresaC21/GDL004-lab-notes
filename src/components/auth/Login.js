import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Login = () => {

const [user, setSaveUser] = useState({
  email: '',
  password: ''
})

const [error, setError] = useState(false)

// Take values email and password of input
const onChangeInput = e => {
  setSaveUser({
    ...user,
    [e.target.name] : e.target.value
  })
}
const  { email, password } = user;
// Click user
const onSubmit = e => {
  e.preventDefault();

  // Validate not empty inputs
if(email.trim() === '' || password.trim() === ''){
  setError(true)
  return;
}
// Delete mesage error
setError(false)

// I THINK ------ ID HERE PUT ID FIREBASE 
user.id = uuidv4();
//console.log(user);


  // Run action
  
}

    return (
      <div className="backgroundForms">
      <div className="container">
        <div className="row loginRow">
          <div className="col s12 m8 offset-m2 xl6 offset-xl3">
            <div className="card center-align opacity-tc">
              <div className="card-content">
              
              {error ? <p className="card-panel lighten-5 z-depth-1 backgrounOpacity textColorsBar mb3">All fields are required</p>
              : null}

                <form
                  onSubmit={onSubmit}
                >
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