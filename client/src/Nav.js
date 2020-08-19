import React from 'react';

function Nav(){
    return(
        <header style={navStyle}>
            <h1>Grocery Delivery</h1>
        </header>
    )
}

const navStyle = {
    background: 'black',
    color: 'white',
    padding: '10px',
    textAlign: 'left'
}

export default Nav;