import React, { useState } from 'react';
import loginGirl from '../../assets/images/login_mika_pic.png';
import passwordOpen from '../../assets/icons/password_open.png';
import passwordClose from '../../assets/icons/password_close.png';
import circle_Arrow from '../../assets/icons/circle_arrow.png';
import google from '../../assets/icons/twitterX.png';
import twitterX from '../../assets/icons/google.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from'axios';
import {setToken} from '../../utilize/'

export default function Login() {
    const [showPwd, setShowPwd] = useState(false)
    const [errUser, setErrUser] = useState(false)
    const [errPass, setErrPass] = useState(false)

    const [loginFailed,setLoginFailed]= useState(false);

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const [serverError,setServerError] = useState('')
    const navigate = useNavigate()

    const loginMethod = async()=>{
        let ok = true;
        if(!username){
            setErrUser(true)
            ok=false;
        }else{
            setErrUser(false)
        }

        if(!password){
            setErrPass(true)
            ok=false;
        } else{
            setErrPass(false)
        }

        if(!ok){
            return
        }

        try{
            const API_URL = import.meta.env.VITE_API_LOCALHOST || 'http://localhost:4000';
            const payload={
                username:username.trim(),
                password:password
            };

            const res= await axios.post(`${API_URL}/api/auth/login`,payload);

            const {token} = res.data;

            setToken('authToken',token)

            navigate('/')
        }catch (error: any) {
            setLoginFailed(true)
            // If backend sent a 4xx/5xx with { message: '...' }
            const msg = error.response?.data?.message || 'Kindly double check your username or password';
                setServerError(msg);
            }
    }
    return (
        <div className='relative'>
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
                        <div className='cursor-pointer'>
                            <Link to={`/Forgotpassword`}>
                            Forgot Password ?
                            </Link>
                        </div>
                        <div className='flex items-end justify-end '>
                            <div className='group relative cursor-pointer' onClick={loginMethod}>
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
                            <Link to={'/Register'}>
                            REGISTER
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
                {
                    loginFailed && (
                        <div className='overflow-hidden w-screen h-screen absolute top-0 left-0 z-20 inset-0 background-overlay-black flex'>
                            <div className='p-5 bg-[#f7f7f7] w-fit h-[20%] text-center m-auto items-center'>
                                <div className='my-2 font-bold text-[2.5rem] text-[#080403]'>Login Failed</div>
                                <div className='my-2'>Please try again later</div>
                                <div className="cursor-pointer" onClick={()=>setLoginFailed(false)}>Close</div>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}