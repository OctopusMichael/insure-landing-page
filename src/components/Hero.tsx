import heroMobile from "../images/image-intro-mobile.jpg";
import heroDesktop from "../images/image-intro-desktop.jpg";
import { motion } from "framer-motion";

type Props = {
  menu: boolean;
  setMenu?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero: React.FC<Props> = ({ menu }) => {
  return (
    <section className="section-hero">
      <div className={menu ? "menu " : "menu toggle"}>
        <div className="menu-absolute">
          <button> HOW WE WORK</button>
          <button> BLOG</button>
          <button> ACCOUNT </button>
          <button> VIEW PLANS </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="hero-img"
      >
        <img src={heroMobile} alt="img-mobile" />
      </motion.div>
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeIn" },
        }}
        className="hero-img-desktop"
      >
        <img src={heroDesktop} alt="img-desktop" />
      </motion.div>
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeIn" },
        }}
        className="hero-text"
      >
        <hr className="hr-hero" />
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button> View plans </button>
      </motion.div>
    </section>
  );
};

export default Hero;
