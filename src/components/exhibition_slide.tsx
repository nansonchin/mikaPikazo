import React,{useState,useRef} from 'react';
import ExhibitionArtComponents from './exhibitions_art_component';
import SlideButton from '../assets/icons/slide_button_40.png'
import artDropdown from '../assets/icons/art_dropdown.png'
import searchIcon from '../assets/icons/search_icon_24.png'

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

interface ArtSlideProps{
    artSlides:ExhibitionDetail[];
}

export default function ArtSlides({artSlides}:ArtSlideProps){
    const itemsPerPage=8;
    const pages:ExhibitionDetail[][]=[];

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

    for(let i=0; i<artSlides.length; i+=itemsPerPage){
        pages.push(artSlides.slice(i,i+itemsPerPage));
    }

    const [selectedFilter, setSelectedFilter]=useState<string|null>(null)
    const hasActiveFilter = selectedFilter !==null
    const [isFilterOpen, setIsFilterOpen]=useState(false);

    const [currentPage,setCurrentPage]=useState(0)
    const maxPage=pages.length-1;
    
    const prev = ()=> setCurrentPage((p)=> (p===0? maxPage:p-1));
    const next = ()=>setCurrentPage((p)=>(p===maxPage? 0: p+1));

    return (
        <div className='relative'>
            <div className='relative w-full overflow-hidden px-4'>
                <div className='py-20 -mt-10'>
                    <div className='flex justify-between items-center '>
                        <div className='w-full relative mx-5 flex justify-between items-center border-b-2 border-[#f7f7f7]'>
                            <input className='text-[#f7f7f7] w-full py-8' type='text' placeholder='探索'/>
                            <span className=' bottom-5 right-5 cursor-pointer'>
                                <img src={searchIcon} className='object-contain'/>
                            </span>
                        </div>
                        <div className='w-full relative mx-5'>
                           <div onClick={() => setIsFilterOpen(open => !open)} 
                           className={`flex justify-between cursor-pointer w-full border-2 border-[#f7f7f7] px-8 py-8 w-full transition duration-300 ease-in group hover:bg-[#FFDC22]
                            ${hasActiveFilter? 'bg-[#ffdc22] ': ''}
                           `}>
                                <div 
                                    className={`
                                    text-lg group-hover:text-[#080403] font-bold
                                    ${hasActiveFilter ? 'text-[#080403]':'text-[#f7f7f7]'}`
                                }>
                                    その他
                                    </div>
                                <div>
                                    <img src={artDropdown} className={`object-contain ${isFilterOpen? 'rotate-180':'rotate-0'}`}/></div>
                           </div>
                           <div className='absolute z-20 w-full'>
                            {
                                isFilterOpen && (
                                    <div>
                                        {filter.map((f)=>{
                                            const isActive=f.id ===selectedFilter;
                                            return(
                                                <div key={f.id} onClick={()=>setSelectedFilter(isActive?null:f.id)}>
                                                     <div className='px-20 py-5 flex items-center cursor-pointer bg-[#F7F7F7]'>
                                                        <div className='border-2 h-[24px] w-[24px] border-[#080403] items-center flex justify-between '>
                                                            {
                                                                isActive && (
                                                                    <div className='bg-[#FFDC22] w-[16px] h-[16px] m-auto'></div>
                                                                )
                                                            }
                                                        </div>
                                                        <div className={`text-[#080403] pl-2 ${isActive? 'font-bold':'font-normal'}`}>{f.label}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            }
                           </div>
                        </div>
                        <div className='w-full mx-5 relative'>
                           <div onClick={() => setIsFilterOpen(open => !open)} 
                           className={`flex justify-between cursor-pointer w-full border-2 border-[#f7f7f7] px-8 py-8 w-full transition duration-300 ease-in group hover:bg-[#FFDC22]
                            ${hasActiveFilter? 'bg-[#ffdc22] ': ''}
                           `}>
                                <div 
                                    className={`
                                    text-lg group-hover:text-[#080403] font-bold
                                    ${hasActiveFilter ? 'text-[#080403]':'text-[#f7f7f7]'}`
                                }>
                                    並べ替え
                                    </div>
                                <div>
                                    <img src={artDropdown} className={`object-contain ${isFilterOpen? 'rotate-180':'rotate-0'}`}/></div>
                           </div>
                           <div className='absolute z-20 w-full'>
                            {
                                isFilterOpen && (
                                    <div>
                                        {filter.map((f)=>{
                                            const isActive=f.id ===selectedFilter;
                                            return(
                                                <div key={f.id} onClick={()=>setSelectedFilter(isActive?null:f.id)}>
                                                     <div className='px-20 py-5 flex items-center cursor-pointer bg-[#F7F7F7]'>
                                                        <div className='border-2 h-[24px] w-[24px] border-[#080403] items-center flex justify-between '>
                                                            {
                                                                isActive && (
                                                                    <div className='bg-[#FFDC22] w-[16px] h-[16px] m-auto'></div>
                                                                )
                                                            }
                                                        </div>
                                                        <div className={`text-[#080403] pl-2 ${isActive? 'font-bold':'font-normal'}`}>{f.label}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            }
                           </div>
                          
                        </div>
                    </div>
                </div>
                <div className='flex transition-transform duration-500' style={{transform:`translateX(-${currentPage*100}%)`}}>
                    {
                        pages.map((page,pageIdx)=>(
                            <div key={pageIdx} className='w-full flex-shrink-0 grid grid-cols-4 gap-4 px-4 box-border'>
                                {page.map((items,i)=>(
                                    <div key={pageIdx} className=''>
                                        <ExhibitionArtComponents
                                            id={items.id}
                                            image={items.image_details}
                                            title={items.title}
                                            date={items.date}
                                            views={items.view}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                <div className='flex justify-between'>
                    <div>
                        <img src={SlideButton} className='object-contain cursor-pointer' onClick={prev}/>
                    </div>
                    <div>
                        <img src={SlideButton} className='object-contain rotate-180 cursor-pointer' onClick={next}/>
                    </div>
                </div>
            </div>
        </div>
    )
}