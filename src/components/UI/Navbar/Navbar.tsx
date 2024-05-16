import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
//import { AuthContext } from '../../../context';

const Navbar: React.FC = () => {
    // const {setIsAuth} = useContext(AuthContext);

    // const logOut = () => {
    //     setIsAuth(false)
    //     localStorage.setItem('auth', 'false');
    // }

    return (
        <div className="navbar">
            {/* <MyButton>Log out</MyButton> */}
            <div className="navbar__links">
              <ul className="menu-list">
              <li><Link className="navbar__link" to="/about">About</Link></li>
              <li><Link className="navbar__link" to="/posts">Posts</Link></li>
              </ul>
            </div>
        </div>
    );
};

export default Navbar;