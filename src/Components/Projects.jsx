import React from 'react'
import {PROJECT} from "../Constants/Index";

export default function  Projects() {
  return (
    <div className='pb-4'>
        <h2 className='my-20 text-center text-4xldfg3'>Projects</h2>
        <div>
            {PROJECT.map((project, index)=>{
                return(
                    
                    <div key={index} className='mb-8 flex flex-wrap justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <img 
                            src={project.image}
                             alt={project.title}
                             width={250}
                             height={250}
                             className='mb-6 rounded'
                             />
                        </div>
                        <div className='w-full max-w-xl lg:h-3/4'>
                            <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                            <p className='mb-4 text-stone-300'>{project.description}</p>

                            {project.technologies.map((tech, index)=>{
                                return(
                                    <span
                                    className='mr-2 rounded bg-green-900 p-2 text-sm font-medium text-stone-300'
                                    key={index}
                                    >
                                        {tech}

                                    </span>
                                );
                            })}
                        </div>

                    </div>
                );
            })}
        </div>
    </div>
  )
}
