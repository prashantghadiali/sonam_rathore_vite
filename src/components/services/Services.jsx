import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          We specialize in empowering learning journeys
          <br /> for your success.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Transforming</motion.b>  education to
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>elevate your</motion.b> Potential.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SmartPlant Instrumentation (SPI)</h2>
          <p style={{margin:2}}>
          SmartPlant Instrumentation (SPI) is one of the foremost instrumentation engineering tools developed by Intergraph. Earlier, the same software was well-known as the Intools. The software acts as a single and widely used instrumentation application that is used in Engineering, Procurement, and Construction (EPC) Projects. Smart plant instrumentation helps in accessing and updating the instruments used in any plant for various tasks.
          </p>
          {/* <button><a href="#Contact"></a>Request Demo</button> */}
          <a href="https://sonam-rathore-courses.vercel.app/#Contact" className="button">Request Demo</a>

          {/* <button>Go</button> */}
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Application Development</h2>
          <p style={{margin:"20 20"}}>
            Craft bespoke APK applications with efficiency and affordability. Our agile approach minimizes development time and costs while ensuring your unique requirements are met. As owners, we prioritize your satisfaction, delivering high-quality APK files swiftly and within budget.
          </p>
          <button>Go</button>
        </motion.div> */}
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Software Development</h2>
          <p style={{margin:2}}>
            Create custom applications tailored to your needs with cost-effective solutions and rapid development cycles. Our streamlined process ensures efficient utilization of resources, minimizing time-to-market and expenses. As owners, we prioritize your vision, delivering high-quality software on budget and ahead of schedule.
          </p>
          <button><a href="#Contact"></a>Request Demo</button>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
