import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const products = [
    {
        id: 1, 
        name: 'Feddup',
        image: '/feddup.png',
        b2b: 'B2B',
        b2c: 'B2C',
        color: '#EDCB9B',
        desc: 'Platform helping users and product owners to better communicate and help in product development cycle.',
        tags: ['Productivity', 'CRM', 'SaaS', 'Plug & Play'],
        users: [
            {
                name: 'Free',
                color: '#8CF090'
            }
        ],
        businesses: [
            {
                name: 'Freemium',
                color: '#F0E68C'
            },
            {
                name: 'Upgrade',
                color: '#F0C88C'
            }
        ]
    },
    {
        id: 2,
        name: 'Greyffiti',
        image: '/greyffiti.png',
        b2b: 'B2B',
        b2c: 'B2C',
        color: '#B8E2DD',
        desc: 'Platform helping creative professionals to Think, Create and Share Faster, easier and safer!',
        tags: ['Collaborate', 'Creative', 'SaaS', 'Local Install'],
        users: [
            {
                name: 'Freemium',
                color: '#F0E68C'
            },
            {
                name: 'Upgrade',
                color: '#F0C88C'
            }
        ],
        businesses: [
            {
                name: 'Freemium',
                color: '#F0E68C'
            },
            {
                name: 'Upgrade',
                color: '#F0C88C'
            }
        ]
    },
    {
        id: 3,
        name: 'CornerQube',
        image: '/cornerqube.png',
        b2b: 'B2B',
        b2c: '',
        color: '#C7E6A0',
        desc: 'Platform helping Startups, MSMEs and Large Enterprises to streamline Client and Vendor interactions.',
        tags: ['Streamline', 'Search', 'Compare', 'B2B connect'],
        users: [
            {
                name: 'View only',
                color: '#F08C8C'
            },
        ],
        businesses: [
            {
                name: 'Free trial',
                color: '#8CBAF0'
            },
            {
                name: 'Upgrade',
                color: '#F0C88C'
            }
        ]
    },
    {
        id: 4,
        name: 'Byrds',
        image: '/byrds.png',
        b2b: 'B2B',
        b2c: 'B2C',
        color: '#91ECA5',
        desc: 'Platform helping business improve their Eco ESG rating through API based plantations and customer interactions.',
        tags: ['Transparency', 'Eco-ESG', 'GreenaaS', 'Environment'],
        users: [
            {
                name: 'View only',
                color: '#F08C8C'
            },
        ],
        businesses: [
            {
                name: 'Contract',
                color: '#8CF0F0'
            },
            {
                name: 'PAYG',
                color: '#A08CF0'
            }
        ]
    },
    {
        id: 5,
        name: 'Entropi',
        image: '/entropi.png',
        b2b: 'B2B',
        b2c: '',
        color: '#EFB4F1',
        desc: 'Platform to enable business to convert  leads to potential customers. Analyze customer activity and discounts and more.',
        tags: ['Analyze', 'Satisfaction', 'SaaS', 'Local Install'],
        users: [
            {
                name: 'View only',
                color: '#F08C8C'
            },
        ],
        businesses: [
            {
                name: 'Free trial',
                color: '#8CBAF0'
            },
            {
                name: 'Upgrade',
                color: '#F0C88C'
            }
        ]
    },
]

