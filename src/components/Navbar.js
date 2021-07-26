import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa'
import '../sass/Navbar.scss';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false)
  return (
    <nav className="navbar px-0">
      <div className="navbar-container">
        <div className="Brand d-flex align-items-center">
        <Link to="/" className="navbar-brand">Logo</Link>
        <button type="button" className=" btn btn-light mr-4 marginSwap">Margin Swap</button>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><Link to="/" onClick={closeMobileMenu} className="nav-link mb-0 btn btn-light">Connect Wallet</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;