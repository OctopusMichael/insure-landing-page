import logo from "../images/logo.svg";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
        <div className="footer-logo">
          <img src={logo} alt="logo-img" />
        </div>
        <div className="footer-redes">
          <a href="#">
            <IoLogoFacebook />
          </a>
          <a href="#">
            <IoLogoTwitter />
          </a>
          <a href="#">
            <IoLogoPinterest />
          </a>
          <a href="#">
            <IoLogoInstagram />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-main">
        <div className="footer-menu">
          <h3>OUR COMPANY</h3>
          <a href="#">HOW WE WORK</a>
          <a href="#">WHY INSURE?</a>
          <a href="#">CHECK PRICE</a>
          <a href="#">REVIEWS</a>
        </div>
        <div className="footer-menu">
          <h3>Help me</h3>
          <a href="#">FAQ</a>
          <a href="#">Terms of use</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookies</a>
        </div>
        <div className="footer-menu">
          <h3>Contact</h3>
          <a href="#">Sales</a>
          <a href="#">Support</a>
          <a href="#">Live chat</a>
        </div>

        <div className="footer-menu">
          <h3>Others</h3>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Licenses</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
