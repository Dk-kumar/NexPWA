import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'

const Header = () => {

    return (
        <div className='container'>
            <div className="container-heading">Book Store</div>
            <ul>
                <li>
                    <Link className='header-link' to='/'>
                        Home
                    </Link>
                    <Link className='header-link' to='/bookList'>
                        Books
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;