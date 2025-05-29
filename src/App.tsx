import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import News from './pages/news/news_list'
import NewsId from './pages/news/[newsId]'
import Art from './pages/exhibitions/exhibitions'
import ArtId from './pages/exhibitions/[exhibitionsid]'
import Shop from './pages/shop/shop'
import ShopId from './pages/shop/[shopid]'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
function App() {

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/News/:id" element={<NewsId/>}/>
        <Route path="/Art" element={<Art/>}/>
        <Route path="/Art/:id" element={<ArtId/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Shop/:id" element={<ShopId/>}/>
      </Routes>
    </ErrorBoundary>
  )
}

export default App
