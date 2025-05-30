import React from 'react'
import header_logo from '../../assets/icons/header_logo.png'
import header_cart from '../../assets/icons/header_cart.png'
import header_ship from '../../assets/icons/header_ship.png'
import header_contact from '../../assets/icons/header_contact.png'
import header_profile from '../../assets/icons/header_profile.png'
import { Link } from 'react-router-dom'
export default function Header(){

    const headerIcon=[
        {
            id:0,
            icon:header_cart,
            nav:'/Cart'
        },
        {
            id:1,
            icon:header_ship,
            nav:'/Shipping'
        },
        {
            id:2,
            icon:header_contact,
            nav:'/Contact'
        },
        {
            id:3,
            icon:header_profile,
            nav:'/Login'
        }
    ]
    return(
        <div className='bg-[#080403] relative w-full'>
            <div className='px-10 py-4'>
                <div className='flex justify-between items-center'>
                    <div className='w-3/12'>
                    <Link to="#top">
                        <img src={header_logo} className='object-contain w-auto h-auto'/>
                    </Link>
                    </div>
                    <div className='w-6/12 border-1 border-[#f7f7f7] flex justify-evenly py-4 px-2'>
                       {
                        ['home','news','art','shop','about'].map(section=>(
                            <a key={section} href={`#${section}`} className='text-[#f7f7f7] text-lg cursor-pointer'>
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))
                       }
                    </div>
                    <div className='w-3/12'>
                        <div className='flex justify-evenly'>
                            {
                            headerIcon.map((icon)=>(
                                <Link to={`${icon.nav}`}>
                                    <img src={icon.icon} className='object-contain w-auto h-auto cursor-pointer'/>
                                </Link>
                                ))
                            }
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}