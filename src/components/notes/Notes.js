import React from 'react';

const Notes = () => {

    return (
      <div class="row">
    <div class="col s12 m6 mt4">
      <div class="card opacity-tc">
      <span class="card-title textColorLogo">Card Title</span>
        <div class="card-image">
        <a 
        className="btn-floating halfway-fab waves-effect waves-light red mb1"><i 
        className="material-icons">edit</i></a>
         {/*  <img src="images/sample-1.jpg" /> */}
          
        </div>
        <div className="card-content textColorLogo">
          <p>
            <input
            type="text"
            name="note"
            />
            <button
              className="btn waves-effect waves-light deep-orange"
              type="submit"
              name="action"
              >Save
            </button>
          </p>
        </div>
        <div className="card-action">
          <a href="#" className="textColorsBar ml80">Delete</a>
        </div>
      </div>
    </div>
  </div>
   
    );
}
 
export default Notes;

