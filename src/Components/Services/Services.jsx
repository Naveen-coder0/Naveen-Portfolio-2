import React from 'react'
import './Services.css'
import { FaPenRuler } from "react-icons/fa6";
import { FaPenNib, FaLaptopCode, FaArrowRight } from "react-icons/fa";


const Services = () => {
    const renderServicesData = servicesData.map(service => {
        return(
            <div className='card design'  key={service.id}>
                <span className='service-icon'>{service.icon}</span>
                <h3 className='m-block-1'>{service.title}</h3>
                <p className='m-block-1 hide-text'>{service.description}</p>
                <a href="" className='links'>Learn More
                    &nbsp;
                    <FaArrowRight className='arrow text-green' />
                </a>
            </div>
        )
    })
  return (
    <section>
        <div className='wrapper p-block-9 border-btm'>
            <div className='flex between gap-4'>
                <div>
                    <span className="sub-text">My Specialization</span>
                    <h2>
                       <span className='text-green'>Services</span>  I Provide
                    </h2>

                </div>
                <a href="" className='btn'>View All Services</a>

            </div>
            <div className='flex mt-5 gap-2 stretch'>
                {renderServicesData}
            </div>
        </div>
    </section>
  )
}

export default Services


const servicesData = [
    {
        id:1,
        title:"UI/UX Design",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <FaPenRuler />,
    },
    {
        id:2,
        title:"Application Design",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <FaPenNib />,
    },
    {
        id:3,
        title:"Web Design",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <FaLaptopCode />,
    },
]
