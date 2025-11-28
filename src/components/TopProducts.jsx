import React from 'react'
import { product } from '../data'
import { FaHeart } from 'react-icons/fa'

const TopProducts = () => {
  return (
    <div className='py-[70px]'>
      <div className="container mx-auto px-4">

        <h2 className='font-sansita text-[40px] md:text-[64px] text-center mb-10'>
          Top Products
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

          {product.map((item) => (
            <div
              key={item.id}
              className='relative group overflow-hidden rounded-xl cursor-pointer hover:scale-105 duration-500 '
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-fit object-cover '
              />

              {/* Top-Left Heart Icon */}
              <button
                className='absolute top-4 left-4 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md 
                 hover:bg-[#933C24] hover:text-white duration-300'
              >
                <FaHeart className="text-[18px]" />
              </button>

              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 group-hover:opacity-100 transition duration-500'></div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full px-[50px] pb-[70px] flex justify-between items-end text-white">
                <div>
                  <p className="text-[22px] font-semibold capitalize font-inter">
                    {item.name}
                  </p>
                  <p className="text-[18px] font-medium">
                    {item.price}
                  </p>
                </div>

                <button className='bg-[#933C24] text-white px-4 py-2 rounded-md font-semibold cursor-pointer font-inter'>
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
