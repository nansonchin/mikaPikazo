import React from 'react';
import Order1 from '../assets/images/order_img.png'
import Order2 from '../assets/images/order_img_2.png'
import OrderBg1 from '../assets/images/order_bg.png'
import OrderBg2 from '../assets/images/order_bg_2.png'
import mikaIcon from '../assets/icons/mika_48.png'
import dropdown from '../assets/icons/drop_down_icon.png'
export default function OrderComponents() {
    const deliverydata = [
        {
            location: '100-0001 東京都千代田区一番町1-1. ',
            isCurrent: true,
            date: 'August 23, 2023 11:00 PM',
            status: 'Delivered',
            detail: '荷物が配達されました',
            isProof: true,
        },
        {
            location: '100-0001 東京都千代田区一番町1-1. ',
            isCurrent: false,
            date: 'August 23, 2023 11:00 PM',
            status: 'In transit',
            detail: '配達に失敗しました: 自然災害。',
            isProof: false,
        },
        {
            location: '100-0001 東京都千代田区一番町1-1. ',
            isCurrent: false,
            date: 'August 23, 2023 11:00 PM',
            status: 'In transit',
            detail: '荷物は配達中です',
            isProof: false,
        },
    ]
    return (
        <div className='flex flex-col'>
            <div className='border-1 border-[#f7f7f7] p-5'>
                <div
                    className="p-5 bg-no-repeat bg-center bg-cover"
                    style={{ backgroundImage: `url(${OrderBg1})` }}
                >
                    {/* //order */}
                    <div className='flex'>
                        <div className='w-[15%]'>
                            <img src={Order1} className='object-cover w-[100%]' />
                        </div>
                        <div className='w-[95%] pl-5 flex flex-col justify-between'>
                            <div className='flex justify-between items-start'>
                                <div className='items-start'>
                                    <div className='font-bold text-[#f7f7f7] text-6lg'>
                                        「Mika Pikazo展」 マルシェバッグ
                                    </div>
                                    <div className='relative flex my-4 items-center'>
                                        <div className='w-[3rem] h-[3rem]'>
                                            <img src={mikaIcon} className='object-contain' />
                                        </div>
                                        <div className='text-lg text-[#f7f7f7] pl-4'>Mika Pikazo</div>
                                    </div>
                                </div>
                                <div className='items-end'>
                                    <div className='font-bold text-[#f7f7f7] text-[2.5rem] '>¥  2,000(税込)</div>
                                    <div className='text-[#f7f7f7] text-[1rem] text-right'>消費税率10％商品</div>
                                </div>
                            </div>
                            <div className='flex justify-between items-end'>
                                <div>
                                    <div className='text-[#f7f7f7] text-[1.2rem]'> 【本体】約450×430（持ち手含むと760）㎜</div>
                                    <div className='text-[#f7f7f7] text-[1.2rem]'> 【本体】約450×430（持ち手含むと760）㎜</div>
                                    <div className='text-[#f7f7f7] text-[1.5rem] flex py-4'>
                                        <div>現在地</div>
                                        <div className='font-bold pl-2 text-[#FFDC22]'>100-0001 東京都千代田区一番町1-1. </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold text-[1.5rem] text-[#FFDC22]'>配送中</div>
                                    <div className='text-enditems-end flex justify-end py-2 cursor-pointer'>
                                        <img src={dropdown} className='object-contain' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* dropdown */}
                    <div className='p-4 bg-black bg-opacity-30 my-5'>
                        <div className='text-[#f7f7f7] font-bold'>場所の詳細:</div>
                        {
                            deliverydata.map((data, index) => (
                                <div className='py-5'>
                                    <div className=''>
                                        <div className='flex mt-5 items-center w-full '>
                                            <div className='w-[2%]'>
                                                <div className={`rounded-full h-[0.75rem] w-[0.75rem] ${data.isCurrent?' bg-[#FFDC22]' :' bg-[#F7f7f7]'}`}></div>
                                            </div>
                                            <div className='w-[98%]'>
                                                <div className='flex justify-between items-center w-full'>
                                                    <div className={`ml-4 font-bold ${data.isCurrent? 'text-[#FFDC22]':'text-[#f7f7f7]'}`}>{data.location} </div>
                                                    <div className='text-[#f7f7f7] text-[1.25rem]'>{data.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mt-1 items-center w-full'>
                                            <div className='w-[2%]'>
                                                {/* <div className='rounded-full bg-[#FFDC22] h-[0.75rem] w-[0.75rem]'></div> */}
                                            </div>
                                            <div className='w-[98%]'>
                                                <div className='flex justify-between items-center w-full '>
                                                    <div className='ml-4 text-[#f7f7f7] text-[1.25rem]'>{data.status}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mt-1 items-center w-full'>
                                            <div className='w-[2%]'>
                                            </div>
                                            <div className='w-[98%]'>
                                                <div className='flex justify-between items-center w-full '>
                                                    <div className='ml-4 text-[#f7f7f7] text-[1.25rem]'>{data.detail}</div>
                                                    {
                                                        data.isProof &&(
                                                            <div className='text-[#f7f7f7] text-[1.25rem] font-bold cursor-pointer'>配達証明を表示</div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}