function Vector() {
    return (
        <section>
            <Navbar />
            <section className='w-full min-h-[120dvh] flex flex-col items-center md:items-start justify-end px-8'>
                <div className='text-center md:text-left'>
                    <h1 className='text-8xl md:text-[280px] 2xl:text-[320px] 2xl:leading-[0.8] text-bl'>Built</h1>
                    <h3 className='text-5xl md:text-[140px] 2xl:text-[170px] leading-none text-[#202020D9]'>EASY.</h3>
                    <h3 className='text-5xl md:text-[140px] 2xl:text-[170px] leading-none text-[#202020D9]'>INTUITIVE.</h3>
                    <h3 className='text-5xl md:text-[140px] 2xl:text-[170px] leading-none text-[#202020D9]'>ADAPTIVE.</h3>
                </div>
            </section>
            <section className='min-h-screen pt-52 px-12 flex flex-col gap-40'>
                {
                    products.map((product, i) => {
                        return <div key={i} className={`relative group rounded-3xl bg-bl flex items-start gap-8 p-8 max-w-5xl ${i % 2 === 0 ? 'mr-auto -rotate-[3deg]' : 'ml-auto rotate-[3deg]'}`} style={{ color: product.color }}>
                            <div className='absolute inset-0 z-20 bg-[#202020D1] rounded-2xl cursor-pointer items-center justify-center gap-6 opacity-0 md:group-hover:opacity-100 flex  transition-all duration-300 ease-in-out'>
                                <h1 className='text-white italic text-9xl 2xl:text-[140px]'>Visit</h1>
                                <svg className='h-28' viewBox="0 0 145 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M141.754 5.12163C141.61 2.36399 139.257 0.245638 136.499 0.39016L91.561 2.74528C88.8034 2.8898 86.685 5.24248 86.8295 8.00011C86.9741 10.7578 89.3267 12.8761 92.0844 12.7316L132.03 10.6381L134.123 50.5833C134.268 53.341 136.62 55.4593 139.378 55.3148C142.135 55.1703 144.254 52.8176 144.109 50.06L141.754 5.12163ZM8.32356 155.5L140.477 8.72896L133.045 2.03766L0.89211 148.809L8.32356 155.5Z" fill="white" />
                                </svg>

                            </div>
                            <div>
                                <img src={product.image} className='w-28' alt="" />
                            </div>
                            <div className='flex flex-col'>
                                {
                                    product.name == "Greyffiti"
                                        ?
                                        <div className='flex items-center'>
                                            <h1 className='text-3xl italic'>Greyff</h1>
                                            <h1 className='text-3xl italic'>iti</h1>
                                        </div>
                                        :
                                        <h1 className='text-3xl italic'>{product.name}</h1>
                                }
                                <div className='flex items-center gap-3 my-3 font-bold text-xl tracking-wider'>
                                    <p>{product.b2b}</p>
                                    {product.b2c ? <svg className='h-2.5' viewBox="0 0 62 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.382859 6.71282C-0.0076653 7.10334 -0.00766525 7.7365 0.382859 8.12703L6.74682 14.491C7.13735 14.8815 7.77051 14.8815 8.16103 14.491C8.55156 14.1005 8.55156 13.4673 8.16103 13.0768L2.50418 7.41992L8.16103 1.76307C8.55156 1.37254 8.55156 0.739378 8.16103 0.348853C7.77051 -0.0416709 7.13734 -0.0416709 6.74682 0.348854L0.382859 6.71282ZM61.09 7.41992L51.09 1.64641L51.09 13.1934L61.09 7.41992ZM1.08997 8.41992L52.09 8.41992L52.09 6.41992L1.08997 6.41992L1.08997 8.41992Z" fill="white" />
                                    </svg> :
                                        <svg className='h-2.5' viewBox="0 0 66 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.359955 9.22656L10.6484 14.4688L10.0441 2.93761L0.359955 9.22656ZM54.9517 6.36553C55.1059 9.30701 57.6154 11.5666 60.5569 11.4124C63.4983 11.2583 65.7579 8.74876 65.6038 5.80727C65.4496 2.86579 62.9401 0.606219 59.9986 0.760375C57.0571 0.914532 54.7975 3.42404 54.9517 6.36553ZM9.39996 9.75417L60.3301 7.08503L60.2254 5.08777L9.29528 7.75691L9.39996 9.75417Z" fill="white" />
                                        </svg>
                                    }
                                    {product.b2c ? <p>{product.b2c}</p> : <div className='w-4 h-4 rounded-full bg-white'></div>}
                                </div>
                                <p className='max-w-xl text-2xl'>{product.desc}</p>

                                <div className='flex gap-5 justify-between mb-4 mt-10'>
                                    <div className='flex flex-wrap gap-2 w-64'>
                                        {product.tags.map(tag => <span key={tag} className='border-2 py-1 px-3 rounded-full italic' style={{ borderColor: product.color }}>{tag}</span>)}
                                    </div>
                                    <div className='col-span-2 grid grid-cols-3 items-center gap-x-2 gap-y-1 text-white text-xl'>
                                        <h1 className='text-right'>Users:</h1>
                                        <div className='col-span-2 flex items-center gap-3'>
                                            {
                                                product.users.map((user) => {
                                                    return <div key={user.name} className='flex items-center gap-2 pl-1 pr-2 italic py-0.5 rounded-full border border-white'>
                                                        <div className='w-6 h-6 rounded-full' style={{ backgroundColor: user.color }}></div>
                                                        <span className='text-white'>{user.name}</span>
                                                    </div>
                                                })
                                            }
                                        </div>
                                        <h1 className='text-right'>Businesses:</h1>
                                        <div className='col-span-2 flex items-center gap-3'>
                                            {
                                                product.businesses.map((user) => {
                                                    return <div key={user.name} className='flex items-center gap-2 pl-1 pr-2 italic py-0.5 rounded-full border border-white'>
                                                        <div className='w-6 h-6 rounded-full' style={{ backgroundColor: user.color }}></div>
                                                        <span className='text-white'>{user.name}</span>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }

                <div className='flex items-center justify-center gap-6 md:gap-10 py-20'>
                    <svg className='shrink h-7 2xl:h-9' viewBox="0 0 203 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M201.848 20.8547C202.825 19.8784 202.825 18.2955 201.848 17.3192L185.939 1.40926C184.962 0.43295 183.379 0.43295 182.403 1.40926C181.427 2.38557 181.427 3.96848 182.403 4.94479L196.545 19.0869L182.403 33.2291C181.427 34.2054 181.427 35.7883 182.403 36.7646C183.379 37.7409 184.962 37.7409 185.939 36.7646L201.848 20.8547ZM0.0806883 21.5869L200.081 21.5869L200.081 16.5869L0.0806887 16.5869L0.0806883 21.5869Z" fill="#202020" />
                    </svg>
                    <h1 className='text-6xl 2xl:text-[68px] min-w-max text-bl'>We are working on many more</h1>
                    <svg className='shrink h-7 2xl:h-9' viewBox="0 0 203 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.732233 17.3191C-0.244078 18.2955 -0.244078 19.8784 0.732233 20.8547L16.6421 36.7646C17.6184 37.7409 19.2014 37.7409 20.1777 36.7646C21.154 35.7883 21.154 34.2054 20.1777 33.2291L6.03553 19.0869L20.1777 4.94478C21.154 3.96847 21.154 2.38556 20.1777 1.40925C19.2014 0.432935 17.6184 0.432935 16.6421 1.40925L0.732233 17.3191ZM2.5 21.5869L202.5 21.5869L202.5 16.5869L2.5 16.5869L2.5 21.5869Z" fill="#202020" />
                    </svg>

                </div>
            </section>
            <Footer />
        </section>
    )
}

export default Vector