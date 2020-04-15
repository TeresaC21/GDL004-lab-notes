import React from 'react';

const Sidenav = () => {
    return (
      <aside>
        <ul className="collection mt0 mb0">
          
          <a
            className="collection-item waves-effect btn modal-trigger textOrange"
            /* this href take like modal COMPONENT ID Notesinput */
            href="#modalNote"
          >
           Add Note
          </a>
          
          {/*  More bottons of bar */}
          <a
            href="#!"
            className="collection-item waves-effect modal-trigger textOrange"
          >
            Favorites
          </a>
          <a
            href="#!"
            className="collection-item waves-effect modal-trigger textOrange"
          >
            Show All
          </a>
          <a
            href="#!"
            className="collection-item waves-effect modal-trigger textOrange"
          >
            Removed
          </a>
          
        </ul>
      </aside>
    );
}
 
export default Sidenav;

 {/* MODAL MATERIALIZE */}
         {/*  <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-close waves-effect waves-green btn-flat"
              >
                Agree
              </a>
            </div>
          </div> */}