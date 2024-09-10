import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/GithmaProfile.jpg";
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay}
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-7xl font-thin tracking-medium lg:mt-18 lg:text-7xl">
              Githma Manthinie
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
            bg-clip-text text-4xl tracking-tight text-transparent">
              Computer Science Undergraduate(B.Sc Reading)
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible" 
              className="my-8  max-w-xl py-12">{HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.img 
            initial={{ x: 100, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{ duration: 1, delay: 1.2}}
            src={profilePic}
            alt="Githma Manthinie"
            className="w-80 h-100  rounded-tl-3xl rounded-br-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
