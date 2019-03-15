import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div>
               <Link to="/"> My News Box</Link>
            </div>
            <hr/>
        </header>
    )
}



export default Header;