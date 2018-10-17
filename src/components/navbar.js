import React from 'react';

//stateless functional component instead of using extends components
const NavBar = ({totalCounter}) => { 
    // use props or destucture using Object destructuring {totalCounter}
    console.log("NavBar Rendered!");
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#/">
                Cart
                <span className="badge m-2 badge-pill badge-secondary">
                {totalCounter}
                </span>
            </a>
            
        </nav>
     );
}

/* class NavBar extends Component {
    render() { 
    }
} */
 
export default NavBar;

