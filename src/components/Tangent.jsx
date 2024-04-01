import React from 'react'
import Navbar from './Navbar'
import Morphline from '../assets/morphline.png'
import Jellyki from '../assets/jellyki.png'
import Benny from '../assets/benny.png'
import Footer from './Footer'

function Tangent() {
    return (
        <section>
            <Navbar />
 
            <section className='min-h-screen w-[100vw] overflow-x-hidden flex flex-col items-center justify-end md:justify-center  md:pt-24'>
                <h1 className='text-5xl md:text-[150px] 2xl:text-[180px] text-bl absolute top-0 left-0 flex-col gap-0 px-5 py-10 hidden md:flex'>
                    <span className='transform leading-[0.6] -rotate-90'>s</span>
                    <span className='transform leading-[0.6] -rotate-90'>t</span>
                    <span className='transform leading-[0.6] -rotate-90'>n</span>
                    <span className='transform leading-[0.6] -rotate-90'>e</span>
                    <span className='transform leading-[0.6] -rotate-90'>g</span>
                    <span className='transform leading-[0.6] -rotate-90'>n</span>
                    <span className='transform leading-[0.6] -rotate-90'>a</span>
                    <span className='transform leading-[0.6] -rotate-90'>T</span>
                </h1>
                <h1 className='text-5xl md:text-[110px] 2xl:text-[120px] text-bl absolute top-0 right-10 transform translate-x-1 hidden md:flex flex-col gap-0 py-5'>
                    <span className='transform leading-[0.6] rotate-90'>D</span>
                    <span className='transform leading-[0.6] rotate-90'>e</span>
                    <span className='transform leading-[0.6] rotate-90'>s</span>
                    <span className='transform leading-[0.6] rotate-90'>t</span>
                    <span className='transform leading-[0.6] rotate-90'>i</span>
                    <span className='transform leading-[0.6] rotate-90'>n</span>
                    <span className='transform leading-[0.6] rotate-90'>a</span>
                    <span className='transform leading-[0.6] rotate-90'>t</span>
                    <span className='transform leading-[0.6] rotate-90'>i</span>
                    <span className='transform leading-[0.6] rotate-90'>o</span>
                    <span className='transform leading-[0.6] rotate-90'>n</span>
                    <span className='transform leading-[0.6] rotate-90'>s</span>
                </h1>
                <div className='text-center md:text-left'>
                    <h3 className='text-7xl 2xl:text-[170px] text-bl mb-10 md:hidden'>Tangents</h3>
                    <h3 className='text-[2.8rem] md:text-[160px] 2xl:text-[180px] italic text-bl leading-snug'>Different</h3>
                    <h3 className='text-[2.8rem] md:text-[160px] 2xl:text-[180px] md:leading-tight text-bl'>Vectors</h3>
                    <h3 className='text-[3.1rem] mt-6 md:text-[170px] text-bl md:hidden'>Destinations</h3>
                </div>
            </section>

            <section className='bg-bl flex flex-col items-center px-5 py-20 md:py-40 mt-10 md:mt-52 gap-8'>
                <div className='bg-body rounded-2xl p-5 w-[220px] md:w-[420px] h-[260px] md:h-[500px] flex flex-col items-center justify-center relative group'>
                    <div className='absolute inset-0 z-20 bg-[#CECECEBA] rounded-2xl cursor-pointer items-center justify-center gap-4 opacity-0 flex md:group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                        <h1 className='text-bl italic text-7xl'>Visit</h1>
                        <svg className='h-20' viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M93.2399 3.3304C93.2399 1.94969 92.1206 0.830403 90.7399 0.830403L68.2399 0.830404C66.8592 0.830404 65.7399 1.94969 65.7399 3.33041C65.7399 4.71112 66.8592 5.83041 68.2399 5.83041H88.2399V25.8304C88.2399 27.2111 89.3592 28.3304 90.7399 28.3304C92.1206 28.3304 93.2399 27.2111 93.2399 25.8304L93.2399 3.3304ZM4.11933 93.4865L92.5077 5.09817L88.9721 1.56264L0.583796 89.951L4.11933 93.4865Z" fill="#202020" />
                        </svg>
                    </div>
                    <h1 className='text-white text-3xl md:text-[100px] leading-none absolute top-1 -right-14 md:-right-60 mix-blend-difference tracking-wide -mr-1 md:-mr-2'>Boutique</h1>
                    <img src={Morphline} className='h-32 md:h-60 -mt-4' alt="" />
                    <h1 className='text-white text-3xl md:text-[100px] leading-none absolute bottom-1 -left-14 md:-left-60 mix-blend-difference tracking-wide ml-1'>Services</h1>
                </div>
                <svg className='h-40 md:h-60' viewBox="0 0 4 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.07178" y1="300.329" x2="2.07179" y2="0.329102" stroke="#CECECE" strokeWidth="3" />
                </svg>
                <div className='bg-body rounded-2xl p-5 w-[220px] md:w-[420px] h-[260px] md:h-[500px] flex flex-col items-center justify-center relative group'>
                    <div className='absolute inset-0 z-20 bg-[#CECECEBA] rounded-2xl cursor-pointer items-center justify-center gap-4 opacity-0 flex md:group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                        <h1 className='text-bl italic text-7xl'>Visit</h1>
                        <svg className='h-20' viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M93.2399 3.3304C93.2399 1.94969 92.1206 0.830403 90.7399 0.830403L68.2399 0.830404C66.8592 0.830404 65.7399 1.94969 65.7399 3.33041C65.7399 4.71112 66.8592 5.83041 68.2399 5.83041H88.2399V25.8304C88.2399 27.2111 89.3592 28.3304 90.7399 28.3304C92.1206 28.3304 93.2399 27.2111 93.2399 25.8304L93.2399 3.3304ZM4.11933 93.4865L92.5077 5.09817L88.9721 1.56264L0.583796 89.951L4.11933 93.4865Z" fill="#202020" />
                        </svg>
                    </div>
                    <h1 className='text-white text-3xl md:text-[100px] leading-none absolute top-1 right-1/2 transform translate-x-1/2 mix-blend-difference tracking-wide md:-mr-2'>Notebooks</h1>
                    <img src={Jellyki} className='h-32 md:h-60' alt="" />
                    <h1 className='text-white text-3xl md:text-[100px] leading-none absolute bottom-1 left-1/2 transform -translate-x-1/2 mix-blend-difference tracking-wide md:ml-2'>Notebooks</h1>
                </div>
                <svg className='h-40 md:h-60' viewBox="0 0 4 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.07178" y1="300.329" x2="2.07179" y2="0.329102" stroke="#CECECE" strokeWidth="3" />
                </svg>

                <div className='bg-body rounded-2xl p-5 w-[220px] md:w-[420px] h-[260px] md:h-[500px] flex flex-col items-center justify-center relative group'>
                    <div className='absolute inset-0 z-20 bg-[#CECECEBA] rounded-2xl cursor-pointer items-center justify-center gap-4 opacity-0 flex md:group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                        <h1 className='text-bl italic text-7xl'>Visit</h1>
                        <svg className='h-20' viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M93.2399 3.3304C93.2399 1.94969 92.1206 0.830403 90.7399 0.830403L68.2399 0.830404C66.8592 0.830404 65.7399 1.94969 65.7399 3.33041C65.7399 4.71112 66.8592 5.83041 68.2399 5.83041H88.2399V25.8304C88.2399 27.2111 89.3592 28.3304 90.7399 28.3304C92.1206 28.3304 93.2399 27.2111 93.2399 25.8304L93.2399 3.3304ZM4.11933 93.4865L92.5077 5.09817L88.9721 1.56264L0.583796 89.951L4.11933 93.4865Z" fill="#202020" />
                        </svg>
                    </div>
                    <h1 className='text-white text-3xl md:text-[100px] leading-none absolute top-1 md:-left-80 mix-blend-difference tracking-wide md:ml-1'>Merchandise</h1>
                    <img src={Benny} className='h-32 md:h-60' alt="" />
                    <h1 className='text-white text-3xl md:text-[100px] leading-none absolute bottom-1 md:left-1/2 transform -translate-x-14 md:-translate-x-1/2 mix-blend-difference tracking-wide ml-2'>Merchandise</h1>
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default Tangent