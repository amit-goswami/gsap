import React from 'react'
import Morphline from '../assets/morphline.svg'
import Rift from '../assets/rift_first.png'


function Footer() {
    return (
        <section className='p-8'>
            <div className='flex items-center gap-2'>
                <svg className='flex-grow' viewBox="0 0 1653 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.905762" y1="1.93066" x2="1652.61" y2="1.93081" stroke="black" strokeWidth="2" />
                </svg>
                <img src={Morphline} className='shrink-0 w-20 md:w-32 2xl:w-40' alt="" />
            </div>

            <footer className='md:grid md:grid-cols-6 md:-mt-10 md:pr-20 space-y-10 md:space-y-0 max-w-[95rem] text-bl'>
                <div className='col-span-2'>
                    <h1 className='text-2xl md:text-xl 2xl:text-[26px] text-[#202020]'>Threadality Technologies LLP</h1>
                    <p className='text-xl md:text-lg 2xl:text-[22px] italic leading-loose text-[#202020D9]'>USA - India - UAE</p>
                    <img src={Rift} className='w-60 md:w-64 2xl:w-72 my-4' alt="" />
                </div>
                <div className='w-full md:pl-6'>
                    <h1 className='font-bold md:text-xl 2xl:text-[26px]  text-[#202020D9]'>Products</h1>
                     <ul className='text-base 2xl:text-lg italic space-y-3 mt-3'>
                        <li className='footer_el'>Greyffiti</li>
                        <li className='footer_el'>Feddup</li>
                        <li className='footer_el'>Cornerqube</li>
                        <li className='footer_el'>Byrds</li>
                        <li className='footer_el'>1723</li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h1 className='font-bold md:text-xl 2xl:text-[26px]  text-[#202020D9]'>Verticals</h1>
                    <ul className='text-base 2xl:text-lg italic space-y-3 mt-3'>
                        <li className='footer_el'>Morphline Studio</li>
                        <li className='footer_el'>Jellyki</li>
                        <li className='footer_el'>Benny Bland</li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h1 className='font-bold md:text-xl 2xl:text-[26px]  text-[#202020D9]'>SubDivisions</h1>
                    <ul className='text-base 2xl:text-lg italic space-y-3 mt-3'>
                        <li className='footer_el'>Illustrix</li>
                        <li className='footer_el'>Fennes Nibble</li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h1 className='font-bold md:text-xl 2xl:text-[26px]  text-[#202020D9]'>Initiative</h1>
                    <ul className='text-base 2xl:text-lg italic space-y-3 mt-3'>
                        <li className='footer_el'>Byrds</li>
                        <li className='footer_el'>En4ce</li>
                    </ul>
                </div>
            </footer>

        </section>
    )
}

export default Footer