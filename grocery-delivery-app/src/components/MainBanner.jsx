import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
       <img src={assets.m_b_1} alt="banner" className='w-full hidden md:block h-150' />
       <img src={assets.m_2} alt="banner" className='w-full md:hidden' />
       <div className='absolute inset-0 flex flex-col items-center md:items-end justify-end md:justify-center px-4 md:pr-12 lg:pr-24'>
            <div className='flex flex-col items-center md:items-start'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>
                    Bringing Freshness to Your Doorstep, at Prices You'll Love! 
                </h1>
            

                <div className='flex items-center mt-6 mb-2 font-medium'>
                    <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
                    Shop now
                    <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
                    </Link>

                    <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
                    Explore deals
                    <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBanner