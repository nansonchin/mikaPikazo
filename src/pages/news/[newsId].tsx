import React,{useState,useEffect} from 'react'
import NewBg1 from '../../assets/images/news_1.jpg'
import NewBg2 from '../../assets/images/news_2.jpg'
import NewBg3 from '../../assets/images/news_3.jpg'
import New_backIcon from '../../assets/icons/new_back.png'
import News_FaceIcon from '../../assets/icons/news_face.png'
import News_InstaIcon from '../../assets/icons/news_insta.png'
import News_XIcon from '../../assets/icons/news_x.png'
import NextIcon from '../../assets/icons/next_white_icon.png'
import { Link,useNavigate,useParams } from 'react-router-dom'
import Header from '../header/header'

interface NewsItem{
    id:number,
    title:string,
    date:string,
    month:string,
    description:string,
    facebook:string,
    instagram:string,
    twitterx:string,
    image_url:string,
}
export default function NewsDetail(){
    const {id}=useParams<{id:string}>();
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState<string|null>(null);
    const [item,setItem] = useState<NewsItem|null>(null);
    const [latestInformation,setLatestInformation]=useState<NewsItem[]>([]);
    const navigate = useNavigate()

    useEffect(()=>{
        const API_URL=import.meta.env.VITE_API_LOCALHOST || 'http://localhost:4000';
        fetch(`${API_URL}/api/news`).then((res)=>res.json()).then((newsData:NewsItem[])=>{
            const currentId=Number(id);
            const filtered = newsData.filter(item=>item.id !=currentId);
            setLatestInformation(filtered)
        }).catch(error=>{
            console.log(error)
        })
    },[id])

    const handleNextNews=()=>{
        if(!item|| latestInformation.length===0) return;
        const allNews=[...latestInformation,item].sort((a,b)=> a.id - b.id);
        const currentIndex = allNews.findIndex((news)=>news.id===item.id)

        const nextIndex = (currentIndex+1)% allNews.length;
        const nextId = allNews[nextIndex].id

        navigate(`/News/${nextId}`);
    }
    useEffect(()=>{
        if(!id) return;
        const API_URL=import.meta.env.VITE_API_LOCALHOST || 'http://localhost:4000';
        fetch(`${API_URL}/api/news/${id}`).then((res)=>{
            if(!res.ok){
                throw new Error(`Front End : Failed to get the api from Back End => (status ${res.status})`) 
            }
            return res.json();
        }).then((data:NewsItem)=>{
            setItem(data)
        }).catch(error=>{
            console.log(error)
            setError('Front End : Encounter an error during fetching News Detail data')
        }).finally(()=>{
            setLoading(false);
        })

    },[id])
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
        if (!item) {
            return (
            <div className="min-h-screen flex items-center justify-center bg-[#080403] text-white">
                <p>News item not found.</p>
            </div>
            );
        }

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
   
    return(
        <div>
            <Header/>
            <div className='min-h-screen bg-[#080403] relative h-full'>
                {/* news_bg */}
                <div
                    className="min-h-[43rem] bg-no-repeat bg-center bg-cover bg-[0px_-30rem] relative"
                    style={{
                    backgroundImage: `
                        url(${item.image_url})
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
                                    <span className='text-[3rem] text-[#080403] font-bold'>{item.date}</span>日
                                </div>
                                <div className='text-[2rem] text-[#080403]'>{item.month}月</div>
                            </div>
                            <div className='font-bold mt-5 mb-10 text-[1.3rem] text-[#f7f7f7]'>
                                {item.title}
                            </div>
                            <div className='text-[#f7f7f7] text-[1.3rem] my-5'>
                               {item.description}
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex mt-20 gap-5'>
                                    {
                                        Socialicon.map((data)=>(
                                            <div className='cursor-pointer '>
                                                <img src={data.icon} className='object-contain' />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <div className="pt-10 text-[#F7F7F7] px-30">
                                        <div className='cursor-pointer group w-fit' onClick={handleNextNews}>
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
                                        latestInformation.map((data,index)=>(
                                            <div
                                                className="relative cursor-pointer bg-zoom my-5 group"
                                                style={{
                                                backgroundImage: `
                                                    /* 1) the semi-transparent overlay */
                                                    url(${data.image_url})
                                                `,
                                                backgroundPosition: 'center',

                                                }}
                                            >
                                            <Link to={`/News/${data.id}`}>

                                                <div className='inset-0 z-10 absolute top-0 w-full h-full ' 
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
                                                    backgroundPosition:'top'
                                                    }}
                                                    />
                                                    <div className='border-2 border-[#f7f7f7] p-4 w-full min-h-[16rem] h-full relative z-20 items-center text-center '>
                                                        <div className='bg-[#f7f7f7] p-5 w-auto absolute top-0 right-0'>
                                                            <div className='text-[1.5rem] text-[#080403]'>
                                                                <span className='text-[2rem] text-[#080403] font-bold'>{data.date}</span>日
                                                            </div>
                                                            <div className='text-[1.5rem] text-[#080403]'>{data.month}月</div>
                                                        </div>
                                                        <div className='text-[#f7f7f7] text-[1rem] absolute bottom-[1.5rem] text-left'>{data.title}</div>
                                                    </div>
                                                    <div className='h-[6px] absolute bottom-0 z-12 bg-[#F40404] overflow-hidden group-hover:w-full'>
                                                    </div>
                                            </Link>
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