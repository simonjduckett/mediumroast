import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import CursContext from "./Context";

const Nav = () => {

    let lastScrollTop = 0;
    const fadeNav = () => {
        let menuitems = document.getElementsByClassName('hideonscroll')

        var scroll_top = window.pageYOffset;
        if (scroll_top > lastScrollTop && scroll_top > 20) {
            for (let i = 0; i < menuitems.length; i++) {
                menuitems[i].classList.add('opacity-0');
            }
        } else if(scroll_top < lastScrollTop) {
            for (let i = 0; i < menuitems.length; i++) {
                menuitems[i].classList.remove('opacity-0');
            }
        }
        lastScrollTop = scroll_top;
    }

    //probably need to put this in a useEffect so it only adds one listener!
    window.addEventListener("scroll", fadeNav);
    return ( 
        <nav>
            <MenuItem scrollHide='hideonscroll' name='About' subName='what we do' to='/' />
            <MenuItem scrollHide='hideonscroll' name='Work' subName='our projects' to='/work' />
            <MenuItem scrollHide='' name='Get in touch' subName='start a project' to='/contact' />
        </nav>
     );
}

//used above
const MenuItem = (props) => {
    const cursor = useContext(CursContext);
    return (
        <div className={props.scrollHide + ' menu-item'}>
            <Link to={props.to} onMouseOver={cursor.shrink} onMouseLeave={cursor.expand}>
                <h3>{props.name}</h3>
                <p>{props.subName}</p>
            </Link>
        </div>
    )
}

export default Nav;