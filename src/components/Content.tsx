import data from "../json/Content.json";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <>
      <section className="section-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, ease: "easeIn" },
          }}
          className="content-title"
        >
          <hr className="hr" />
          <h1>We’re different</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, ease: "easeIn" },
          }}
          className="mid-card"
        >
          {data &&
            data.map((element) => {
              return (
                <div key={element.id} className="card">
                  <div className={element.img} />
                  <h1>{element.title}</h1>
                  <p>{element.ph}</p>
                </div>
              );
            })}
        </motion.div>

        <div className="last-card">
          <h1>Find out more about how we work</h1>
          <button> HOW WE WORK </button>
        </div>
      </section>
    </>
  );
};

export default Content;
