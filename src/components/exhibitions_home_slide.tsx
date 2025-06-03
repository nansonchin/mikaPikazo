// src/components/Slideshow.jsx
import React, { useState, useEffect, useRef } from 'react'
import viewIcon from '../assets/icons/view_icon.png'
import circle_Arrow from '../assets/icons/circle_arrow.png'
import SlideImage1 from '../assets/images/sui.png'
import SlideImage2 from '../assets/images/ily.png'
import SlideImage3 from '../assets/images/under.png'
import SlideImage1B from '../assets/images/sui_b.png'
import SlideImage2B from '../assets/images/illy_b.png'
import SlideImage3B from '../assets/images/under_b.png'
import { Link } from 'react-router-dom'
interface ExhibitionDetail{
    id:number;
    title:string;
    description:string;
    smile:number;
    love:number;
    view:number;
    date:Date;
    image_details:string[];
    category:string;
}

interface ExhibitionHomeProps {
    product: ExhibitionDetail[];
}
export default function ExhibitionSlides({product}:ExhibitionHomeProps) {
    // const images = [
    //     {
    //         id: 0,
    //         active: SlideImage1,
    //         unactive: SlideImage1B,
    //         name: '星街すいせい'
    //     },
    //     {
    //         id: 1,
    //         active: SlideImage2,
    //         unactive: SlideImage2B,
    //         name: 'ILY GATE'
    //     },
    //     {
    //         id: 2,
    //         active: SlideImage3,
    //         unactive: SlideImage3B,
    //         name: 'UNDER VOYAGER'
    //     },
    // ]
    const [currentPage, setCurrentPage] = useState(0)

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const prev = () => setCurrentPage((p) => (p === 0 ? product.length : p - 1));
    const next = () => setCurrentPage((p) => (p === product.length - 1 ? 0 : p + 1));

    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(next, 5000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        }
    }, [currentPage]);
    if (!product || product.length === 0) {
        return null;
    }
    return (
        <div>
            <div className="flex h-[50rem]">
                <div className='flex-1 w-1/2 p-10 bg-[#FFDC22] max-w-[100%]'>
                    <div className='font-bold text-8xl text-[#f7f7f7]'>{product[currentPage].title}</div>
                    <div className=' text-xl text-[#080403] py-5 max-h-[10rem] h-full overflow-y-scroll'>{product[currentPage].description}</div>
                    <div className='pt-25 flex justify-end'>
                        <img src={viewIcon} className='object-contain' />
                        <div className='text-lg text-[#080403] pl-2'>{product[currentPage].view}</div>
                    </div>
                    <div className='flex items-end justify-end pt-30'>
                        <div className='group relative cursor-pointer'>
                            <Link to={`${product[currentPage].id}`}>
                            <img src={circle_Arrow} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                            <div className='text-[#080403] text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Details</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-3 border-2 flex overflow-hidden w-full'>
                    {
                        product.map((data, index) => (
                            <div
                                key={data.id}
                              className={`
                                relative 
                                w-[${index === currentPage ? "100%" : "70%"}]
                                transition-transform duration-300 ease-in-out overflow-hidden
                                cursor-pointer hover:scale-105
                            `}
                            >
                                <img src={data.image_details[0]}
                                    alt="" className='h-full w-full object-cover z-10' onClick={()=>setCurrentPage(index)} />
                                    
                                {index === currentPage && (
                                    <div className="absolute top-0 left-0 h-2 w-full">
                                        <div key={`progress-${currentPage}`} className='h-full bg-[#F40404]' style={{ width: '0%', animation: 'progress 5s linear forwards' }}>
                                        </div>
                                    </div>
                                )}
                                {index !== currentPage && (
                                    <div className='absolute inset-0  pointer-events-none'>
                                        <div className='background-overlay-black w-full h-full '></div>
                                        <div className='text-[#f7f7f7] absolute bottom-10 right-5 font-bold text-4xl' style={{ writingMode: 'vertical-rl' }}>
                                            {data.title}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Keyframes */}
            <style>
                {`@keyframes progress { from { width: 0%; } to { width: 100%; } }`}
            </style>
        </div>
    )
}