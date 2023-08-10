import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import SkillsCard from "../components/SkillsCard";
import {frontend,backend,languages,machineLearning,mobile,buildTools,versionControl} from "../Constants/constants";
const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay:0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          <p className="mt-10 mb-7 font-playfair text-2xl">
            Frontend/Frameworks
          </p>
        <Marquee pauseOnHover={true} speed={100}>
          <SkillsCard skill={frontend} />
        </Marquee>       
      </motion.div>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay:0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          <p className="mt-10 mb-7 font-playfair text-2xl">
            Backend/Frameworks
          </p>
        <Marquee pauseOnHover={true} speed={100}>
          <SkillsCard skill={backend} />
        </Marquee>       
      </motion.div>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay:0.8, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          <p className="mt-10 mb-7 font-playfair text-2xl">
            Languages
          </p>
          <SkillsCard skill={languages} />
      </motion.div>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay:1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          <p className="mt-10 mb-7 font-playfair text-2xl">
            Build Tools
          </p>
          <SkillsCard skill={buildTools} />
      </motion.div>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay:1.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          <p className="mt-10 mb-7 font-playfair text-2xl">
            Version Control 
          </p>
          <SkillsCard skill={versionControl} />
      </motion.div>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay:1.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          <p className="mt-10 mb-7 font-playfair text-2xl">
            Machine Learning
          </p>
          <SkillsCard skill={machineLearning} />
      </motion.div>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay:0.8, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          <p className="mt-10 mb-7 font-playfair text-2xl">
            Mobile Development
          </p>
          <SkillsCard skill={mobile} />
      </motion.div>
    </section>
  );
};

export default MySkills;
