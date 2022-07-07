import React from 'react';

class NavBar extends React.Component{
    constructor(){
        super()
    }

    // render to return navbar
    render(){
        return(
            <div className='Nav'>
                <a href='/'>Home</a>
                <a href='/products'>Products</a>
                <a href='/cart'>Cart</a>
                <a href='/profile'>Profile</a>
            </div>
        );
    }
}

// exporting navbar
export default NavBar;