import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import TopProducts from '../components/TopProducts'

const Home = () => {
    return (
        <div className='relative'>
            <div className="relative h-[450px] md:h-[650px] lg:h-[650px] overflow-hidden">
                <Navbar />
                <Banner />
            </div>
            <TopProducts />
        </div>
    )
}

export default Home