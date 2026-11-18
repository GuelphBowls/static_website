// filename: components/Header/TopNav/TopNav.tsx
import './TopNav.scss'
import { useState } from 'react'
import { menu } from '@/config/menu'
import toggle from '@/util/toggle'
import { TopNavContext } from './TopNavContext'
import TopNavItems from '../TopNavItems'
import HamburgerButton from '../Hamburger'
import Logo from '../Logo'

export default function TopNav() {
	const [activeMenu, setActiveMenu] = useState<string | null>(null)
	const [mobileOpen, setMobileOpen] = useState(false)

	// Open the given menu, or close it if it's already open
	const toggleMenu = (label: string) => setActiveMenu(prev => prev === label ? null : label)
	const contextState = { activeMenu, toggleMenu }

	return (
		<TopNavContext value={contextState}>
			<nav className="TopNav">
				<HamburgerButton isOpen={mobileOpen} onClick={() => setMobileOpen(toggle)} controls="topnav-items" />
				<Logo />					
				<div className="TopNav__vbox">
					<div className="TopNav__title">Guelph Lawn Bowling Club</div>
					<TopNavItems isOpen={mobileOpen} menuData={menu} />					
				</div>
			</nav>
		</TopNavContext>
	)
}

