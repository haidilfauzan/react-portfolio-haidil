import {CONTACT} from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-500 pb-20">
        <motion.h2
            initial={{y:-100, opacity:0}}
            transition={{duration:0.5}}
            whileInView={{opacity:1, y:0}} className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p
            initial={{x:-100, opacity:0}}
            transition={{duration:1}}
            whileInView={{opacity:1, x:0}}
             className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
