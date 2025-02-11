import React from 'react';
import aboutImg1 from '../assets/haidil.jpg';
import aboutImg2 from '../assets/haidil2.jpg';
import aboutImg3 from '../assets/haidil3.jpg';
import aboutImg4 from '../assets/haidil4.jpg';
import { ABOUT_TEXT } from '../constants';
import { EDUCATIONS } from "../constants";
import { motion } from "motion/react";


const About = () => {
  const images = [aboutImg1, aboutImg2, aboutImg3, aboutImg4];

  return (
    <div className='border-b border-purple-500 pb-4'>
      <motion.h1
              initial={{y:-100, opacity:0}}
              transition={{duration:0.5}}
              whileInView={{opacity:1, y:0}}  className='my-16 text-center text-4xl'>
       
        <span className='text-neutral-500'> About Me</span>
      </motion.h1>
      <div className='flex flex-wrap'>
        <motion.div
        initial={{x:-100, opacity:0}}
        transition={{duration:0.5}}
        whileInView={{opacity:1, x:0}}
         className='w-full lg:w-1/2 lg:p-10'>
          <div className='grid grid-cols-2 gap-4 pb-6'> {/* Grid container */}
            {images.map((image, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <img
                  className='rounded-2xl object-cover w-full h-full' // object-cover for consistent aspect ratio
                  src={image}
                  alt={`About ${index + 1}`}
                  style={{
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-400 via-purple-500 to-blue-500 opacity-20 pointer-events-none"></div>
              </div>
            ))}
          </div>
         
        </motion.div>
        <div className='w-full lg:w-1/2 lg:p-10'>
          <div className='flex justify-center lg:justify-start'>
            <motion.p
            initial={{x:100, opacity:0}}
            transition={{duration:1}}
            whileInView={{opacity:1, x:0}}
             className='max-w-xl text-justify'>{ABOUT_TEXT}</motion.p>
            
          </div>
          <motion.h4
              initial={{y:-100, opacity:0}}
              transition={{duration:0.5}}
              whileInView={{opacity:1, y:0}} className="my-5 text-center text-2xl ">Education</motion.h4>
          <div className='flex justify-center lg:justify-start'>
            
           <div>
                       {EDUCATIONS.map((education,index)=>(
                           <motion.div
                           initial={{x:100, opacity:0}}
                           transition={{duration:1}}
                           whileInView={{opacity:1, x:0}} key={index} className="mb-8 flex flex-wrap lg:justify-center">
                               
                               <div className="w-full max-w-xl lg:w-3/4">
                                   <h6 className="mb-2 font-semibold">
                                       {education.role} - <span>
                                           {education.company}
                                       </span>
                                   </h6>
                                   <p className="mb-4 text-neutral-400">{education.description}</p>
                                   
                                   </div>
                                   <div className="w-full lg:w-1/4">
                                   <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
                                   {education.links.map((link, index)=>(
                                       <a key={index} href={link}  target="_blank" className="mr-2 mt-4 rounded bg-blue-500 px-2 py-1 text-sm font-medium text-purple-100">Detail</a>
                                   ))}
                               </div>
                               </motion.div>
                       ))}
            </div>
            
          </div>
          

          
        </div>
      </div>
    </div>
  );
};

export default About;