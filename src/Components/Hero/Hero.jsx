import React from 'react'
import HeroImage from '../../assets/hero-image.png'
// import HeroImage1 from '../../assets/Naveen-hero.jpg'
import CV from '../../assets/naveen resume.pdf'
import './Hero.css'


const Hero = () => {
    return (
        <section>
            <div className='flex hero-section wrapper gap-4 '>
                <div className="hero-content">
                    <span className='sub-text'>
                        Hello there! <span className='wave-emoji'>👋</span>
                        <h1>
                            <span className='text-green'>
                                I'm Naveen Maan.
                            </span> <br />
                            web developer. based in India.
                        </h1>
                        <p className='para'>
                            Iam a passionate web developer with expertise in creating dynamic and responsive websites.
                        </p>
                        <div className='flex gap-2'>
                            <a href="" className='btn'>View My Works</a>
                            <a href={CV} download="MY CV" className='btn border-btn'>Downlode CV</a>
                        </div>
                    </span>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero
