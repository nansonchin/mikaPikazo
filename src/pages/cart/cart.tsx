import React from 'react';
import back_icon from '../../assets/icons/back_icon.png'
import CartComponents from '../../components/cart_component';
import jcbIcon from '../../assets/icons/jcb.png';
export default function Cart() {
    return (
        <div>
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
                                Cart (2)
                            </div>
                            <div className='py-10 px-10 flex relative'>
                                <div className='w-8/12 mx-6'>
                                    <div className=''>
                                        <CartComponents />
                                    </div>
                                </div>
                                <div className='w-4/12 sticky'>
                                    <div className='bg-[#F7F7F7] p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='font-bold text-[#080403]'>配達</div>
                                            <div className='text-[#080403] cursor-pointer'>編集</div>
                                        </div>
                                        <div className='text-[#080403] my-2'>
                                            〒231-0062 神奈川県横浜市中区桜木町 1-1
                                        </div>
                                        <div className='mt-8'>
                                            <div className='font-bold text-[#080403]'>支払い方法</div>
                                        </div>
                                        <div className='flex justify-between items-start mt-2'>
                                            <div className='flex flex-col items-center justify-center'>
                                                <img src={jcbIcon} className='object-contain' />
                                                <div className='font-bold'>JCB</div>
                                            </div>
                                            <div className='text-[#080403]'>
                                                123456***552
                                            </div>
                                        </div>
                                        <div className='bg-[#FFDC22] px-4 py-6 my-8 cursor-pointer'>
                                            <div className='text-center text-[#080403] font-bold'>
                                                変える
                                            </div>
                                        </div>
                                        <div className='border-b-4 border-[#FFDC22]'></div>
                                        <div className='flex justify-between items-center my-8'>
                                            <div className='font-bold text-[#080403]'>注文合計</div>
                                            <div className='text-[#080403]'>¥  4,500</div>
                                        </div>
                                        <div className='flex justify-between items-center my-8'>
                                            <div className='font-bold text-[#080403]'>送料</div>
                                            <div className='text-[#080403]'>¥  1,100</div>
                                        </div>
                                        <div className='flex justify-between items-center my-8'>
                                            <div className='font-bold text-[#080403]'>まとめ</div>
                                            <div className='font-bold text-[#080403]'>¥  5,600(税込)</div>
                                        </div>
                                        <div className='border-b-4 border-[#FFDC22]'></div>
                                        <div className='bg-[#FFDC22] px-4 py-6 my-8 cursor-pointer'>
                                            <div className='text-center text-[#080403] font-bold'>
                                                次いで
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