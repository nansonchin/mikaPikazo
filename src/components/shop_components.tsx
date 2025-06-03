import React,{ StrictMode, } from 'react';
import Porduct from '../assets/images/product-1.png'
import { Link } from 'react-router-dom';

interface ShopProps {
    id:number
    image_url: string[];
    category: string;
    title: string;
    price: string;
    description:string;
    content:string;
    information:string;
}

export default function Shop_components({
    id,
    image_url,
    title,
    category,
    price,
    description,
    content,
    information,
}:ShopProps){
    return(
        <div className='z-40 relative md:max-w-xs lg:max-w-sm'>
            <div className='flex flex-col'>
                <Link to={`/Shop/${id}`}>
                    <div className='border-2 relative cursor-pointer'>
                        <div className='relative overflow-hidden'>
                                <img src={image_url[0]}
                                className='w-full object-cover transition-transform duration-300 hover:scale-105 '
                               />
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
                </Link>
            </div>
        </div>
    );
}