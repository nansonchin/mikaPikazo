import React from 'react';
// import Art1 from '../assets/images/art1.png'
import viewIcon from '../assets/icons/white_view.png'
import { Link } from 'react-router-dom';
interface ArtProps{
    image:string;
    title:string;
    date:string;
    views:string;
}
export default function ExhibitionArtComponents({
    image,
    title,
    date,
    views,
}:ArtProps){
    return(
        <div>
            <div className="">
                <Link to={`${title}`}>
                <div className='w-full h-full cursor-pointer group relative overflow-hidden'>
                    <img src={image} className='object-cover w-full h-ful transition-transform duration-300 group-hover:scale-105' />
                    <div className="py-3">
                        <div className='text-[#f7f7f7] text-2xl font-bold'> {title}</div>
                        <div className='py-2 flex justify-between'>
                            <div className='text-[#f7f7f7] text-lg'>{date}</div>
                            <div className='flex justify-around'>
                                <img src={viewIcon} className='object-contain'/>
                                <div className='text-[#f7f7f7] text-lg text-left pl-2'>{views}</div>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>

            </div>
        </div>
    )
}