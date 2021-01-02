import React from 'react';

const Nav = () => {
    return ( 
        <nav>
            <MenuItem name='About' subName='what we do' />
            <MenuItem name='Work' subName='our projects' />
            <MenuItem name='Get in touch' subName='start a project' />
        </nav>
     );
}

//used above
const MenuItem = (props) => {
    return (
        <div className='menu-item'>
            <h3>{props.name}</h3>
            <p>{props.subName}</p>
        </div>
    )
}

export default Nav;