import React from 'react';
import back_icon from '../../assets/icons/back_icon.png'
import OrderComponents from '../../components/order_components';
import Header from '../header/header';
export default function OrderList() {
    return (
        <div>
            <Header/>
            <div className='min-h-screen bg-[#080403] relative h-full'>
                <div className='py-10'>
                    <div className='flex justify-between'>
                        <div className='w-1/12 h-screen bg-[#080403]'>
                            <div className='w-[100%]'>
                                <div className='flex items-center justify-center'>
                                    <div className='group relative cursor-pointer'>
                                        <img src={back_icon} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                        <div className='text-[#f7f7f7] text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Back</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-11/12 w-full'>
                            <div className='font-bold text-center text-[#f7f7f7] text-[2.5rem] py-8'>
                                Order List (2)
                            </div>
                            <div className='py-10 px-10'>
                                <OrderComponents/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}