import React from 'react';
import Notes from './notes/Notes';
import Navbar from './notes/Navbar';
import Sidenav from './notes/Sidenav';

const Home = () => {
    return ( 
        <div>
         <Navbar />
         <div className="row">
             <div className="backgroundColorsHome">
         <div className="col s3 m4 l3 opacity-tc marginCollection">
            <Sidenav />
            {/* <div className="col s9"></div> */} 
          </div>
            <div className="col s9 m8 l9">
               <Notes />
            </div>
            </div>
        </div>
       </div>
     );
}
 
export default Home;