import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion";

const cards = [
    {
        id: 0,
        image: '/illustrix.png',
        name: 'illustrix',
        desc: 'The finest story telling in breath-taking environments. Explore our worlds and amazing collections'
    },
    {
        id: 1,
        image: '/byrds.png',
        name: 'Byrds',
        desc: 'The finest story telling in breath-taking environments. Explore our worlds and amazing collections'
    },
    {
        id: 2,
        image: '/jelly.png',
        name: 'Jellyki',
        desc: 'The finest story telling in breath-taking environments. Explore our worlds and amazing collections'
    }
] 

const backgrounds = ['#202020', '#3A3A3A', '#5D5D5D']

function Units() {
    const [cardIndex, setCardIndex] = useState(0)

    useEffect(() => {
        // let index = 0;
        // let interval = setInterval(() => {
        //     if (index == cards.length - 1) {
        //         index = 0
        //         setCardIndex(index)
        //     }
        //     else {
        //         index += 1
        //         setCardIndex(index)
        //     }
        // }, 3000);
        // return () => clearInterval(interval);
    }, [])

    const handlePrevious = () => {
        if (cardIndex !== 0) {
            setCardIndex(cardIndex - 1)
        }
    }
    const handleNext = () => {
        if (cardIndex !== cards.length - 1) {
            setCardIndex(cardIndex + 1)
        }
    }
    return (
        <section>
            <Navbar />
            <section className='w-full min-h-[80dvh] md:min-h-[110dvh] flex flex-col items-center justify-end text-bl'>
                <h1 className='md:leading-[0.9] text-6xl md:text-[11vw]'>Unit</h1>
                <h1 className='md:leading-none italic text-6xl md:text-[11vw]'>Multiple</h1>
                <h1 className='leading-tight md:leading-none text-[21vw]'>VECTORS</h1>
                <p className='md:leading-none text-[4vw]'>Multiple Vectors. Multiple Innovations.</p>
            </section>

            <section className='min-h-screen items-center justify-between max-w-[95rem] gap-5 mx-auto hidden md:flex p-10'>
                <div className='flex flex-col gap-3 w-36'>
                    <svg onClick={handlePrevious} className='h-6 cursor-pointer' viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5192 1.03106C19.5429 0.0547504 17.96 0.0547504 16.9837 1.03106L1.0738 16.941C0.0974846 17.9173 0.0974846 19.5002 1.0738 20.4765C2.05011 21.4528 3.63302 21.4528 4.60933 20.4765L18.7515 6.33436L32.8936 20.4765C33.8699 21.4528 35.4528 21.4528 36.4291 20.4765C37.4054 19.5002 37.4054 17.9173 36.4291 16.941L20.5192 1.03106ZM21.2515 27.7988V2.79883H16.2515V27.7988H21.2515Z" fill="black" fillOpacity={cardIndex == 0 ? "0.5" : "1"} />
                    </svg>

                    <div onClick={() => setCardIndex(0)} className={`${cardIndex == 0 ? 'bg-bl text-[#CECECE]' : 'text-bl bg-transparent'} py-3 px-4 border border-[#202020] rounded-full 2xl:text-lg text-center cursor-pointer`}>
                        <h1>Gaming</h1>
                    </div>
                    <svg className='h-20' viewBox="0 0 3 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.68994" y1="100.107" x2="1.68994" y2="0.107422" stroke="black" strokeWidth="2" />
                    </svg>

                    <div onClick={() => setCardIndex(1)} className={`${cardIndex == 1 ? 'bg-bl text-[#CECECE]' : 'text-bl bg-transparent'} py-3 px-4 border border-[#202020] rounded-full 2xl:text-lg text-center cursor-pointer`}>
                        <h1>AI</h1>
                    </div>
                    <svg className='h-20' viewBox="0 0 3 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.68994" y1="100.107" x2="1.68994" y2="0.107422" stroke="black" strokeWidth="2" />
                    </svg>

                    <div onClick={() => setCardIndex(2)} className={`${cardIndex == 2 ? 'bg-bl text-[#CECECE]' : 'text-bl bg-transparent'} py-3 px-4 border border-[#202020] rounded-full 2xl:text-lg text-center cursor-pointer`}>
                        <h1>Blockchain</h1>
                    </div>

                    <svg onClick={handleNext} className='h-6 cursor-pointer' viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5192 27.4904C19.5429 28.4667 17.96 28.4667 16.9837 27.4904L1.0738 11.5805C0.0974846 10.6042 0.0974846 9.0213 1.0738 8.04499C2.05011 7.06868 3.63302 7.06868 4.60933 8.04499L18.7515 22.1871L32.8936 8.04499C33.8699 7.06868 35.4528 7.06868 36.4291 8.04499C37.4054 9.0213 37.4054 10.6042 36.4291 11.5805L20.5192 27.4904ZM21.2515 0.722656V25.7227H16.2515V0.722656L21.2515 0.722656Z" fill="black" fillOpacity={cardIndex == cards.length - 1 ? "0.5" : "1"} />
                    </svg>

                </div>
                <div className='flex-grow h-96 relative'>
                    {
                        cards.slice(cardIndex, cards.length).map((card, i) => (
                            <motion.div style={{ zIndex: 10 - i }} initial={{ backgroundColor: backgrounds[i], scale: 1 - i * 0.1, translateX: '-50%', translateY: -192 + i * 50 + 'px' }} animate={cardIndex == card.id ? { backgroundColor: backgrounds[i], scale: 1, translateX: '-50%', translateY: -192 + 'px' } : { backgroundColor: backgrounds[i], scale: 1 - i * 0.1, translateX: '-50%', translateY: -192 + i * 50 + 'px' }} key={card.id}
                                className='overflow-hidden h-96 w-full rounded-2xl max-w-3xl absolute top-1/2 left-1/2'
                            >
                                <Card card={card} />
                            </motion.div>
                        ))
                    }
                </div>

                <div className='xl:w-40'>

                </div>
            </section>

            <section className='flex flex-col gap-4 items-center justify-center md:hidden p-4 pb-20 pt-40'>
                {
                    ['Gaming', 'AI', 'Blockchain'].map((key, i) => {
                        return <motion.div initial={{ translateY: 100, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} key={key} className='flex flex-col items-start gap-3'>
                            <div className={`bg-bl text-[#CECECE] py-2 md:py-3 px-5 md:px-4 border border-[#202020] rounded-full text-lg text-center`}>
                                <h1>Gaming</h1>
                            </div>
                            <div className='flex items-start gap-2 pl-5'>
                                <div className='w-1 bg-bl rounded-full h-80'>
                                </div>
                                <div className='bg-bl rounded-2xl'>
                                    <Card card={cards[i]} />
                                </div>
                            </div>
                        </motion.div>
                    })
                }

            </section>
        </section>
    )
}

export default Units

const Card = ({ card }) => {
    return <motion.div className=' p-4 sm:p-6 md:p-8 rounded-xl h-72 sm:h-80 md:h-96 w-full group relative cursor-pointer' >
        <div className='bg-[#CECECE] p-1 pl-2 rounded-xl flex items-center gap-1 absolute top-3 right-3'>
            <h1 className='text-bl'>Visit</h1>
            <span className='py-1 px-3 bg-[#202020] md:bg-transparent rounded-xl group-hover:bg-[#202020] group-hover:text-[#CECECE] text-[#CECECE] md:text-[#202020] transition-all duration-300 ease-in-out'>
                <svg className='h-5 transform rotate-0 md:rotate-45 group-hover:rotate-0 transition-all duration-200 ease-in-out' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5431 2.0087C31.5431 1.18027 30.8715 0.508698 30.0431 0.508697L16.5431 0.508698C15.7146 0.508698 15.0431 1.18027 15.0431 2.0087C15.0431 2.83713 15.7146 3.5087 16.5431 3.5087L28.5431 3.5087L28.5431 15.5087C28.5431 16.3371 29.2146 17.0087 30.0431 17.0087C30.8715 17.0087 31.5431 16.3371 31.5431 15.5087L31.5431 2.0087ZM2.81945 31.3536L31.1037 3.06936L28.9824 0.948038L0.698129 29.2323L2.81945 31.3536Z" fill="currentColor" />
                </svg>
            </span>
        </div>
        <div className='flex items-end gap-3'>
            <img src={card.image} className='w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 object-contain' alt="" />
            <h1 className='text-white text-2xl sm:text-3xl md:text-4xl mb-3'>{card.name}</h1>
        </div>
        <p className='sm:text-lg text-[#CECECE] mt-3 md:mt-6 leading-relaxed sm:leading-loose'>{card.desc}</p>
    </motion.div >
}