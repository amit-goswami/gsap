import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Rays() {
    return ( 
        <section>
            <Navbar />
            <section className='flex flex-col items-start justify-center md:justify-end text-bl min-h-[105dvh] p-3'>
                <p className='md:leading-[0.6] text-6xl md:text-[8vw] lg:pl-14'>Vectors</p>
                <div className='md:leading-[0.9] text-center w-full'><span className='text-[#202020D9] italic text-[5vw] md:text-[7vw]'>In</span> <span className='text-[#202020D9] italic text-[10vw] md:text-[13vw]'>the</span> <span className='text-[19vw]'>Right</span></div>
                <p className='leading-[1.2] text-[17vw] md:text-[18vw] text-center'>Direction</p>
            </section>

            <section className='md:pt-40 lg:pt-60 pb-20 lg:pb-40 -mt-28 md:-mt-0'>

                <div className='w-full lg:grid lg:grid-cols-2 space-y-4 lg:space-y-0 lg:gap-4 p-5 lg:px-14'>

                    <div className='p-3 rounded-2xl border-2 border-[#202020] relative group'>
                        <div className='overflow-hidden flex items-center group-hover:gap-2 cursor-pointer rounded-xl border border-[#202020] max-w-max absolute top-1 right-1 w-20 group-hover:w-40 transition-all duration-200 ease-in-out'>
                            <p className='hidden md:inline-block py-2 pl-3 text-2xl transform opacity-0 scale-x-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:scale-100 origin-right transition-all duration-500 ease-in-out'>Visit</p>
                            <span className='pl-3 md:pl-0 py-2 pr-3 bg-body z-10'>
                                <svg className=' transform rotate-45 group-hover:rotate-0 h-5 lg:h-7 transition-all duration-300 ease-in-out' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.5479 2.09268C31.5479 1.26426 30.8764 0.592683 30.0479 0.592682L16.5479 0.592682C15.7195 0.592682 15.0479 1.26425 15.0479 2.09268C15.0479 2.92111 15.7195 3.59268 16.5479 3.59268L28.5479 3.59268L28.5479 15.5927C28.5479 16.4211 29.2195 17.0927 30.0479 17.0927C30.8764 17.0927 31.5479 16.4211 31.5479 15.5927L31.5479 2.09268ZM2.82433 31.4376L31.1086 3.15334L28.9873 1.03202L0.703012 29.3163L2.82433 31.4376Z" fill="#202020" />
                                </svg>
                            </span>
                        </div>
                        <h1 className='text-4xl lg:text-[5.2rem] 2xl:text-[7.5rem] leading-none text-bl'>En4ce</h1>
                        <div className='flex items-start gap-3 lg:gap-5 pt-4'>
                            <img src="/en4ce.png" className='w-20 lg:w-44' alt="" />
                            <p className='lg:p-5 max-w-md lg:text-lg 2xl:text-xl text-bl'>A program where we train students in important skills like Computer science, Electronics, Design thinking, Soft Skills.</p>
                        </div>
                    </div>

                    <div className='p-3 group rounded-2xl border-2 border-[#202020] relative'>
                        <div className='overflow-hidden flex items-center group-hover:gap-2 cursor-pointer rounded-xl border border-[#202020] max-w-max absolute top-1 right-1 w-20 group-hover:w-40 transition-all duration-200 ease-in-out'>
                            <p className='hidden md:inline-block py-2 pl-3 text-2xl transform opacity-0 scale-x-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:scale-100 origin-right transition-all duration-500 ease-in-out'>Visit</p>
                            <span className='pl-3 md:pl-0 py-2 pr-3 bg-body z-10'>
                                <svg className=' transform rotate-45 group-hover:rotate-0 h-5 lg:h-7 transition-all duration-300 ease-in-out' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.5479 2.09268C31.5479 1.26426 30.8764 0.592683 30.0479 0.592682L16.5479 0.592682C15.7195 0.592682 15.0479 1.26425 15.0479 2.09268C15.0479 2.92111 15.7195 3.59268 16.5479 3.59268L28.5479 3.59268L28.5479 15.5927C28.5479 16.4211 29.2195 17.0927 30.0479 17.0927C30.8764 17.0927 31.5479 16.4211 31.5479 15.5927L31.5479 2.09268ZM2.82433 31.4376L31.1086 3.15334L28.9873 1.03202L0.703012 29.3163L2.82433 31.4376Z" fill="#202020" />
                                </svg>
                            </span>
                        </div>
                        <div className='flex items-end gap-5'>
                            <img src="/jelly.png" className='w-20 lg:w-36 lg:px-3' alt="" />
                            <div>
                                <p className='lg:py-5 pr-5 max-w-md lg:text-lg 2xl:text-xl text-bl ml-2'>Notebooks where we create a positive impact. Allowing us to help students, animal shelters and Environment</p>
                                <h1 className='text-4xl lg:text-[5.2rem] 2xl:text-[7.5rem] leading-none text-bl mt-4'>Jellyki</h1>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2 p-3 rounded-2xl border-2 border-[#202020] relative flex gap-4 lg:gap-2 flex-col items-center lg:items-start lg:flex-row justify-between'>
                        <p className='lg:p-5 max-w-md lg:text-lg 2xl:text-xl text-bl'>An initiative where we leverage new age technology into planting trees and spawning algae. To make the earth a greener and cleaner place.</p>
                        <div className='flex flex-col items-center'>
                            <img src="/byrds.png" className='w-20 lg:w-28' alt="" />
                            <h1 className='text-4xl lg:text-[5.2rem] 2xl:text-[7.5rem] lg:mt-6 text-bl'>Byrds</h1>
                        </div>
                        <div className='flex items-center justify-center flex-wrap gap-2 sm:gap-4 w-full max-w-sm lg:min-w-[380px] mt-6 lg:mt-0'>
                            <div className='bg-bl p-4 text-[#A4FF8D] rounded-3xl w-[140px] lg:w-[180px]'>
                                <p className='text-2xl sm:text-3xl md:text-4xl w-[100px] sm:w-[110px] lg:w-[120px] text-right break-words ml-auto'>1, 123, 499</p>
                                <p className='text-base lg:text-xl mt-4'>Trees</p>
                                <p className='text-base lg:text-xl'>Planted</p>
                            </div>
                            <div className='bg-bl p-4 text-[#8DFFCF] rounded-3xl w-[140px] lg:w-[180px]'>
                                <p className='text-2xl sm:text-3xl md:text-4xl w-[100px] sm:w-[110px] lg:w-[120px] break-words mr-auto'>1, 123, 499</p>
                                <p className='text-base lg:text-xl mt-4 text-right'>Algae</p>
                                <p className='text-base lg:text-xl text-right'>Planted</p>
                            </div>
                            <div className='flex items-center justify-center gap-5 w-[320px] lg:w-[380px] py-3 px-4 rounded-xl border-2 border-[#202020] group cursor-pointer'>
                                <h1 className='text-base lg:text-xl'>Visit our byrds page</h1>
                                <svg className=' h-5 lg:h-6 transform rotate-45 group-hover:rotate-0 transition-all duration-200 ease-in-out' viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.8351 2.03409C30.8351 1.20566 30.1635 0.534089 29.3351 0.534088L15.8351 0.534088C15.0066 0.534088 14.3351 1.20566 14.3351 2.03409C14.3351 2.86252 15.0066 3.53409 15.8351 3.53409L27.8351 3.53409L27.8351 15.5341C27.8351 16.3625 28.5066 17.0341 29.3351 17.0341C30.1635 17.0341 30.8351 16.3625 30.8351 15.5341L30.8351 2.03409ZM2.11144 31.379L30.3957 3.09475L28.2744 0.973428L-0.0098789 29.2577L2.11144 31.379Z" fill="#202020" />
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </section>
    )
}

export default Rays