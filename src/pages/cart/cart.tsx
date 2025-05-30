import React,{useState} from 'react';
import back_icon from '../../assets/icons/back_icon.png'
import back_icon_black from '../../assets/icons/back_60_black.png'
import CartComponents from '../../components/cart_component';
import jcbIcon from '../../assets/icons/jcb.png';
import side_jcb from '../../assets/icons/jcb_active.png';
import side_master from '../../assets/icons/master.png';
import side_visa from '../../assets/icons/visa.png';
import side_paypay from '../../assets/icons/paypay.png';
export default function Cart() {
    const [sideMenuOpen,setSideMenuOpen]=useState(false)
    const [paymentSelected,setPaymentSelected]=useState(0)

    const [isInputPayment,setIsInputPayment]=useState(true)
    const [cardNumber,setCardNumber]=useState('')
    const [cardDate,setCardDate]=useState('')
    const [ccv,setCcv]=useState('')

    const [errCcv,setErrCcv]=useState(false)
    const [errCardNumber,setErrCardNumber]=useState(false)
    const [errCardDate,setErrCardDate]=useState(false)

    const paymentIcon=[
        {
            id:0,
            name:'JCB',
            active_img:side_jcb,
            unactive_img:side_jcb
        },
        {
            id:1,
            name:'MASTER',
            active_img:side_master,
            unactive_img:side_master
        },
        {
            id:2,
            name:'VISA',
            active_img:side_visa,
            unactive_img:side_visa
        },
        {
            id:3,
            name:'PAYPAY',
            active_img:side_paypay,
            unactive_img:side_paypay
        },
    ]

    const checkError=()=>{
        if(!cardNumber){
            setErrCcv(true)
        }else{
            setErrCcv(false)
        }

        if(!cardDate){
            setErrCardDate(true)
        }else{
            setErrCardDate(false)
        }

        if(!ccv){
            setErrCcv(true)
        }else{
            setErrCcv(false)
        }

        if(!errCcv && !errCardDate && !errCardNumber){

        }
    }
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
                                        <div className='bg-[#FFDC22] px-4 py-6 my-8 cursor-pointer' onClick={()=>setSideMenuOpen(true)}>
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
            {/* sideMenu Overlay */}
            {
                sideMenuOpen && (
                   <div className='overflow-hidden '>
                        <div className='bg-[#080403] opacity-90 min-h-screen min-w-screen  w-full h-full overflow-hidden z-2 absolute top-0 left-0'></div>
                         <div className={`py-10 px-10 z-4 fixed top-0 h-full right-0 w-[30%] bg-[#f7f7f7] shadow-lg transform ${sideMenuOpen? 'translate-x-0': 'translate-x-full'}`}>
                            <div className='w-full '>
                                <div className='flex'>
                                    <div className='group relative cursor-pointer' onClick={()=>setSideMenuOpen(false)}>
                                        <img src={back_icon_black} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                        <div className='text-[#080403] text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Back</div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    {
                                        paymentIcon.map((data,index)=>(
                                            <div className='cursor-pointer' onClick={()=>setPaymentSelected(data.id)}>
                                                <img src={paymentSelected === data.id ? data.active_img:data.unactive_img} className='object-contain w-full h-full'/>
                                                <div className={`text-[#080403] text-center ${paymentSelected === data.id? 'font-bold border-b-4 border-[#FFDC22]':'font-normal'}`}>{data.name}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='my-5'>
                                    <div className='flex'>
                                        <div onClick={()=>setIsInputPayment(true)}className={`cursor-pointer py-4 px-12 ${isInputPayment? 'bg-[#FFDC22] font-bold' : ''}`}>入力</div>
                                        <div onClick={()=>setIsInputPayment(false)} className={`cursor-pointer py-4 px-12 ${!isInputPayment? 'bg-[#FFDC22] font-bold' : ''}`}>QRコード</div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        isInputPayment && (
                                            <div>
                                                 <div className=" w-full py-5 flex flex-col overflow-hidden">
                                                    <label className='text-lg text-[#91b233]'>カード番号</label>
                                                    <label className='text-lg text-[#F40404]'>{errCardNumber? '※エラー！ユーザー名が見つかりません':null}</label>
                                                    <input value={cardNumber} onChange={e=>setCardNumber(e.target.value)} type='text' className='w-ful border-b-2 border-b-solid font-bold' />
                                                </div>
                                                <div className='flex justify-between gap-5'>
                                                     <div className=" w-auto flex flex-col">
                                                        <label className='text-lg text-[#91b233]'>有効期限</label>
                                                        <label className='text-lg text-[#F40404]'>{errCardDate? '※エラー！ユーザー名が見つかりません':null}</label>
                                                        <input value={cardDate} onChange={e=>setCardDate(e.target.value)} type='text' className='w-ful border-b-2 border-b-solid font-bold' />
                                                    </div>
                                                     <div className=" w-4/12  flex flex-col">
                                                        <label className='text-lg text-[#91b233]'>CVV</label>
                                                        <label className='text-lg text-[#F40404]'>{errCcv? '※エラー！ユーザー名が見つかりません':null}</label>
                                                        <input value={ccv} onChange={e=>setCcv(e.target.value)} type='text' className='w-ful border-b-2 border-b-solid font-bold' />
                                                    </div>
                                                </div>
                                                <div className='bg-[#FFDC22] px-4 py-6 my-8 cursor-pointer' onClick={checkError}>
                                                    <div className='text-center text-[#080403] font-bold'>
                                                        選択する
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        !isInputPayment && (
                                            <div className='border-2 border-[#080403] min-h-[70%] h-full p-2'>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                   </div>
                )
            }
        </div>
    )
}