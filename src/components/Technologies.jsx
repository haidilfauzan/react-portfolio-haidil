import React from 'react'

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoLaravel } from "react-icons/io5";
import { IoLogoIonic } from "react-icons/io";
import { SiOdoo } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTensorflow } from "react-icons/si";
import { motion } from "motion/react";
import { animate } from 'motion';

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
// import { RiReactjsLine } from "react-icons/ri";
// import { RiReactjsLine } from "react-icons/ri";
// import { RiReactjsLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-blue-500 pb-24">
    <motion.h1
    initial={{y:-100, opacity:0}}
    transition={{duration:0.5}}
    whileInView={{opacity:1, y:0}} className="my-16 text-center text-4xl">Technologies</motion.h1>
        <motion.div
        initial={{x:-100, opacity:0}}
        transition={{duration:0.5}}
        whileInView={{opacity:1, x:0}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl p-4">
                <RiReactjsLine className="text-7xl text-cyan-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" className="rounded-2xl p-4">
                <IoLogoLaravel className="text-7xl text-red-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" className="rounded-2xl p-4">
                <IoLogoIonic className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" className="rounded-2xl p-4">
                <SiOdoo className="text-7xl text-purple-900" />
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" className="rounded-2xl p-4">
                <BsBootstrapFill className="text-7xl text-purple-600" />
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" className="rounded-2xl p-4">
                <SiTensorflow className="text-7xl text-orange-500"  />
            </motion.div>
        </motion.div>
    </div>

  )
}

export default Technologies
