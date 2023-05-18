
import{useState} from  "react"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import bgPattern  from "./images/bg-pattern-intro-right-mobile.svg"
import bgPaLeft  from "./images/bg-pattern-intro-left-desktop.svg"
import bgPaRight  from "./images/bg-pattern-intro-right-desktop.svg"
import "./style/App.css";
import "./style/Navbar.css";
import "./style/Hero.css";
import "./style/Content.css";
import "./style/Footer.css";

function App() {
const [menu, setMenu] = useState<boolean>(false)

window.onscroll = () => {
    let y = window.scrollY;
    if (y >= 80) {
      //setScroll(true);
      setMenu(false);
    } else {
      //setScroll(false);
    }
  };




  return (
    <>
      <div className="container">
        <header>
          <Navbar menu={menu} setMenu={setMenu} />
          <Hero menu={menu}/>
        </header>
        <main>
          <Content/>
          <img className="bg-pattern" src={bgPattern}/>
          <img className="bg-pattern-desktop-left" src={bgPaLeft}/>
          <img className="bg-pattern-desktop-right" src={bgPaRight}/>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
