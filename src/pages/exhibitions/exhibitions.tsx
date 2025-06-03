import React, { useState, useEffect, useRef } from 'react';
import ExhibitionImg from '../../assets/images/exhibition.png'
import ExhibitionArtComponents from '../../components/exhibitions_art_component'
import SlideImage1 from '../../assets/images/sui.png'
import SlideImage2 from '../../assets/images/ily.png'
import SlideImage3 from '../../assets/images/under.png'
import Art1 from '../../assets/art/art1.png'
import Art2 from '../../assets/art/art2.png'
import Art3 from '../../assets/art/art3.png'
import Art4 from '../../assets/art/art4.png'
import Art5 from '../../assets/art/art5.png'
import Art6 from '../../assets/art/art6.png'
import Art7 from '../../assets/art/art7.png'
import Art8 from '../../assets/art/art8.png'
import Art9 from '../../assets/art/art9.png'
import Art10 from '../../assets/art/art10.png'
import Art11 from '../../assets/art/art11.png'
import Art12 from '../../assets/art/art12.png'
import ExhibitionArtSlides from '../../components/exhibition_slide'
import ExhibitionSlides from '../../components/exhibitions_home_slide';

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
export default function Exhibitions() {
    const [errorState,setErrorState]=useState(null)
    const [loading,setLoading]=useState(false);
    const [exhibitionData,setExhibitionData]=useState<ExhibitionDetail[]>([])

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

    const art=[
        {
            id:0,
            title:'ジャスミン',
            date:'26.9.2023',
            views:'23,690',
            image:Art1
        },
        {
            id:1,
            title:'シンデレラ',
            date:'26.9.2023',
            views:'23,690',
            image:Art2
        },
        {
            id:2,
            title:'アリエル',
            date:'26.9.2023',
            views:'23,690',
            image:Art3
        },
        {
            id:3,
            title:'白雪姫',
            date:'26.9.2023',
            views:'23,690',
            image:Art4
        },
        {
            id:4,
            title:'GOOFY',
            date:'26.9.2023',
            views:'23,690',
            image:Art5
        },
        {
            id:5,
            title:'DAISY DUCK',
            date:'26.9.2023',
            views:'23,690',
            image:Art6
        },
        {
            id:6,
            title:'DONALD DUCK',
            date:'26.9.2023',
            views:'23,690',
            image:Art7
        },
        {
            id:7,
            title:'MINNIE MOUSE',
            date:'26.9.2023',
            views:'23,690',
            image:Art8
        },
        {
            id:8,
            title:'忍野忍',
            date:'26.9.2023',
            views:'23,690',
            image:Art9
        },
        {
            id:9,
            title:'遭遇',
            date:'26.9.2023',
            views:'23,690',
            image:Art10
        },
        {
            id:10,
            title:'神原駿河',
            date:'26.9.2023',
            views:'23,690',
            image:Art11
        },
        {
            id:11,
            title:'羽川翼',
            date:'26.9.2023',
            views:'23,690',
            image:Art12
        },
        
    ]

    const manga=[
        {
            id:0,
            title:'ジャスミン',
            date:'26.9.2023',
            views:'23,690',
            image:Art1
        },
        {
            id:1,
            title:'シンデレラ',
            date:'26.9.2023',
            views:'23,690',
            image:Art2
        },
        {
            id:2,
            title:'アリエル',
            date:'26.9.2023',
            views:'23,690',
            image:Art3
        },

        
    ]

    const [selectedMenu, setSelectedMenu] = useState(0)
    const hasActiveMenu = selectedMenu !== null

    useEffect(()=>{
        try{
            const API_URL=import.meta.env.VITE_API_LOCALHOST || 'http://localhost:4000'
           fetch(`${API_URL}/api/exhibition`).then(res=>{
            if(!res.ok){
                throw new Error(`status ${res.status}`)
            }
                return res.json()
           }).then(data=>{
            setExhibitionData(data)
           })
        }catch(err){
            console.log(err);
        }
    },[])
    return (
        <div>
            <div className='bg-[#080403] min-h-screen relative'>
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
                    {
                        selectedMenu === 0 &&(
                            // <></>
                            <ExhibitionSlides product={exhibitionData.filter(data=>data.category==='feature')}/> 
                        )
                    }
                   
                </div>
                <div className='pt-20'>
                    {
                        selectedMenu === 1 &&(
                            <ExhibitionArtSlides artSlides={exhibitionData.filter(data=>data.category ==='illustration')}/>
                        )
                    }
                </div>
                <div className='pt-20'>
                    {/* {
                        selectedMenu === 2 &&(
                            <ExhibitionArtSlides artSlides={manga}/>
                        )
                    } */}
                   
                </div>
            </div>
        </div>
    )
}