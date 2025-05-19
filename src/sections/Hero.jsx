import React from 'react'
import { words } from '../constants'
import { Button } from '../components/Button'
import { FaDownload } from "react-icons/fa";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Typewriter } from 'react-simple-typewriter';
import { Tilt } from "react-tilt";
import ParticlesComponent from '../../particles/src/components/particles';


export const Hero = () => {

    useGSAP(()=>{
        gsap.fromTo('.hero-text h1',{
            y:50,
            opacity:0
        },
        {
           y:0,
           opacity:1,
           stagger:0.2,
           duration:3,
           ease:'power2.inOut'

        },
    )
    })


    return (
        <section id="hero" className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>
            <ParticlesComponent/>
            <div className='hero-layout'>
                {/* Left : Hero Content */}
                <header className='flex flex-col justify-center md:w-full w-screen md: px-20 py-5'>
                    <div className='flex flex-col gap-7 '>
                        <div className='hero-text'>
                            <h1>
                                Shaping
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                                />

                                                <span>{word.text} </span>
                                            </span>
                                        ))}
                                    </span>
                                </span>

                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className='text-white md:text-xl relative z-10 pointer-events-none'>
                            Hi, I'm <span className="text-3xl text-amber-500 font-bold">Vidhi</span>,{' '}
                            <span className='md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                                <Typewriter
                                    words={['Programmer', 'React Developer', 'Frontend Developer', 'UI Enthusiast']}
                                    loop={0} // 0 means infinite loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my Journey" />
                            <a
                                href="/MBIT_IT_vidhiMochi.pdf"
                                download
                                className=" md:w-80 md:h-16 w-60 h-12 cta-wrapper"
                            >
                                <div className='cta-button group'>
                                    <div className='bg-circle' />
                                    <p className='text'>Download Resume</p>
                                    <div className='arrow-wrapper'>
                                        <img src="/images/download.svg" alt="download" />
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </header>
                {/* Right : Hero Content 3D Modal */}
                <figure className="relative flex items-center justify-center p-5 md:p-15">
                    <Tilt
                        options={{
                            max: 25,
                            speed: 1000,
                            scale: 1.05,
                            glare: true,
                            "max-glare": 0.2,
                        }}
                    >
                        <div className="relative w-70 h-70 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_40px_rgba(199,125,255,0.4)] hover:shadow-[0_0_60px_rgba(199,125,255,0.7)] transition-all duration-500 ease-in-out">
                            <img
                                src="/images/vidhi.jpg"
                                alt="Vidhi Chauhan"
                                className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </Tilt>
                </figure>

            </div>

        </section>
    )
}
