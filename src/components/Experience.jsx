import { EXPERIENCES } from "../constants"
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="border-b border-blue-500 pb-4">
      <motion.h1
                    initial={{y:-100, opacity:0}}
                    transition={{duration:0.5}}
                    whileInView={{opacity:1, y:0}} className="my-16 text-center text-4xl">Experiences</motion.h1>
        <div>
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}} className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        
                    </motion.div>
                    
                    <motion.div
                    initial={{x:100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}} className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience.role} - <span>
                                {experience.company}
                            </span>
                        </h6>
                        <span>{experience.links.map((link, index)=>(
                                       <a key={index} href={link}  target="_blank" className="mr-2 mt-4 rounded bg-blue-500 px-2 py-1 text-sm font-medium text-purple-100">Company detail</a>
                                   ))}</span>
                        <p className="mb-4 mt-2 text-neutral-400">{experience.description}</p>
                        
                        {experience.technologies.map((tech, index)=>(
                            <span key={index}  className="mr-2 mt-4 rounded border border-red-400 px-2 py-1 text-sm font-medium text-red-400 inline-block" >{tech}</span>
                        ))}
                        
                        </motion.div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Experience
