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
export default function ExhibitionSlides() {
    const images = [
        {
            id: 0,
            active: SlideImage1,
            unactive: SlideImage1B,
            name: '星街すいせい'
        },
        {
            id: 1,
            active: SlideImage2,
            unactive: SlideImage2B,
            name: 'ILY GATE'
        },
        {
            id: 2,
            active: SlideImage3,
            unactive: SlideImage3B,
            name: 'UNDER VOYAGER'
        },
    ]
    const [currentPage, setCurrentPage] = useState(0)

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const prev = () => setCurrentPage((p) => (p === 0 ? images.length : p - 1));
    const next = () => setCurrentPage((p) => (p === images.length - 1 ? 0 : p + 1));

    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(next, 5000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        }
    }, [currentPage]);

    return (
        <div>
            <div className="flex">
                <div className='flex-1 w-full p-15 bg-[#FFDC22]'>
                    <div className='font-bold text-8xl text-[#f7f7f7]'>{images[currentPage].name}</div>
                    <div className=' text-xl text-[#080403] py-5'>星街すいせいさんの3rdアルバム『新星目録』ジャケットイラストを描かせていただきました！プレスリリース</div>
                    <div className='pt-25 flex justify-end'>
                        <img src={viewIcon} className='object-contain' />
                        <div className='text-lg text-[#080403] pl-2'>23,690</div>
                    </div>
                    <div className='flex items-end justify-end pt-30'>
                        <div className='group relative cursor-pointer'>
                            <Link to={`${currentPage}`}>
                            <img src={circle_Arrow} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                            <div className='text-[#080403] text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Details</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-3 border-2 flex h-1/2 overflow-hidden'>
                    {
                        images.map((img, index) => (
                            <div
                                key={img.id}
                                className={`relative w-[100%] transition-all duration-500 ease-in-out overflow-hidden ${index === currentPage ? 'flex-2' : 'flex-1 cursor-pointer hover:hover:scale-105'
                                    }`}
                            >
                                <img src={index === currentPage ? img.active : img.unactive}
                                    alt="" className='w-full h-full object-cover' onClick={()=>setCurrentPage(index)} />
                                {index === currentPage && (
                                    <div className="absolute top-0 left-0 h-2 w-full">
                                        <div key={`progress-${currentPage}`} className='h-full bg-[#F40404]' style={{ width: '0%', animation: 'progress 5s linear forwards' }}>
                                        </div>
                                    </div>
                                )}
                                {index !== currentPage && (
                                    <div className='text-[#f7f7f7] absolute bottom-10 right-5 font-bold text-4xl' style={{ writingMode: 'vertical-rl' }}>
                                        {img.name}
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