import React, { useState, useEffect, useRef } from 'react';
import Shop_components from './shop_components';
import SlideButton from '../assets/icons/slide_button_40.png'

interface Product {
    id:number
    image_url: string[];
    category: string;
    title: string;
    price: string;
    description:string;
    content:string;
    information:string;
}

interface CarouselProps {
    products: Product[];
}

export default function Carousel({ products }: CarouselProps) {
    const itemsPerPage = 3;

    const pages: Product[][] = [];

    for (let i = 0; i < products.length; i += itemsPerPage) {
        pages.push(products.slice(i, i + itemsPerPage));
    }

    const [currentPage, setCurrentPage] = useState(0)
    const maxPage = pages.length - 1;
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const prev = () => setCurrentPage((p) => (p === 0 ? maxPage : p - 1));
    const next = () => setCurrentPage((p) => (p === maxPage ? 0 : p + 1));

    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(next, 3000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        }
    }, [currentPage])

    return (
        <div>
            <div className='relative w-full overflow-hidden'>
                <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                    {
                        pages.map((page, pageIdx) => (
                            <div key={pageIdx} className='w-full flex-shrink-0 flex space-x-4 px-4'>
                                {
                                    page.map((product, i) => (
                                        <div key={pageIdx} className='w-1/3'>
                                            <Shop_components
                                                id={product.id}
                                                image_url={product.image_url}
                                                category={product.category}
                                                title={product.title}
                                                price={product.price}
                                                description={product.description}
                                                content={product.content}
                                                information={product.information}

                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-between'>
                    <div>
                        <img src={SlideButton} className='object-contain cursor-pointer' onClick={prev}/>
                    </div>
                    <div>
                        <img src={SlideButton} className='object-contain rotate-180 cursor-pointer' onClick={next}/>
                    </div>
                </div>
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2'>
                    {pages.map((_, idx) => (
                        <div key={idx+'idx'} className='relative cursor-pointer' onClick={() => setCurrentPage(idx)}>
                            {idx === currentPage ? (
                                <div className="w-10 h-2 bg-gray-700 rounded full overflow-hidden">
                                    <div key={`progress-${currentPage}`} className='h-full bg-[#FFDC22]' style={{ width: '0%', animation: 'progress 3s linear forwards' }}>
                                    </div>
                                </div>
                            ) : <div className="w-3 h-3 bg-gray-500 rounded-full">
                            </div>
                            }
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}