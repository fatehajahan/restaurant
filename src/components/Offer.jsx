import React from 'react'
import offerImg from '../assets/offer.png'

const Offer = () => {
    return (
        <section 
            className='py-[100px]' 
            aria-label="Special 20% discount on your first order"
        >
            <div
                className='relative w-full max-w-[1280px] mx-auto h-[450px] rounded-2xl bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4'
                style={{ backgroundImage: `url(${offerImg})` }}
                role="img"
                aria-label="Special offer banner background"
            >

                {/* Main Offer Heading */}
                <h2 className='font-sansita text-[32px] sm:text-[40px] md:text-[48px] text-[#933C24] max-w-[400px] leading-[1.3] font-medium'>
                    20% Off Your First Order
                </h2>

                {/* Subtext */}
                <p className='text-[#5D5D5D] max-w-[300px] mt-4'>
                    Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum.
                </p>

                {/* CTA Button */}
                <button
                    aria-label="Shop now and claim your discount"
                    className="mt-[25px] bg-[#933C24] text-white font-semibold md:px-10 px-[10px] py-[10px] md:py-4 rounded-md hover:bg-[#7c2f1a] duration-300 cursor-pointer w-full md:w-fit border hover:border-[#933C24] hover:bg-transparent hover:text-black"
                >
                    Shop Now
                </button>

            </div>
        </section>
    )
}

export default Offer
