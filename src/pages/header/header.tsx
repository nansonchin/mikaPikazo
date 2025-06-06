import React,{useState,useEffect} from 'react'
import header_logo from '../../assets/icons/header_logo.png'
import header_cart from '../../assets/icons/header_cart.png'
import header_ship from '../../assets/icons/header_ship.png'
import header_contact from '../../assets/icons/header_contact.png'
import header_profile from '../../assets/icons/header_profile.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { getToken, clearToken } from '../../utilize/index' 
import { HashLink } from "react-router-hash-link";

export default function Header(){
    const [cartCount,setCartCount]= useState<number>(0)
    const [loadingCount,setLoadingCount] = useState(true)
    const [isToken,setIsToken] = useState(false)
    const headerIcon=[
        {
            id:0,
            icon:header_cart,
            nav:'/Cart',
            badge:cartCount,
        },
        {
            id:1,
            icon:header_ship,
            nav:'/Shipping',
            badge:0,
        },
        {
            id:2,
            icon:header_contact,
            nav:'/Contact',
            badge:0,
        },
    ]



    useEffect(()=>{
        const token = getToken('authToken')
        if(!token){
            setCartCount(0)
            setLoadingCount(false)
            return
        }

        const API_URL =  import.meta.env.VIET_API_LOCALHOST || 'http://localhost:4000';
        axios.get(`${API_URL}/api/cart/count`,{
            headers:{Authorization:`Bearer ${token}`},
        }).then((res)=>{
            setCartCount(res.data.count ||0)
        }).catch((err)=>{
            console.error('Failed to fetch cart count ', err)
            setCartCount(0)
        }).finally(()=>{
            setLoadingCount(false)
        })
    },[])
    
    const handleLogout = () => {
        clearToken('authToken')
        setIsToken(false)
        // You might also navigate somewhere or reload…
    }

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
                            <HashLink key={section} to={`/#${section}`} className='text-[#f7f7f7] text-lg cursor-pointer '>
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </HashLink>
                        ))
                       }
                    </div>
                    <div className='w-3/12'>
                        <div className='flex justify-evenly relative'>
                            {
                            headerIcon.map((icon)=>(
                                <div className=' relative'>
                                    <Link to={`${icon.nav}`}>
                                        <img src={icon.icon} className='object-contain w-auto h-auto cursor-pointer '/>
                                    </Link>
                                    {
                                        !loadingCount && icon.badge > 0 && (
                                            <div className='absolute -top-1 -right-2 flex items-center justify-center'>
                                                {icon.badge.toString()}
                                            </div>
                                        )
                                    }
                                </div>
                                ))
                            }
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}