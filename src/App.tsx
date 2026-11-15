import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import './App.css'
import Home from '@/pages/Home'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* Header and Footer are outside <Routes>, so they stay on screen on every page. */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

