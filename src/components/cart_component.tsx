import React from 'react';
import Order1 from '../assets/images/order_img.png'
import mikaIcon from '../assets/icons/mika_48.png'
import addIcon from '../assets/icons/add.png'
import minusIcon from '../assets/icons/minus.png'
export interface CartItem{
    cart_id:number;
    product_id:number;
    quantity:number;
    title:string;
    price:number;
    thumbnail:string;
}

interface CartComponentsProps{
    items:CartItem[]
    onQuantityChange:(cartId:number,newQuantity:number)=>void;
    onRemoveItem:(cartId:number)=>void
}


export default function CartComponents({items,onQuantityChange,onRemoveItem}:CartComponentsProps) {

    return (
        <div className='p-4 '>
            {
                items.map((item)=>(
                    <div className='flex border-2 border-[#F7F7F7] p-4'>
                        <div className='border-2 border-[#f7f7f7] h-fit'>
                            <div className='border-2 h-[24px] w-[24px] border-[#080403] items-center flex justify-between cursor-pointer'>
                                <div className='bg-[#FFDC22] w-[16px] h-[16px] m-auto'></div>
                            </div>
                        </div>
                        <div className='w-4/12 pl-6'>
                            <img src={item.thumbnail} className='object-cover w-full h-full' />
                        </div>
                        <div className='w-full pl-4'>
                            <div className='flex justify-between w-full'>
                                <div className='font-bold text-[#f7f7f7]'>{item.title}</div>
                                <div className='text-[#f7f7f7] cursor-pointer' onClick={()=>onRemoveItem(item.cart_id)}>削除</div>
                            </div>
                            <div className='relative flex my-4 items-center'>
                                <div className='w-[3rem] h-[3rem]'>
                                    <img src={mikaIcon} className='object-contain' />
                                </div>
                                <div className='text-lg text-[#f7f7f7] pl-4'>Mika Pikazo</div>
                            </div>
                            <div className=''>
                                <div className='text-[#f7f7f7] text-[1.2rem]'> 【本体】約450×430（持ち手含むと760）㎜</div>
                                <div className='text-[#f7f7f7] text-[1.2rem]'> 【持ち手】約75×330㎜</div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center justify-center'>
                                    <img src={minusIcon} className='object-contain w-10 cursor-pointer' onClick={()=>{item.cart_id, Math.max(1, item.quantity - 1)
                                    }}/>
                                    <input type="text" value={item.quantity} readOnly className='w-auto h-11 bg-[#f7f7f7] text-center border border-[#080403] mx-2'></input>
                                    <img src={addIcon} className='object-contain w-10 cursor-pointer' onClick={()=>{
                                       onQuantityChange(item.cart_id, item.quantity + 1)
                                    }
                                    }/>
                                </div>
                                <div className=''>
                                    <div className='font-bold text-[#f7f7f7] text-[2.5rem] '>¥  {item.price.toLocaleString()}(税込)</div>
                                    <div className='text-[#f7f7f7] text-[1rem] text-right'>消費税率10％商品</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}