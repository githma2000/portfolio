import { ExtraCurricular } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 flex flex-col items-center justify-center mr-20 ml-20">
        <motion.h1 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 0.5}}
        className="my-12 text-center text-4xl">Extra Curricular</motion.h1>
         <div>
            {ExtraCurricular.map((extra, index) => (
                <div key={index} className="mb-8 flex flex-wrap ">
                    <motion.div
                      whileInView={{ opacity: 1, x:0 }}
                      initial={{ opacity: 0, x: -100}}
                      transition={{ duration: 0.6}}
                     className="w-full lg:w-1/4 ">
                     <p className="mb-2 text-sm text-neutral-400 ">{extra.year}</p>
                    </motion.div>
                    <motion.div
                     whileInView={{ opacity: 1, x:0 }}
                     initial={{ opacity: 0, x: -100}}
                     transition={{ duration: 0.7}}
                     className="w-full max-w-full lg:w-3/4 ">
                        <motion.h6 
                         whileInView={{ opacity: 1, x:0 }}
                         initial={{ opacity: 0, x: -100}}
                         transition={{ duration: 0.85}}
                         className="mb-2 font-semibold ">
                            {extra.role} - <span>
                                {extra.club}
                            </span>
                        </motion.h6>
                        <motion.p 
                        whileInView={{ opacity: 1, x:0 }}
                        initial={{ opacity: 0, x: -100}}
                        transition={{ duration: 0.95}}
                        className="mb-4 text-neutral-400">{extra.description}</motion.p>
                        {extra.technologies.map((tech, index) =>(
                            <motion.span
                            whileInView={{ opacity: 1, x:0 }}
                            initial={{ opacity: 0, x: -100}}
                            transition={{ duration: 0.9}}
                                 key={index}
                                 className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm 
                                 font-medium text-purple-800"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            ))}
         </div>
    </div>
  )
}

export default Experience