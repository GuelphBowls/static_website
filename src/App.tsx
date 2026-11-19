// filename: App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import WeeklyEvents from '@/pages/WeeklyEvents'
import GroupEvents from './pages/GroupEvents'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function App() {
    return (
        <BrowserRouter>
            {/* Header and Footer are outside <Routes>, so they stay on screen on every page. */}
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/weekly" element={<WeeklyEvents />} />
                    <Route path="/groupEvents" element={<GroupEvents />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

