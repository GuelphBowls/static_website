import './TopNav.scss'
import { useState } from 'react'
import { menu } from '@/config/menu'
import MenuItem from '@/components/Header/MenuItem'
import MenuList from '@/components/Header/MenuList'

export default function TopNav() {
	const [activeMenu, setActiveMenu] = useState<string | null>(null)

	return (
		<nav className="TopNav">
			{menu.map(item => (
				item.href ? (
					<MenuItem key={item.label} label={item.label} href={item.href} />
				) : (
					<MenuList
						key={item.label}
						label={item.label}
						menuItems={item.children ?? []}
						open={activeMenu === item.label}
						onToggle={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
					/>
				)
			))}
		</nav>
	)
}