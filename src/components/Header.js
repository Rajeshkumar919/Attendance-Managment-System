import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Header () {
return (
  <>
  <div className="topbar-wrap">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div className="address"><i className="fas fa-map-marker-alt"></i> Nisar Ahmed Siddiqui Road, Sukkur </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <ul className="top_right">
          <li>
            <div className="followus"><span>Follow Us</span>
              <ul className="soclia_media">
                <li><a href="https://www.facebook.com/ibakhp.edu.pk"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/login?lang=en"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="https://pk.linkedin.com/company/sukkur-iba-university"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                <li><a href="https://www.instagram.com/syed_sammar12/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </li>
          <li>
            <div className="phone"><a href="/"><i className="fas fa-phone-alt" aria-hidden="true"></i> +92300 2284 502</a></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="header-wrap">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-12 navbar-light">
        <div className="logo"> <a href="/"><img alt="" className="logo-default" src={logo} /></a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span
            className="navbar-toggler-icon"></span> </button>
      </div>
      <div className="col-lg-8 col-md-12 fw-bold text-secondary">
        <div className="navigation-wrap" id="filters">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <button className="close-toggler" type="button" data-toggle="offcanvas"> <span><i
                    className="fas fa-times-circle" aria-hidden="true"></i></span> </button>
              <ul className="navbar-nav mr-auto ">
              <li className="nav-item"><Link to="/">HOME</Link></li>
                <li className="nav-item"><Link to="/about">ABOUT</Link></li>
                <li className="nav-item"><Link to="/facultyfaqs">FACULTY FAQs</Link></li>
                <li className="nav-item"><Link to="/stdfaqs">STUDENT FAQs</Link></li>
                
                <li className="nav-item"><Link to="/Contact">CONTACT US</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
</>
);
}