import React, { useState } from 'react';
import loginGirl from '../../assets/images/login_mika_pic.png';
import circle_Arrow from '../../assets/icons/circle_arrow.png';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const [email,setEmail] = useState('')
    const [errMail, setErrMail] = useState(false)
    const [mailVerification,setMailVerification] = useState(false)
    const [initialMail,setInitialMail] = useState(true)

    const [digitNumber,setDigitNumber] = useState('')
    const [errDigit,setErrDigit] = useState(false)

    const [proceed, setProceed]=useState(false)
    const navigate = useNavigate()

    const checkingForgotMail =()=>{
        if(!email.trim()){
            setErrMail(true)
            setMailVerification(false)
            setInitialMail(true)
        }else{
            setInitialMail(false)
            setErrMail(false)
            setMailVerification(true)
        }
    }

    const checkingDigitNumber = ()=>{
        if(!digitNumber.trim()){
            setProceed(false)   
            setErrDigit(true)
        }else{
            setErrDigit(false)
            setProceed(true)   
            navigate('/Resetpassword')
        }
    }
    return (
        <div>
            <div className='flex h-screen overflow-hidden relative'>
                <div className="flex-1 bg-black text-white relative overflow-hidden">
                    <div className="w-100 text-8xl font-bold transform origin-bottom-left rotate-90 -mt-10  ml-10">
                        FORGOT
                    </div>
                </div>
                <div className='flex-8 flex h-screen overflow-hidden bg-[#CFFE48] relative '>
                     {
                            initialMail &&(
                    <div className='flex-1 m-auto px-10 z-20'>
                        <div className='font-bold text-5xl text-black'>
                                FORGOT PASSWORD?
                        </div>
                       
                                <div className=" w-full py-5 flex flex-col">
                                    <label className='text-lg text-[#91b233]'>登録したメールアドレスを入力してください</label>
                                    <label className='text-lg text-[#F40404]'>{errMail? '※確認エラー！正しいコードを入力してください':null}</label>
                                    <input type='text' className='w-ful border-b-2 border-b-solid font-bold' value={email} onChange={e=>setEmail(e.target.value)}/>
                                </div>

                        <div className='flex items-end justify-end '>
                            <div className='group relative cursor-pointer' onClick={checkingForgotMail}>
                                <img src={circle_Arrow} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Next</div>
                            </div>
                        </div>
                        <div className="mt-20 cursor-pointer underline flex items-center justify-center">
                            <Link to={'/Login'}>
                            LOGIN
                            </Link>

                        </div>
                    </div>
                        )
                    }
                    {/* Digit Number */}
                    {
                        mailVerification && (
                            <div className='flex-1 m-auto px-10 z-20'>
                            <div className='font-bold text-5xl text-black'>
                                    メールアドレスを確認する
                            </div>
                        
                                    <div className=" w-full py-5 flex flex-col">
                                        <label className='text-lg text-[#91b233]'>メールでお送りした6桁のコードを入力してください</label>
                                        <label className='text-lg text-[#F40404]'>{errDigit? '※確認エラー！正しいコードを入力してください':null}</label>
                                        <input type='text' className='w-ful border-b-2 border-b-solid font-bold' value={digitNumber} onChange={e=>setDigitNumber(e.target.value)}/>
                                    </div>

                            <div className='flex items-end justify-end '>
                                <div className='group relative cursor-pointer' onClick={checkingDigitNumber}>
                                    <img src={circle_Arrow} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                    <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Next</div>
                                </div>
                            </div>
                            <div className="mt-20 cursor-pointer underline flex items-center justify-center">
                                <Link to={'/Login'}>
                                LOGIN
                                </Link>

                            </div>
                        </div>
                        )
                    }
                    <div className='flex-1'>
                        <div>
                            <img src={loginGirl} alt="loginGirl" className='absolute right-0 bottom-0 h-full object-contain' />
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 text-[150px] font-bold text-transparent [-webkit-text-stroke:3px_rgba(244,4,4,0.2)] overflow-hidden'>
                    MIKA PIKAZO
                </div>
            </div>
        </div>
    )
}