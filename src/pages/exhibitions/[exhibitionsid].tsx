import React,{useState,useRef,useEffect} from 'react';
import back_icon from '../../assets/icons/back_icon.png'
import smileIcon from '../../assets/icons/exhibition_detail_face.png'
import loveIcon from '../../assets/icons/exhibition_detail_love.png'
import viewIcon from '../../assets/icons/exhibition_detail_view.png'
import mikaIcon from '../../assets/icons/mika_48.png'
import art5 from '../../assets/images/art5.png'
import art6 from '../../assets/images/art6.png'
import art7 from '../../assets/images/art7.png'
import art8 from '../../assets/images/art8.png'
import exihibitionArt from '../../assets/images/art_exhibitions.png'
export default function ExhibitionDetail(){
    const [activeIndex,setActiveIndex]=useState(0);
    const itemRefs=useRef<Array<HTMLImageElement|null>>([]);

    useEffect(()=>{
        const node = itemRefs.current[activeIndex]
        if(node){
            node.scrollIntoView({behavior:'smooth',block:'start'})
        }
    },[activeIndex])

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    const index=itemRefs.current.findIndex((el)=>el===entry.target);
                    if(entry.isIntersecting && index !== -1){
                        setActiveIndex(index)
                    }
                });
            },
            {
                root:null,
                threshold:0.6,
            }
        );
        itemRefs.current.forEach((el)=>{
            if(el)observer.observe(el);
        })

        return()=>{
            itemRefs.current.forEach((el)=>{
                if(el){
                    observer.unobserve(el);
                }
            })
        }
    },[])
    const testImage=[
        {
            img:art5,
        },
        {
            img:art6,
        },
        {
            img:art7,
        },
        {
            img:art8,
        },
    ]

    const artExhibition=[
        {
            id:'1',
            art:exihibitionArt
        },
        {
            id:'2',
            art:exihibitionArt
        },
    ]
    return(
        <div>
            <div className='min-h-screen bg-[#080403] relative h-full'>
                <div className='flex py-10'>
                    <div className='w-1/12 h-screen overflow-hidden bg-[#080403] grid 
                    grid-cols-[4rem_1fr_24rem]'>
                        <div className='fixed min-h-3 px-5 h-[50%] border-r-2 border-[#f7f7f7] items-center flex flex-col'>
                            <div className='flex items-center justify-center'>
                                <div className='group relative cursor-pointer'>
                                    <img src={back_icon} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                    <div className='text-[#f7f7f7] text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Back</div>
                                </div>
                            </div>
                            {/* //indicator */}
                            <div className='mt-12'>
                            {artExhibition.map((item,idx)=>(
                                <div 
                                key={item.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`h-3 w-3 transition transition-transform duration-300
                                 rounded-full hover:bg-[#FFDC22] my-5 cursor-pointer ${activeIndex===idx? 'bg-[#FFDC22] h-8':'bg-[#f7f7f7]'}` }>
                                </div>
                            ))}
                            {/* {
                                artExhibition.map((art)=>(
                                    <div className='bg-[#f7f7f7] h-3 w-3 rounded-full my-5'>
                                    </div>
                                ))
                            } */}
                            </div>
                        </div>
                    </div>
                    <div className='w-6/12 h-full bg-[#080403]'>
                        <div className='space-y-4 p-6'>
                            {
                                artExhibition.map((art,idx)=>(
                                    <img 
                                    key={art.id}
                                    ref={el => {itemRefs.current[idx] = el}} 
                                    src={art.art} className='object-cover max-w-full w-full'/>

                                ))
                            }
                        </div>
                    </div>
                    <div className='w-5/12 relative h-full'>
                        <div className='fixed overflow-y-auto h-full hide-scrollbar'>
                            <div className='bg-white'>
                                <div className='bg-[#f7f7f7] p-10'>
                                    <div className='relative'>
                                        <div className="absolute -top-5 -left-5 w-20 h-2 bg-yellow-400"></div>
                                        <div className="absolute -top-5 -left-5 w-2 h-20 bg-yellow-400"></div>
                                        <div className="absolute -bottom-5 -right-5 w-20 h-2 bg-yellow-400"></div>
                                        <div className="absolute -bottom-5 -right-5 w-2 h-20 bg-yellow-400"></div>
                                        <div className='font-bold text-6xl text-[#080403] tracking-widest'>
                                        ILY GATE
                                        </div>
                                        <div className='max-h-[50%] overflow-y-scroll hide-scrollbar'>
                                            <div className='text-xl text-[#080403] pt-5'>
                                                表参道原宿の交差点にある 東急プラザのエントランスを飾らせていただきました。
                                            </div>
                                            <div className='pt-10'>
                                                Mika Pikazo個展「#ILYGIRL」<br></br>
                                                7/28-8/30 11:00〜20:00<br></br>
                                                キュープラザ原宿 入場無料
                                            </div>
                                        </div>
                                        <div className='flex justify-start items-start gap-10 py-20'>
                                            <div className='flex'>
                                                <img src={smileIcon} className='object-contain'/>
                                                <div className='pl-2'>19,735</div>
                                            </div>
                                            <div className='flex'>
                                                <img src={loveIcon} className='object-contain'/>
                                                <div className='pl-2'>19,735</div>
                                            </div>
                                            <div className='flex'>
                                                <img src={viewIcon} className='object-contain'/>
                                                <div className='pl-2'>19,735</div>
                                            </div>
                                        </div>
                                        <div className="text-base text-[#080403] text-end">
                                            August 23, 2023 11:00 PM
                                        </div>
                                    </div>
                                    <div className='relative flex my-10 items-center'>
                                        <div className='w-[3rem] h-[3rem]'>
                                            <img src={mikaIcon} className='object-contain'/>
                                        </div>
                                        <div className='font-bold text-lg text-[#080403] pl-4'>Mika Pikazo</div>
                                    </div>
                                    <div className='relative'>
                                        <div className='absolute w-full'>
                                            <div className='grid grid-cols-2 gap-2 '>
                                                {
                                                    testImage.map((image)=>(
                                                            <div className=''>
                                                                <img src={image.img} className='w-full h-full object-cover cursor-pointer hover:scale-105 transition transition-transform duration-300'/>
                                                            </div>
                                                    )
                                                    )
                                                }
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}