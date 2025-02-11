import {PROJECTS } from "../constants"
import { motion } from "motion/react";

const Projects = () => {
  return (
   <div className="border-b border-blue-500 pb-4">
         <motion.h1
                       initial={{y:-100, opacity:0}}
                       transition={{duration:0.5}}
                       whileInView={{opacity:1, y:0}} className="my-16 text-center text-4xl">Projects</motion.h1>
           <div>
               {PROJECTS.map((project,index)=>(
                   <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                       <motion.div
        initial={{x:-100, opacity:0}}
        transition={{duration:0.5}}
        whileInView={{opacity:1, x:0}} className="w-full lg:w-1/4">
                           
                           <img src={project.image} alt={project.title} width={200} height={150} className="mb-6 rounded" />
                       
                       </motion.div>
                       
                       <motion.div
                        initial={{x:-100, opacity:0}}
                        transition={{duration:1}}
                        whileInView={{opacity:1, x:0}} className="w-full max-w-xl lg:w-3/4">
                           <h6 className="mb-2 font-semibold">
                               {project.title} 
                               
                           </h6>
                           <p className="mb-4 mt-2 text-neutral-400">{project.description}</p>
                           <span>{project.links.map((link, index)=>(
                                          <a key={index} href={link}  target="_blank" className="mr-2 mt-4 rounded bg-blue-500 px-2 py-1 text-sm font-medium text-purple-100">Project detail</a>
                                      ))}</span>
                           
                           
                           {project.technologies.map((tech, index)=>(
                               <span key={index}  className="mr-2 mt-4 rounded border border-red-400 px-2 py-1 text-sm font-medium text-red-400 inline-block" >{tech}</span>
                           ))}
                           
                           </motion.div>
                       </div>
               ))}
           </div>
       </div>
  )
}

export default Projects
