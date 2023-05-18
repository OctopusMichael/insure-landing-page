import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

type Props = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<Props> = ({ menu, setMenu }) => {

  

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          {" "}
          <img src={logo} />
        </a>
      </div>
      <div className="menu-desktop">
        <ul>
          <li>
            <a href="#">How we work</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#"> Account</a>
          </li>
          <li>
            <button className="btn-navbar">View plans </button>
          </li>
        </ul>
      </div>
      <div className="menu-mobile">
        {menu ? (
          <button onClick={handleClick} className="btn-menu">
            <img src={close} alt="btn-menu" />
          </button>
        ) : (
          <button onClick={handleClick} className="btn-menu">
            <img src={burger} alt="btn-menu" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
