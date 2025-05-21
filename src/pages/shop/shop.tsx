import React, { useState } from 'react';
import shopBackground from '../../assets/images/shop_bg.png';
import dropDownIcon from '../../assets/icons/drop_down_icon.png';
import Shop_components from '../../components/shop_components';
import Product_Image_1 from '../../assets/images/product-1.png';
import Product_Image_2 from '../../assets/images/product-2.png';
import Product_Image_3 from '../../assets/images/product-3.png';
export default function Shop() {
    const shop_card=[
        {
            id: 1,
            images: [Product_Image_1],
            category: 'グッズ',
            title: '「Mika Pikazo展」マルシェバッグ',
            price: '¥2,000(税込)',
        },
        {
            id: 2,
            images: [Product_Image_2],
            category: 'グッズ',
            title: '「Mika Pikazo展」クリアファイルセット Type-A',
            price: '¥2,000(税込)',
        },
        {
            id: 3,
            images: [Product_Image_3],
            category: 'グッズ',
            title: '「Mika Pikazo展」クリアファイルセット Type-B',
            price: '¥2,000(税込)',
        },
    ];
    const filter = [
        {
            id: 'newest', label: '発売日: 新しい順',
        },
        {
            id: 'latest', label: '発売日: 古い順',
        },
        {
            id: 'title', label: 'タイトル : かな順',
        },
        {
            id: 'cheap', label: '価格: 安い順',
        },
        {
            id: 'expensive', label: '価格: 高い順',
        },
    ];
    
    const misc=[
        {
            id:'all',label:'全て',
        },
        {
            id:'goods',label:'グッズ',
        },
        {
            id:'books',label:'書籍',
        },
        {
            id:'misc',label:'その他',
        },
    ]

     const video=[
        {
            id:'all',label:'全て',
        },
        {
            id:'bluray',label:'Blu-ray',
        },
        {
            id:'dvd',label:'DVD',
        },
        {
            id:'vhs',label:'VHS',
        },
        {
            id:'misc',label:'その他',
        },
    ]
    

    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
    const hasActiveFilter = selectedFilter !== null
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const hasActiveVideo = selectedVideo !== null
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const [selectedMisc, setSelectedMisc] = useState<string | null>(null);
    const hasActiveMisc = selectedMisc !== null
    const [isMiscOpen, setIsMiscOpen] = useState(false);
    return (
        <div>
            <div className="w-screen relative overflow-x-hidden">
                <div className="z-1 w-full h-150 bg-cover bg-center relative" style={{ backgroundImage: `url(${shopBackground})` }}>
                    <div className="pt-10 text-[#F7F7F7] px-10">
                        <div>
                            イラストレーター
                        </div>
                        <div className='text-6xl font-bold'>
                            MIKA PIKAZO
                        </div>
                        <div className='mt-2 w-50 h-2 bg-[#FFDC22]'></div>
                        <div className='pt-2'>
                            オフィシャルグッズストア
                        </div>
                    </div>
                </div>
                <div className='bg-[#080403] h-screen w-full min-h-screen '>
                    <div className="flex px-10 py-10 ">
                        <div className='flex-1'>
                            <div className="">
                                <div
                                    onClick={() => setIsFilterOpen(open => !open)}
                                    className={`
                                    border-2 border-[#F7F7F7] p-5 cursor-pointer flex justify-between
                                    transition-colors duration-200 group
                                    ${hasActiveFilter
                                            ? 'bg-[#FFDC22] text-[#080403]'
                                            : 'hover:bg-[#FFDC22] hover:text-[#080403]'}
                                `}>
                                    <div className={`font-bold text-[#F7F7F7] group-hover:text-[#080403] ${hasActiveFilter ? 'text-[#080403]' : 'text-[#F7F7F7]'}`}>
                                        並べ替え
                                    </div>
                                    <img src={dropDownIcon} className={
                                        `object-contain
                                        ${isFilterOpen ? 'rotate-180' : 'rotate-0'}`
                                    } />
                                </div>
                                {
                                    isFilterOpen && (
                                        <div>
                                            {
                                                filter.map((f) => {
                                                    const isActive = f.id === selectedFilter;
                                                    return (
                                                        <div key={f.id} onClick={() => setSelectedFilter(isActive ? null : f.id)}>
                                                            <div className='text-[#F7F7F7] flex pl-10 py-5 gap-5 items-center cursor-pointer'>
                                                                <div className="border-2 border-[#F7F7F7] w-8 h-8">
                                                                    {isActive && (
                                                                        <div className='bg-[#FFDC22] w-full h-full border-5 border-[#080403]'></div>
                                                                    )}
                                                                </div>
                                                                <div className={`text-[#F7F7F7] ${isActive ? 'font-bold' : 'font-normal'}`}>
                                                                    {f.label}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            </div>

                            <div className="">
                                <div
                                    onClick={() => setIsVideoOpen(open => !open)}
                                    className={`
                                    border-2 border-[#F7F7F7] p-5 cursor-pointer flex justify-between
                                    transition-colors duration-200 group
                                    ${hasActiveVideo
                                            ? 'bg-[#FFDC22] text-[#080403]'
                                            : 'hover:bg-[#FFDC22] hover:text-[#080403]'}
                                `}>
                                    <div className={`font-bold text-[#F7F7F7] group-hover:text-[#080403] ${hasActiveVideo ? 'text-[#080403]' : 'text-[#F7F7F7]'}`}>
                                        映像
                                    </div>
                                    <img src={dropDownIcon} className={
                                        `object-contain
                                        ${hasActiveVideo ? 'rotate-180' : 'rotate-0'}`
                                    } />
                                </div>
                                {
                                    isVideoOpen && (
                                        <div>
                                            {
                                                video.map((m) => {
                                                    const isActive = m.id === selectedVideo
                                                    return (
                                                        <div key={m.id} onClick={() => setSelectedVideo(isActive ? null : m.id)}>
                                                            <div className='text-[#F7F7F7] flex pl-10 py-5 gap-5 items-center cursor-pointer'>
                                                                <div className="border-2 border-[#F7F7F7] w-8 h-8">
                                                                    {isActive && (
                                                                        <div className='bg-[#FFDC22] w-full h-full border-5 border-[#080403]'></div>
                                                                    )}
                                                                </div>
                                                                <div className={`text-[#F7F7F7] ${isActive ? 'font-bold' : 'font-normal'}`}>
                                                                    {m.label}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            </div>

                            <div className="">
                                <div
                                    onClick={() => setIsMiscOpen(open => !open)}
                                    className={`
                                    border-2 border-[#F7F7F7] p-5 cursor-pointer flex justify-between
                                    transition-colors duration-200 group
                                    ${hasActiveMisc
                                            ? 'bg-[#FFDC22] text-[#080403]'
                                            : 'hover:bg-[#FFDC22] hover:text-[#080403]'}
                                `}>
                                    <div className={`font-bold text-[#F7F7F7] group-hover:text-[#080403] ${hasActiveMisc ? 'text-[#080403]' : 'text-[#F7F7F7]'}`}>
                                        その他
                                    </div>
                                    <img src={dropDownIcon} className={
                                        `object-contain
                                        ${hasActiveMisc ? 'rotate-180' : 'rotate-0'}`
                                    } />
                                </div>
                                {
                                    isMiscOpen && (
                                        <div>
                                            {
                                                misc.map((m) => {
                                                    const isActive = m.id === selectedMisc
                                                    return (
                                                        <div key={m.id} onClick={() => setSelectedMisc(isActive ? null : m.id)}>
                                                            <div className='text-[#F7F7F7] flex pl-10 py-5 gap-5 items-center cursor-pointer'>
                                                                <div className="border-2 border-[#F7F7F7] w-8 h-8">
                                                                    {isActive && (
                                                                        <div className='bg-[#FFDC22] w-full h-full border-5 border-[#080403]'></div>
                                                                    )}
                                                                </div>
                                                                <div className={`text-[#F7F7F7] ${isActive ? 'font-bold' : 'font-normal'}`}>
                                                                    {m.label}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex-4 ">
                            <div className='px-20 -mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"'>
                                    {shop_card.map(p=>(
                                    <div className="">
                                        <Shop_components key={p.id} images={p.images} category={p.category} title={p.title} price={p.price}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src={shopBackground} className='object-cover w-full h-150' /> */}
            </div>
        </div>
    )
}