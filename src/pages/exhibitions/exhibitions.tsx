import React, { useState, useEffect, useRef } from 'react';
import ExhibitionImg from '../../assets/images/exhibition.png'
import SlideImage1 from '../../assets/images/sui.png'
import SlideImage2 from '../../assets/images/ily.png'
import SlideImage3 from '../../assets/images/under.png'
import ExhibitionSlides from '../../components/exhibitions_home_slide'

export default function Exhibitions() {
    const menuItems = [
        {
            id: 0, menu: 'HOME',
        },
        {
            id: 1, menu: 'ILLUSTRATIONS',
        },
        {
            id: 2, menu: 'MANGA',
        },
    ]

    const exhibition_slides=[
        {
            title:'星街すいせい',
            description:'星街すいせいさんの3rdアルバム『新星目録』ジャケットイラストを描かせていただきました！プレスリリース',
            image:SlideImage1,
            views: 1200,
            bg: '#FFE632',
        },
        {
            title:'VOYAGERUNDER ',
            description:'|◤UNDER VOYAGER ◢||展示会「UNDER VOYAGER」を開催します。2024/5/10（金）〜6/1（土）',
            image:SlideImage2,
            views: 1200,
            bg: '#1F1F1F',
        },
         {
            title:'ILY GATE',
            description:'表参道原宿の交差点にある東急プラザのエントランスを飾らせていただきました。Mika Pikazo個展「#ILYGIRL」7/28-8/30 11:00〜20:00キュープラザ原宿入場無料',
            image:SlideImage3,
            views: 1200,
            bg: '#0A0A0A',
        },
    ]

    const [selectedMenu, setSelectedMenu] = useState(0)
    const hasActiveMenu = selectedMenu !== null
    return (
        <div>
            <div className='bg-[#080403] min-h-screen'>
                <div className='px-5'>
                    <div className='flex justify-around'>
                        <div className='px-10 relative w-full z-10'>
                            <div className='text-[#f7f7f7] font-bold text-9xl rotate-90 origin-bottom-left absolute left-0 top-0'>MIKA <br></br> PIKAZO</div>
                            <img src={ExhibitionImg} className='object-contain' />
                        </div>
                        <div className=' w-full items-center m-auto z-20'>
                            <div className='flex'>
                                <div className='h-100 border-2 border-[#f7f7f7]'></div>
                                <div>
                                    <div className=' px-5'>
                                        {
                                            menuItems.map(item => (
                                                <div className='flex'>
                                                    <div className={`h-1 w-10 mx-5 bg-[#FFDC22] items-center flex justify-center my-auto ${selectedMenu === item.id ? 'opacity-100' : 'opacity-0'}`}>
                                                    </div>
                                                    <div
                                                        key={item.id}
                                                        className={`py-10 cursor-pointer ${selectedMenu === item.id ? 'font-bold text-[#f7f7f7]' : 'text-[#f7f7f7] hover:text-[#FFDC22]'}`}
                                                        onClick={() => setSelectedMenu(item.id)}>
                                                        {item.menu}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col text-[#f7f7f7]  items-end my-5'>
                                    Illustrator <br></br>
                                    Character designer<br></br>
                                    Art director<br></br>
                            </div>
                            <div className='text-[#f7f7f7] font-bold text-8xl -ml-50'>
                                Exhibition
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-20'>
                    <ExhibitionSlides/>
                </div>
            </div>
        </div>
    )
}