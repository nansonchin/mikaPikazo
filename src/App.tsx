import { StrictMode, useState } from 'react'
// import reactLogo from './assets/react.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home'
import News from './pages/news/news_list'
import NewsId from './pages/news/[newsId]'
import Art from './pages/exhibitions/exhibitions'
import ArtId from './pages/exhibitions/[exhibitionsid]'
import Shop from './pages/shop/shop'
import ShopId from './pages/shop/[shopid]'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
import Cart from './pages/cart/cart';
import OrderList from './pages/order/orderlist';
import Login from './pages/login/login';
import ForgotPassword from './pages/forgot_password/forgot_password';
import ResetPassword from './pages/forgot_password/reset_password';
import Register from './pages/register/register';

  const router=createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/News',element:<News/>},
    {path:'/News/:id',element:<NewsId/>},
    {path:'/Art',element:<Art/>},
    {path:'/Art/:id',element:<ArtId/>},
    {path:'/Shop',element:<Shop/>},
    {path:'/Shop/:id',element:<ShopId/>},
    {path:'/Cart',element:<Cart/>},
    {path:'/Shipping',element:<OrderList/>},
    {path:'/Login',element:<Login/>},
    {path:'/Forgotpassword',element:<ForgotPassword/>},
    {path:'/Resetpassword',element:<ResetPassword/>},
    {path:'/Register',element:<Register/>},
  ])
function App() {

  return (
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  )
}

export default App
