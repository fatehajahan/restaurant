import React from 'react'
import offerImg from '../assets/offer.png'

const Offer = () => {
    return (
        <div className='py-[100px]'>
            <div
                className='relative w-full mx-auto h-[450px] rounded-2xl bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center'
                style={{ backgroundImage: `url(${offerImg})` }}
            >
                {/* Main Offer Text */}
                <p className='font-sansita text-[32px] sm:text-[40px] md:text-[48px] text-[#933C24] text-center px-4 py-2 rounded-md w-[400px] leading-[1.3] font-medium'>
                    20% Off Your First Order
                </p>

                {/* Subtext */}
                <p className='text-[#5D5D5D] text-center w-[300px] mt-4'>
                    Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum.
                </p>
            </div>
        </div>
    )
}

export default Offer
