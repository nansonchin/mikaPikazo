import React, { useEffect, useState } from 'react';
import loginGirl from '../../assets/images/login_mika_pic.png';
import circle_Arrow from '../../assets/icons/circle_arrow.png';
import passwordOpen from '../../assets/icons/password_open.png';
import passwordClose from '../../assets/icons/password_close.png';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const [errResetPass, setErrResetPass] = useState(false)
    const [errReset2Pass, setErrReset2Pass] = useState(false)
    const [showReset2Pass, setShowReset2Pass] = useState(false)
    const [showResetPass, setShowResetPass] = useState(false)
    const [resetSuccess, setResetSuccess] = useState(false)
    const [pass, setPass]=useState('')
    const [confirm,setConfirm] = useState('')
    const [counter,setCounter]= useState(3)
    const navigate= useNavigate()

    useEffect(()=>{
        let timer: number | undefined;
       if(resetSuccess){
        timer = window.setInterval(()=>{
            setCounter(c=>{
                if(c<=1){
                    clearInterval(timer);
                    navigate('/Login');
                    return 0
                }
                return c-1
            })
        },1000)
       }
          return ()=>clearInterval(timer)
    },[resetSuccess,navigate])

    const handleSubmit = ()=>{
        let ok = true;
        if(!pass){
            setErrResetPass(true);
            ok=false;
        }else{
            setErrResetPass(false)
        }
        if(confirm!== pass || !confirm){
            setErrReset2Pass(true)
            ok=false
        }else{
            setErrReset2Pass(false)
        }
        if(ok){
            setResetSuccess(true)
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

                    <div className='flex-1 m-auto px-10 z-20'>
                        <div className='font-bold text-5xl text-black'>
                            成功を確認する
                        </div>
                        <div className="text-lg text-black my-3">
                            {resetSuccess ? `${counter.toString()}秒後にホームページに戻ります` : '新しいパスワードを再度入力してください'}
                        </div>
                        {resetSuccess ? '' :
                            (
                                <>
                                    <div className=" w-full py-5 flex flex-col relative">
                                        <label className='text-lg text-[#91b233]'>パスワード</label>
                                        <label className='text-lg text-[#F40404]'>{errResetPass ? '※エラー！パスワードが間違っています' : null}</label>
                                        <input value={pass} onChange={e=>setPass(e.target.value)} type={showResetPass ? 'text' : 'password'} className='w-full border-b-2 border-b-solid font-bold' />
                                        <span className="">
                                            <img src={showResetPass ? passwordOpen : passwordClose} alt="toggle" className='object-contain absolute right-8 bottom-8 cursor-pointer' onClick={() => setShowResetPass(!showResetPass)} />
                                        </span>
                                    </div>
                                    <div className=" w-full py-5 flex flex-col relative">
                                        <label className='text-lg text-[#91b233]'>パスワードを認証する</label>
                                        <label className='text-lg text-[#F40404]'>{errReset2Pass ? '※エラー！パスワードが間違っています' : null}</label>
                                        <input value={confirm} onChange={e=>setConfirm(e.target.value)}type={showReset2Pass ? 'text' : 'password'} className='w-full border-b-2 border-b-solid font-bold' />
                                        <span className="">
                                            <img src={showReset2Pass ? passwordOpen : passwordClose} alt="toggle" className='object-contain absolute right-8 bottom-8 cursor-pointer' onClick={() => setShowReset2Pass(!showReset2Pass)} />
                                        </span>
                                    </div>
                                    <div className='flex items-end justify-end '>
                                        <div className='group relative cursor-pointer' onClick={handleSubmit}>
                                            <img src={circle_Arrow} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                            <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Next</div>
                                        </div>
                                    </div>
                                    <div className="mt-20 cursor-pointer underline flex items-center justify-center">
                                        LOGIN
                                    </div>
                                </>
                            )
                        }
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