import logo from '../resources/images/footer_logo.png';

import { Link } from 'react-router-dom'
export default function Footer() {
return (
    
<div className="footer-wrap">
    <div className="container">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul className="footer-links">
            <li><Link to="/" className="text-white fw-bold">HOME</Link></li>
            <Link to="/about" className="text-white fw-bold">ABOUT</Link>

            <li> <Link to="/contact" className="text-white fw-bold">CONTACT US</Link></li>
        </ul>
        <div className="copyright">Copyright © 2021 University. All rights reserved</div>
        <div className="credits">SYED SAMMAR <a href="www.facebook.com/syedabbas0007">SK-Developers</a></div>
    </div>
</div>

);
}