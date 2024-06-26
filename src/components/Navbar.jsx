import logo from "../assets/GithmaManthinieLogo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6' >
        <motion.div 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 0.5}}
        className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" style={{ width: '150px', height: 'auto' }} />
        </motion.div>
        <motion.div
         whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 0.5}}
         className="m-8 flex items-center justify-center gap-4 text-2xl mr-4">
          <FaLinkedin />
          <FaGithub />
          <FaTwitter />
          <FaInstagram />
        </motion.div>
    </nav>
  );
}

export default Navbar;
