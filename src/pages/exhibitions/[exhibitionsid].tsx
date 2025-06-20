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
import { Link, useParams } from 'react-router-dom';
import Header from '../header/header';

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

export default function ExhibitionDetail(){
    const {id} = useParams<{id:string}>();
    const [activeIndex,setActiveIndex]=useState(0);
    const itemRefs=useRef<Array<HTMLImageElement|null>>([]);
    const [getExhibitionData,setGetExhibitionData]= useState<ExhibitionDetail>();
    const [error,setError]=useState<string |null>(null);
    const [loading,setLoading]=useState(true);
    const [getRandom,setGetRandom]=useState<ExhibitionDetail[]>([]);
    const [cutFourData,setCutFourData]=useState<ExhibitionDetail[]>([]);
    const scrollContainerRef=useRef<HTMLDivElement>(null)
        const testImage=[
        {
            id:0,
            img:art5,
        },
        {
            id:1,
            img:art6,
        },
        {
            id:2,
            img:art7,
        },
        {
            id:3,
            img:art8,
        },
    ]

    useEffect(()=>{
        const API_URL=import.meta.env.VITE_API_LOCALHOST || 'http://localhost:4000';
        fetch(`${API_URL}/api/exhibition`).then(
            (res)=>{
                if(!res.ok){
                    throw new Error(`Front End : Failed to get the api from Back End => (status ${res.status})`) 
                }
                return res.json()
            }
        ).then((data)=>{
            const filter=data.filter((f:ExhibitionDetail)=>f.id.toString() !== id)
            const shuffled =[...filter].sort(()=>Math.random()-0.5);
            const random=shuffled.slice(0,4)
             setCutFourData(random)
            setGetRandom(data);
        })
    },[id])
    

    useEffect(()=>{
        const API_URL=import.meta.env.VITE_API_LOCALHOST || 'http://localhost:4000';
        fetch(`${API_URL}/api/exhibition/${id}`).then(
            (res)=>{
                if(!res.ok){
                    throw new Error(`Front End : Failed to get the api from Back End => (status ${res.status})`) 
                }
                return res.json()
            }
        ).then((data)=>{
            setGetExhibitionData(data)
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })

    },[id])

    useEffect(()=>{
        const node = itemRefs.current[activeIndex]
        if(node){
            node.scrollIntoView({behavior:'smooth',block:'start'})
        }
    },[activeIndex])

    useEffect(()=>{
        const container =scrollContainerRef.current
        if(!container) return
        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        const idx=itemRefs.current.findIndex(el=>el === entry.target)
                        if(idx !==-1)setActiveIndex(idx)
                    }
                });
            },
            {
                root:container,
                threshold:0.6,
            }
        );
        itemRefs.current.forEach(el => el && observer.observe(el))

        return()=>observer.disconnect()
    },[])

    if (loading) {
            return (
            <div className="min-h-screen flex items-center justify-center bg-[#080403]">
                <p className="text-white">Loading…</p>
            </div>
            );
        }
        if (error) {
            return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#080403] text-white">
                <p>{error}</p>
                <Link to="/" className="mt-4 text-cyan-500 hover:underline">
                ← Back to Home
                </Link>
            </div>
            );
        }
        if (!getExhibitionData) {
            return (
            <div className="min-h-screen flex items-center justify-center bg-[#080403] text-white">
                <p>Shop item not found.</p>
            </div>
            );
        }
    return(
        <div>
            <Header/>
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
                            {getExhibitionData.image_details.map((item,idx)=>(
                                <div 
                                key={id}
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
                        <div className='space-y-4 p-6' ref={scrollContainerRef}>
                            {
                                getExhibitionData.image_details.map((art,idx)=>(
                                    <img 
                                    key={idx}
                                    ref={el => {itemRefs.current[idx] = el}} 
                                    src={art} className='object-cover max-w-full w-full'/>

                                ))
                            }
                        </div>
                    </div>
                    <div className='w-5/12 relative h-full '> 
                        <div className='fixed overflow-y-scroll h-full hide-scrollbar h-full'>
                            <div className='bg-white pb-25'>
                                <div className='bg-[#f7f7f7] p-10 h-full'>
                                    <div className='relative'>
                                        <div className="absolute -top-5 -left-5 w-20 h-2 bg-yellow-400"></div>
                                        <div className="absolute -top-5 -left-5 w-2 h-20 bg-yellow-400"></div>
                                        <div className="absolute -bottom-5 -right-5 w-20 h-2 bg-yellow-400"></div>
                                        <div className="absolute -bottom-5 -right-5 w-2 h-20 bg-yellow-400"></div>
                                        <div className='font-bold text-6xl text-[#080403] tracking-widest'>
                                        {getExhibitionData?.title}
                                        </div>
                                        <div className='max-h-[50%] overflow-y-scroll hide-scrollbar'>
                                            <div className='text-xl text-[#080403] pt-5'>
                                              {/* {description} */}
                                            </div>
                                            <div className='pt-10'>
                                                {getExhibitionData?.description}
                                            </div>
                                        </div>
                                        <div className='flex justify-start items-start gap-10 py-20'>
                                            <div className='flex'>
                                                <img src={smileIcon} className='object-contain'/>
                                                <div className='pl-2'>{getExhibitionData?.smile}</div>
                                            </div>
                                            <div className='flex'>
                                                <img src={loveIcon} className='object-contain'/>
                                                <div className='pl-2'>{getExhibitionData?.love}</div>
                                            </div>
                                            <div className='flex'>
                                                <img src={viewIcon} className='object-contain'/>
                                                <div className='pl-2'>{getExhibitionData?.view}</div>
                                            </div>
                                        </div>
                                        <div className="text-base text-[#080403] text-end">
                                            {getExhibitionData?.date.toString()}
                                        </div>
                                    </div>
                                    <div className='relative flex my-10 items-center '>
                                        <div className='w-[3rem] h-[3rem]'>
                                            <img src={mikaIcon} className='object-contain'/>
                                        </div>
                                        <div className='font-bold text-lg text-[#080403] pl-4'>Mika Pikazo</div>
                                    </div>
                                    <div className=''>
                                        <div className=' w-full h-full'>
                                            <div className='grid grid-cols-2 gap-2'>
                                                {   
                                                    cutFourData.map((data)=>(
                                                        <div className='w-[100%] h-[20rem] border-2' key={data.id}>
                                                            <Link to={`/Art/${data.id}`}>
                                                                <img src={data.image_details[0]} className='w-full h-full object-cover object-top cursor-pointer hover:scale-105 transition transition-transform duration-300'/>
                                                            </Link>
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