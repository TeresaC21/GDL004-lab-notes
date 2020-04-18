import React from 'react';

function Header(props) {
    return(
    <h2 id="encabezado" className="encabezado mt0 mb0">{props.title}</h2>
    )
}

export default Header;