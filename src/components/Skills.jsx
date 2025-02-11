import { SKILLS } from "../constants";
import { motion } from "motion/react";

const Skills = () => {
  return (
        <div className='border-b border-purple-500 pb-4'>
      <motion.h1
      initial={{y:-100, opacity:0}}
    transition={{duration:0.5}}
    whileInView={{opacity:1, y:0}} className='my-16 text-center text-4xl'>
        <span className='text-neutral-500'>Technical Skills & Expertise</span>
      </motion.h1>
      <div className='flex flex-wrap'>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'> {/* Responsive Grid */}
            {SKILLS.map((skill, index) => (
              <motion.div
              initial={{x:-100, opacity:0}}
              transition={{duration:1}}
              whileInView={{opacity:1, x:0}}
               key={index} className="mb-4"> {/* Margin bottom for spacing */}
                <h6 className="mb-1 font-semibold">{skill.title}</h6>
                {skill.description.map((des, descIndex) => (
                  <p key={descIndex} className="mb-1 text-neutral-400">{des}</p>
                ))}
              </motion.div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Skills


