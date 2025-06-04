import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loginGirl from '../../assets/images/login_mika_pic.png';
import passwordOpen from '../../assets/icons/password_open.png';
import passwordClose from '../../assets/icons/password_close.png';
import circle_Arrow from '../../assets/icons/circle_arrow.png';
import google from '../../assets/icons/twitterX.png';
import twitterX from '../../assets/icons/google.png';
import { Link, useNavigate } from 'react-router-dom';
import {setToken} from '../../utilize';
export default function Register() {
    const [showPwd, setShowPwd] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const [errUser, setErrUser] = useState(false)
    const [errPass, setErrPass] = useState(false)
    const [errConfirm, setErrConfirm] = useState(false)
    const [errMail, setErrMail] = useState(false)
    
    const [showDigit,setShowDigit] = useState(false)
    const [errDigit,setErrDigit] = useState(false)

    const [resend,setResend] = useState(false)

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
    const [email,setEmail] = useState('')

    const [digit,setDigit] = useState('')

    const [successDigit, setSuccessDigit] = useState(false)
    const [counter,setCounter] = useState(3)
    const [resendCounter,setResendCounter] = useState(60)
    const [serverError,setServerError]= useState('');
    
    const navigate = useNavigate()

    const registerMethod = async()=>{
        let ok = true;
        setServerError('')

        if(!username.trim()){
            setErrUser(true);
            ok=false;
        }else{
            setErrUser(false)
        }

        if(!password){
            setErrPass(true)
            ok = false;
        }else{
            setErrPass(false);
        }

        if(!confirm){
            setErrConfirm(true);
            ok=false;
        }else{
            setErrConfirm(false)
        }

        if(password && confirm && password !==confirm){
            setErrConfirm(true);
            ok=false;
        }

        if(!email.trim()){
            setErrMail(true)
            ok = false;
        }else{
            setErrMail(false)
        }

        if(!ok){
            return;
        }

        try{   
            const API_URL=import.meta.env.VITE_API_LOCALHOST || 'http://localhost:4000'
            const payload={
                username:username.trim(),
                email:email.trim(),
                password:password,
                password2:confirm
            }

            const res= await axios.post(`${API_URL}/api/auth/register`,payload)

            const {token}= res.data;
            setToken('authToken',token)
            navigate('/');
        }catch(error:any){
            const msg= error.repsonse?.data?.message || ' Registration Failed';
            setServerError(msg)
        }
    }

    const checkingDigitNumber= ()=>{
        if(!digit.trim()){
            setErrDigit(true)
        }else{
           setSuccessDigit(true)
        }
    }

    useEffect(()=>{
    let timer: number | undefined;
       if(successDigit){
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
    },[successDigit,navigate])

    useEffect(()=>{
        let resendTimer:number | undefined;
        if(resend){
            resendTimer = window.setInterval(()=>{
                setResendCounter(c=>{
                    if(c<=1){
                        clearInterval(resendTimer)
                        setResend(false)
                        return 0;
                    }
                    return c-1;
                })
            },1000)
        }
        return ()=>{
            if(resendTimer){
                clearInterval(resendTimer)
            }
        }
    },[resend])

    const resendMethod=()=>{
        if(resendCounter>0) return;
        setResendCounter(60)
        setResend(true);
    }
    return (
        <div>
            <div className='flex h-screen overflow-hidden relative'>
                <div className="flex-1 bg-black text-white relative overflow-hidden">
                    <div className="w-100 text-8xl font-bold transform origin-bottom-left rotate-90 -mt-10  ml-10">
                        REGISTER
                    </div>
                </div>
                <div className='flex-8 flex h-screen overflow-hidden bg-[#CFFE48] relative '>
                    <div className='flex-1 m-auto px-10 z-20'>
                        {
                            !showDigit && (
                                <div>
                                            <div className=" w-full py-5 flex flex-col">
                                    <label className='text-lg text-[#91b233]'>ユーザー名</label>
                                    <label className='text-lg text-[#F40404]'>{errUser? '※エラー！ユーザー名が見つかりません':null}</label>
                                    <input value={username} onChange={e=>setUsername(e.target.value)} type='text' className='w-ful border-b-2 border-b-solid font-bold' />
                                </div>
                                <div className=" w-full py-5 flex flex-col relative">
                                    <label className='text-lg text-[#91b233]'>パスワード</label>
                                    <label className='text-lg text-[#F40404]'>{errPass? '※エラー！パスワードが間違っています':null}</label>
                                    <input value={password} onChange={e=>{setPassword(e.target.value)}} type={showPwd ? 'text' : 'password'} className='w-full border-b-2 border-b-solid font-bold' />
                                    <span className="">
                                        <img src={showPwd ? passwordOpen : passwordClose} alt="toggle" className='object-contain absolute right-8 bottom-8 cursor-pointer' onClick={() => setShowPwd(!showPwd)} />
                                    </span>
                                </div>
                                <div className=" w-full py-5 flex flex-col relative">
                                    <label className='text-lg text-[#91b233]'>パスワードを認証する</label>
                                    <label className='text-lg text-[#F40404]'>{errConfirm? '※エラー！パスワードが間違っています':null}</label>
                                    <input value={confirm} onChange={e=>{setConfirm(e.target.value)}} type={showConfirm ? 'text' : 'password'} className='w-full border-b-2 border-b-solid font-bold' />
                                    <span className="">
                                        <img src={showConfirm ? passwordOpen : passwordClose} alt="toggle" className='object-contain absolute right-8 bottom-8 cursor-pointer' onClick={() => setShowConfirm(!showConfirm)} />
                                    </span>
                                </div>
                                <div className=" w-full py-5 flex flex-col relative">
                                    <label className='text-lg text-[#91b233]'>メール</label>
                                    <label className='text-lg text-[#F40404]'>{errMail? '※エラー！パスワードが間違っています':null}</label>
                                    <input value={email} onChange={e=>{setEmail(e.target.value)}} type='text' className='w-full border-b-2 border-b-solid font-bold' />
                            
                                </div>
                            
                                <div className='flex items-end justify-end '>
                                    <div className='group relative cursor-pointer' onClick={registerMethod}>
                                        <img src={circle_Arrow} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                        <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Register</div>
                                    </div>
                                </div>
                                </div>
                            )
                        }
                        {
                            showDigit && !successDigit && (
                                <div className='flex-1 m-auto px-10 z-20'>
                                    <div className='font-bold text-5xl text-black'>
                                            メールアドレスを確認する
                                    </div>
                                
                                            <div className=" w-full py-5 flex flex-col">
                                                <label className='text-lg text-[#91b233]'>メールでお送りした6桁のコードを入力してください</label>
                                                <label className='text-lg text-[#F40404]'>{errDigit? '※確認エラー！正しいコードを入力してください':null}</label>
                                                <input type='text' className='w-ful border-b-2 border-b-solid font-bold' value={digit} onChange={e=>setDigit(e.target.value)}/>
                                                <label className='text-lg text-[#080403] underline cursor-pointer text-right' onClick={resendMethod}>再送信 {resend && `${resendCounter.toString()}` }</label>
                                            </div>

                                    <div className='flex items-end justify-end '>
                                        <div className='group relative cursor-pointer' onClick={checkingDigitNumber}>
                                            <img src={circle_Arrow} className='object-contain mt-5 transform transition-transform group-hover:-translate-y-2' />
                                            <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100'>Next</div>
                                        </div>
                                    </div>
                                   
                                </div>
                            )
                        }{
                            successDigit && (
                                <div>
                                    <div className='font-bold text-5xl text-black'>
                                        成功を確認する
                                    </div>
                                    <div className="text-lg text-black my-3">
                                        {counter.toString()}秒後にホームページに戻ります  
                                    </div>
                                </div>
                            )
                        }
                        <div className="mt-20 cursor-pointer underline flex items-center justify-center">
                            <Link to={'/Login'}>
                                LOGIN
                            </Link>
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
