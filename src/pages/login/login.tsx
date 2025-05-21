import React, { useState } from 'react';
import loginGirl from '../../assets/images/login_mika_pic.png';
import passwordOpen from '../../assets/icons/password_open.png';
import passwordClose from '../../assets/icons/password_close.png';
import circle_Arrow from '../../assets/icons/circle_arrow.png';
import google from '../../assets/icons/twitterX.png';
import twitterX from '../../assets/icons/google.png';

export default function Login() {
    const [showPwd, setShowPwd] = useState(false)
    const [errUser, setErrUser] = useState(false)
    const [errPass, setErrPass] = useState(false)
    return (
        <div>
            <div className='flex h-screen overflow-hidden relative'>
                <div className="flex-1 bg-black text-white relative overflow-hidden">
                    <div className="w-100 text-8xl font-bold transform origin-bottom-left rotate-90 -mt-10  ml-10">
                        LOGIN
                    </div>
                </div>
                <div className='flex-8 flex h-screen overflow-hidden bg-[#CFFE48] relative '>
                    <div className='flex-1 m-auto px-10 z-20'>
                        <div className=" w-full py-5 flex flex-col">
                            <label className='text-lg text-[#91b233]'>ユーザー名</label>
                            <label className='text-lg text-[#F40404]'>{errUser? '※エラー！ユーザー名が見つかりません':null}</label>
                            <input type='text' className='w-ful border-b-2 border-b-solid font-bold' />
                        </div>
                        <div className=" w-full py-5 flex flex-col relative">
                            <label className='text-lg text-[#91b233]'>パスワード</label>
                            <label className='text-lg text-[#F40404]'>{errPass? '※エラー！パスワードが間違っています':null}</label>
                            <input type={showPwd ? 'text' : 'password'} className='w-full border-b-2 border-b-solid font-bold' />
                            <span className="">
                                <img src={showPwd ? passwordOpen : passwordClose} alt="toggle" className='object-contain absolute right-8 bottom-8 cursor-pointer' onClick={() => setShowPwd(!showPwd)} />
                            </span>
                        </div>
                        <div className='cursor-pointer'>
                            Forgot Password ?
                        </div>
                        <div className='flex items-end justify-end '>
                            <div className='group relative cursor-pointer'>
                                <img src={circle_Arrow} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Login</div>
                            </div>
                        </div>
                        <div className="mt-15 text-center">
                            OR SIGN UP USING
                        </div>
                        <div className='flex gap-5 items-center justify-center mt-5'>
                            <img src={google} className='object-contain bg-white' />
                            <img src={twitterX} className='object-contain bg-white' />
                        </div>
                        <div className="mt-20 cursor-pointer underline flex items-center justify-center">
                            REGISTER
                        </div>
                    </div>
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