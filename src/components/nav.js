import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <MenuItem name='About' subName='what we do' to='/' />
            <MenuItem name='Work' subName='our projects' to='/work' />
            <MenuItem name='Get in touch' subName='start a project' to='/contact' />
        </nav>
     );
}

//used above
const MenuItem = (props) => {
    return (
        <div className='menu-item'>
            <Link to={props.to}>
                <h3>{props.name}</h3>
                <p>{props.subName}</p>
            </Link>
            
        </div>
    )
}

export default Nav;