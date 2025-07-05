import React from 'react'
import MainBanner from '../components/MainBanner'
import Catagories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'

const Home = () => {
  return (
    <div className='mt-10'>
       <MainBanner/>
       <Catagories/>
       <BestSeller/>
       <BottomBanner/>
    </div>
  )
}

export default Home
