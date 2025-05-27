import React, {useState,useEffect,useRef} from 'react';
import NewBg1 from '../../assets/images/news_1.jpg'
import NewBg2 from '../../assets/images/news_2.jpg'
import NewBg3 from '../../assets/images/news_3.jpg'
import New_backIcon from '../../assets/icons/new_back.png'
export default function NewList(){
    const NewsData=[
        {
            id:0,
            news:'3月21日(土)「Mika Pikazo展2020 全国 ツアー 福岡-」でのサイン会に関しまして',
            date:'21',
            month:'3',
            news_img:NewBg1,
        },
        {
            id:1,
            news:'3月21日(土)「Mika Pikazo展2020 全国 ツアー 福岡-」でのサイン会に関しまして',
            date:'21',
            month:'3',
            news_img:NewBg2,
        },
        {
            id:2,
            news:'3月27日(土)「Mika Pikazo展2020 全国ツアー -広島-」でのサイン会に関しまして',
            date:'27',
            month:'3',
            news_img:NewBg3,
        },
    ]

    const [active,setActive]=useState(0)
    const timerRef = useRef<ReturnType<typeof setInterval>|null>(null)

    const prev=()=> setActive((current)=>(current === 0? NewsData.length : current-1))
    const next=()=> setActive((current)=>(current === NewsData.length-1? 0:current+1 ))

useEffect(()=>{
    if(timerRef.current){
        clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(next,5000)

    return()=>{
        if(timerRef.current) clearInterval(timerRef.current)
    }
},[active])

    return(
        <div>
            <div className='min-h-screen bg-[#080403] relative h-full'>
                {/* news_bg */}
                <div
                    className="min-h-[43rem] bg-no-repeat bg-center bg-cover bg-[0px_-30rem] relative"
                    style={{
                    backgroundImage: `
                        url(${NewsData[active].news_img})
                    `,
                    backgroundPosition: '0px -30rem',

                    }}
                >
                    <div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: `
                        radial-gradient(
                            circle at top left,
                            rgba(8, 4, 3, 0.4) 60%,
                            rgba(8, 4, 3, 1) 100%
                        )
                        `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                    />
                    <div className='py-10 px-10 relative'>
                        <div className='text-[#f7f7f7] font-bold text-9xl rotate-90 origin-bottom-left absolute left-10px -top-20px z-20'>
                            NEWS
                        </div>
                    </div>
                </div>
                <div className='flex py-10 px-10  -mt-[12rem] z-30'>
                    <div className='z-30'>
                        <div className='h-screen pr-5 border-r-1 border-[#f7f7f7]'>
                            <div className='w-[100%] '>
                                <div className='flex items-center justify-center'>
                                    <div className='group relative cursor-pointer'>
                                        <img src={New_backIcon} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                        <div className='text-[#f7f7f7] text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Back</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pl-[5.5rem] w-[60%] h-full relative z-30'>
                        {
                            NewsData.map((data,index)=>(
                                <div
                                onClick={()=>setActive(index)}
                                    className="relative cursor-pointer bg-zoom my-5"
                                    style={{
                                    backgroundImage: `
                                        /* 1) the semi-transparent overlay */
                                        url(${data.news_img})
                                    `,
                                    backgroundPosition: '0px -20rem',

                                    }}
                                >
                                    <div className='inset-0 z-10 absolute top-0 w-full h-full' 
                                    style={{
                                        backgroundImage: `
                                            linear-gradient(
                                            to bottom,
                                            rgba(8, 4, 3, 0.6) 100%,
                                            rgba(8, 4, 3, 0.6) 100%
                                            )
                                        `,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        }}
                                        />
                                        <div className='border-2 border-[#f7f7f7] p-4 w-full min-h-[26rem] relative z-20 items-center text-center '>
                                            <div className='bg-[#f7f7f7] p-5 w-auto absolute top-0 right-0'>
                                                <div className='text-[2rem] text-[#080403]'>
                                                    <span className='text-[3rem] text-[#080403] font-bold'>{data.date}</span>日
                                                </div>
                                                <div className='text-[2rem] text-[#080403]'>{data.month}月</div>
                                            </div>
                                            <div className='text-[#f7f7f7] text-[1.3rem] absolute bottom-[2rem] text-left'>{data.news}</div>
                                        </div>
                                        {index === active && (
                                            <div className='h-[10px] absolute bottom-0 z-12 bg-[#F40404] overflow-hidden'
                                            style={{ width: '0%', animation: 'progress 5s linear forwards' }}
                                            >
                                            </div>
                                        )}
                                    
                                </div>
                            ))
                        }
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