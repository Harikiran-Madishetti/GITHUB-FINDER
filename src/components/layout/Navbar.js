import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Regular Function
function Navbar({ icon, title }) {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                {/* <i className={props.icon} /> {props.title}  can be used if we not used deconstructor while passing attributes in function or method*/}
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
