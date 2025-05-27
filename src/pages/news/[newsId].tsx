import React from 'react'
import NewBg1 from '../../assets/images/news_1.jpg'
import NewBg2 from '../../assets/images/news_2.jpg'
import NewBg3 from '../../assets/images/news_3.jpg'
import New_backIcon from '../../assets/icons/new_back.png'
import News_FaceIcon from '../../assets/icons/news_face.png'
import News_InstaIcon from '../../assets/icons/news_insta.png'
import News_XIcon from '../../assets/icons/news_x.png'
import NextIcon from '../../assets/icons/next_white_icon.png'

export default function NewsDetail(){
        const Socialicon=[
            {
                id:0,
                icon:News_FaceIcon,
            },
            {
                id:1,
                icon:News_InstaIcon,
            },
            {
                id:2,
                icon:News_XIcon,
            },
        ]
        const latest=[
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
    return(
        <div>
            <div className='min-h-screen bg-[#080403] relative h-full'>
                {/* news_bg */}
                <div
                    className="min-h-[43rem] bg-no-repeat bg-center bg-cover bg-[0px_-30rem] relative"
                    style={{
                    backgroundImage: `
                        url(${NewBg1})
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
                        <div className='h-full pr-5 border-r-1 border-[#f7f7f7]'>
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
                    <div className='flex w-full z-30 justify-start'>
                        <div className='p-4 w-[70%] min-h-[26rem] relative z-20 items-center '>
                            <div className='bg-[#f7f7f7] p-8 w-fit text-center'>
                                <div className='text-[2rem] text-[#080403]'>
                                    <span className='text-[3rem] text-[#080403] font-bold'>21</span>日
                                </div>
                                <div className='text-[2rem] text-[#080403]'>3月</div>
                            </div>
                            <div className='font-bold mt-5 mb-10 text-[1.3rem] text-[#f7f7f7]'>
                                3月27日(土)「Mika Pikazo展2020 全国ツアー -広島-」でのサイン会に関しまして
                            </div>
                            <div className='text-[#f7f7f7] text-[1.3rem] my-5'>
                                今般の新型コロナウイルス感染拡大に際し、現時点において  <br></br>
                                終息の見通しがたっていない事を鑑みウイルスの感染予防・拡散防止を考慮し <br></br>
                                「Mika Pikazo展2020 全国ツアー -広島-」でのサイン会を中止することと致しました。<br></br>
                            </div>
                            <div className='text-[#f7f7f7] text-[1.3rem] my-5'>
                                「Mika Pikazo展2020 全国ツアー -広島-」 でのイラスト展示、グッズ販売は期間内実施いたします。 <br></br>
                                皆さまに多大なるご迷惑をおかけいたしますことを、深くお詫び申し上げます。
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex mt-20 gap-5'>
                                    {
                                        Socialicon.map((data)=>(
                                            <div className='cursor-pointer '>
                                                <img src={data.icon} className='object-contain'/>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <div className="pt-10 text-[#F7F7F7] px-30">
                                        <div className='cursor-pointer group w-fit'>
                                            <img src={NextIcon} className='object-contain mt-5 transfrom transition-transform group-hover:-translate-y-2' />
                                            <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0'>Next</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[30%] mx-4 mt-[20rem]'>
                            <div className='text-[1.5rem] font-bold text-[#f7f7f7]'>
                             LATEST INFORMATION
                            </div>
                            <div>
                                <div className=' w-full h-full relative z-30'>
                                    {
                                        latest.map((data,index)=>(
                                            <div
                                                className="relative cursor-pointer bg-zoom my-5 group"
                                                style={{
                                                backgroundImage: `
                                                    /* 1) the semi-transparent overlay */
                                                    url(${data.news_img})
                                                `,
                                                backgroundPosition: 'center',

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
                                                    <div className='border-2 border-[#f7f7f7] p-4 w-full min-h-[16rem] h-full relative z-20 items-center text-center '>
                                                        <div className='bg-[#f7f7f7] p-5 w-auto absolute top-0 right-0'>
                                                            <div className='text-[1.5rem] text-[#080403]'>
                                                                <span className='text-[2rem] text-[#080403] font-bold'>{data.date}</span>日
                                                            </div>
                                                            <div className='text-[1.5rem] text-[#080403]'>{data.month}月</div>
                                                        </div>
                                                        <div className='text-[#f7f7f7] text-[1rem] absolute bottom-[1.5rem] text-left'>{data.news}</div>
                                                    </div>
                                                    <div className='h-[6px] absolute bottom-0 z-12 bg-[#F40404] overflow-hidden group-hover:w-full'>
                                                    </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}