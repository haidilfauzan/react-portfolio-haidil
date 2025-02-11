import React, { useRef, useEffect } from 'react';
import { HERO_CONTENT } from '../constants';
import profileVideo from "../assets/hero.mp4";
import { motion } from "motion/react";


const container = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duratio:0.5, delay: delay}
  }
})
const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(error => {
            // Handle autoplay errors (e.g., muted autoplay)
            console.error("Autoplay failed:", error);
            // As a fallback, you could show a play button or instruct the user to click to play.
            videoRef.current.muted = true; // Mute the video as a common workaround
            videoRef.current.play(); // Retry playing after muting
          });
        }
      }, []); // Empty dependency array ensures this runs only once on mount
    
    
  return (
    <div className='border-b border-red-400 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flew flew-col items-center lg:items-start'>
                <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible" className='pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Haidil Fauzan</motion.h1>
                <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible" className='bg-gradient-to-r from-red-400 via-purple-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                    Software Engineer
                </motion.span>
                <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                 className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                <motion.div
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1,delay:1.2}}
                 className="relative rounded-lg overflow-hidden">
                    
                <video
                ref={videoRef}
                src={profileVideo}
                alt=""
                className="w-full h-full object-cover"
                loop // Optional: Loop the video
                muted // Mute initially as a common autoplay workaround
                playsInline // Important for mobile autoplay
                style={{
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                }}
              />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-400 via-purple-500 to-blue-500 opacity-20 pointer-events-none"></div>
                </motion.div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
