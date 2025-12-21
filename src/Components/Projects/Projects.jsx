import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <section>
        <div className='wrapper p-block-9'>
            <div className='flex between gap-4'>
                <div>
                    <span className="sub-text">My Portfolio</span>
                    <h2>
                      let's have a lock <br /> at <span className='text-green'>My Portfolio</span>
                    </h2>

                </div>
                <a href="" className='btn'>View All Projects</a>

            </div>

        </div>
    </section>
  )
}

export default Projects


const ProjectData =[
    {
        id:1,
        title:"Project Title 1",
        decri:"jo"
         
    }
]
