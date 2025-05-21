import React,{ StrictMode, } from 'react';
import Porduct from '../assets/images/product-1.png'

interface ShopProps {
  images: string[];
  category: string;
  title: string;
  price: string;
}

export default function Shop_components({
    images,
    title,
    category,
    price,
}:ShopProps){
    return(
        <div className='z-40 relative md:max-w-xs lg:max-w-sm'>
            <div className='flex flex-col'>
                <div className='border-2 relative'>
                    <div className='relative overflow-hidden'>
                        {images.map((src,i)=>(
                            <img key={i} src={src} alt={`${title} ${i}`}
                            className='w-full object-cover transition-transform duration-300 hover:scale-105 '
                            style={{zIndex:images.length-i}}/>
                        ))}
                    </div>
                    <div className="">
                        <div className='bg-[#F40404] p-3 flex flex-col '>
                            <div className='text-[#F7F7F7] text-sm bg-[#080403] p-3 w-fit'>
                                {category}
                            </div>
                            <div className="text-[#F7F7F7] font-bold py-3">
                                {title}
                            </div>
                            <div className="text-[#F7F7F7] font-bold py-3 text-right">
                                {price}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}