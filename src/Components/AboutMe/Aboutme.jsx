import React from 'react'
import './Aboutme.css'
import aboutimg from '../../assets/about-image.png'
import CV from '../../assets/naveen resume.pdf'

const Aboutme = () => {
  return (
    <section>
      <div className='flex gap-5  wrapper p-block-9 border-btm '>
        <div className="about-image">
          <img src={aboutimg} alt="" />
        </div>

        <div className="about-content">
          <div className="sub-text">About Me</div>
          <h2 >Who is <span className='text-green'>Naveen Maan?</span></h2>
          <p className='para'>
            I'm Naveen Maan, a passionate web developer with expertise in React.js and Node.js  I love creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in front-end and back-end development, I enjoy tackling complex problems and turning ideas into reality through code.
          </p>
          <div className='flex gap-2 m-block-3'>
            <div className=''>
              <h6>2000+</h6>
              <p>projects completed</p>
            </div>
            <div className=''>
              <h6>3+</h6>
              <p className=''>Industry covered</p>
            </div>
            <div className=''>
              <h6>01+</h6>
              <p className=''>Years of Experience</p>
            </div>
          </div>
          <a href={CV} download="MY CV" className='btn'>Downlode CV</a>




        </div>

      </div>
    </section>
  )
}

export default Aboutme
