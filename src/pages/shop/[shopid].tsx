import React, { useState, useEffect, useRef } from 'react';
import shopBackground from '../../assets/images/shop_bg.png';
import smDropDown from '../../assets/icons/Frame 12.png'
import Slide1 from '../../assets/images/slide_1.jpg'
import Slide2 from '../../assets/images/slide_2.jpg'
import Slide3 from '../../assets/images/slide_3.jpg'
import product1 from '../../assets/images/product-1.png'
import product2 from '../../assets/images/product-2.png'
import product3 from '../../assets/images/product-3.png'
import SlideButton from '../../assets/icons/slide_button.png'
import cartIcon from '../../assets/icons/add_cart_36.png'
import loveIcon from '../../assets/icons/love.png'
import FacebookIcon from '../../assets/icons/fb.png'
import InstagramIcon from '../../assets/icons/insta.png'
import XIcon from '../../assets/icons/x.png'
import LineIcon from '../../assets/icons/line.png'
import Carousel from '../../components/shop_carousel';
export default function ShopDetail() {
    const slideImages = [
        Slide1,
        Slide2,
        Slide3,
    ]

    const recommendProduct=[
        {
            images: [Slide1],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [Slide2],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [Slide3],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [product1],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [product2],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [product3],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
    ]

    const socialIcon=[
        {icon: FacebookIcon,link:'',},
        {icon: InstagramIcon,link:'',},
        {icon: XIcon,link:'',},
        {icon: LineIcon,link:'',},
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slideImages.length;
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    };

    if (!Array.isArray(slideImages) || length <= 0) {
        return null;
    }

    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            nextSlide();
        }, 3000)
        return () => {
            if (timerRef.current != null) {
                clearInterval(timerRef.current);
            }
        };
    }, [currentSlide])

    return (
        <div className=''>
            <div className='w-screen relative overflow-x-hidden min-h-screen'>
                <div className="z-1 w-full h-150 bg-cover bg-center relative " style={{ backgroundImage: `url(${shopBackground})` }}>
                    <div className="pt-10 text-[#F7F7F7] px-30">
                        <div className='cursor-pointer group w-fit'>
                            <img src={smDropDown} className='object-contain mt-5 transfrom transition-transform group-hover:-translate-y-2' />
                            <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0'>Back</div>
                        </div>
                    </div>
                </div>
                <div className='px-30 bg-[#080403] h-full pb-20'>
                    <div className='flex gap-5'>
                        <div className='flex-4 -mt-20 z-20'>
                            <div className='flex gap-5'>
                                <div className='flex-1 relative w-full max-w-2xl mx-auto overflow-hidden'>
                                    <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                        {/* <img src={Slide1} className='object-cover'/> */}
                                        {slideImages.map((src, index) => (
                                            <div key={index} className="w-full flex-shrink-0">
                                                <img src={src} className='w-full h-auto object-cover' />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <img src={SlideButton} className='absolute bottom-20 object-contain cursor-pointer rotate-180 left-0' onClick={prevSlide} />
                                    </div>
                                    <div>
                                        <img src={SlideButton} className='absolute bottom-20 object-contain cursor-pointer right-0' onClick={nextSlide} />
                                    </div>
                                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2'>
                                        {slideImages.map((_, idx) => (
                                            <div key={idx} className='relative cursor-pointer' onClick={() => setCurrentSlide(idx)}>
                                                {idx === currentSlide ? (
                                                    <div className="w-10 h-2 bg-gray-700 rounded full overflow-hidden">
                                                        <div key={`progress-${currentSlide}`} className='h-full bg-[#FFDC22]' style={{ width: '0%', animation: 'progress 3s linear forwards' }}>
                                                        </div>
                                                    </div>
                                                ) : <div className="w-3 h-3 bg-gray-500 rounded-full">
                                                </div>
                                                }
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className='flex-2 flex flex-col justify-between items-stretch'>
                                    <div className='items-start'>
                                        <div className='font-bold text-4xl text-[#F7F7F7]'>「Mika Pikazo展」 クリアファイルセット Type-A</div>
                                        <div className=' text-2xl text-[#F7F7F7] pt-5'>Mika Pikazo</div>
                                        <div className='flex justify-between pt-5'>
                                            <div>
                                                <div className='text-[#F7F7F7] text-sm bg-[#080403] p-3 w-fit border-1 border-[#f7f7f7]'>
                                                    グッズ {currentSlide}
                                                </div>
                                            </div>
                                            <div>
                                                <div className='font-bold text-[#F7F7F7] text-2xl '>
                                                    ¥  2,000(税込)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='items-end pt-5'>
                                        <div className='text-[#f7f7f7] text-2xl'>※消費税率10％商品</div>
                                        <ul className='list-disc list-inside marker:text-[#f7f7f7]'>
                                            <li className='text-[#f7f7f7] py-1'>POINT : [通常ポイント]1.0％ポイント</li>
                                            <li className='text-[#f7f7f7] py-1'>RELEASE DATE : 2019/05/09</li>
                                            <li className='text-[#f7f7f7] py-1'>NUMBER : SLKL-024</li>
                                            <li className='text-[#f7f7f7] py-1'>LABEL : SACRA MUSIC</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-10 '>
                                <div className='border-1 border-[#f7f7f7] p-5 min-h-60'>
                                    <div className=' text-lg text-[#f7f7f7] font-bold'>
                                        商品仕様
                                    </div>
                                    <div className='h-1 w-50 bg-[#FFDC22] mt-3'></div>
                                    <div className='p-5 text-[#f7f7f7]'>
                                        [スペック]<br></br>
                                        A4 三枚入り
                                    </div>
                                </div>
                            </div>
                            <div className='pt-10 '>
                                <div className='border-1 border-[#f7f7f7] p-5 min-h-60'>
                                    <div className=' text-lg text-[#f7f7f7] font-bold'>
                                        商品内容
                                    </div>
                                    <div className='h-1 w-50 bg-[#FFDC22] mt-3'></div>
                                    <div className='p-5 text-[#f7f7f7]'>
                                        {/* [スペック]<br></br>
                                        A4 三枚入り */}
                                    </div>
                                </div>
                            </div>
                            <div className='pt-10 '>
                                <div className='border-1 border-[#f7f7f7] p-5 min-h-60'>
                                    <div className=' text-lg text-[#f7f7f7] font-bold'>
                                        配送に関する注意事項
                                    </div>
                                    <div className='h-1 w-50 bg-[#FFDC22] mt-3'></div>
                                    <div className='p-5 text-[#f7f7f7]'>
                                        ※色やサイズ等、実際の商品と若干異なる場合がございます。予めご了承下さい。<br></br>
                                        ※商品のお届けまでに1～2週間ほど、お時間を要する場合がございます。
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 p-5'>
                            <div className='bg-[#F40404] items-center p-2 justify-center flex flex-col cursor-pointer group'>
                                <img src={cartIcon} className='object-contain group-hover:-translate-y-1 transition-transform '/>
                                <div className='items-center text-[#f7f7f7] pt-2 group-hover:-translate-y-1 transition-transform'>カートに入れる</div>
                            </div>
                            <div className='bg-[#f7f7f7] items-center p-2 border-1 border-[#F40404] justify-center flex flex-col my-5 cursor-pointer'>
                                <img src={loveIcon} className='object-contain'/>
                                <div className='items-center text-[#F40404]'>Myアーティスト登録</div>
                            </div>
                            <div className='flex justify-around'>
                                    {socialIcon.map((icon,id)=>(
                                        <div>
                                            <img src={icon.icon} className='object-contain cursor-pointer'/>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className='pt-10 flex justify-around'>
                        <div className='flex-1 text-8xl text-[#f7f7f7] rotate-270'>
                            RECOMMEND
                        </div>
                        <div className='flex-4 '>
                            <Carousel products={recommendProduct}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Keyframes */}
            <style>
                {`@keyframes progress { from { width: 0%; } to { width: 100%; } }`}
            </style>
        </div>
    )
}