// filename: components/Header/TopNavItem/TopNavItem.tsx
import { useContext } from 'react'
import type { MenuData } from '@/config/menu'
import { TopNavContext } from '@/components/Header/TopNav/TopNavContext'
import TopNavContents from '@/components/Header/TopNavContents'
import './TopNavItem.scss'

export default function TopNavItem({ label, href, contents = [], disabled = false }: MenuData) {
	const topNav = useContext(TopNavContext)
	const open = !disabled && topNav?.activeMenu === label

	if (contents.length === 0) {
		return (
			<a
				className="TopNavItem"
				href={disabled ? undefined : href}
				aria-disabled={disabled || undefined}
			>
				{label}
			</a>
		)
	}

	return (
		<div className="MenuList">
			<button
				type="button"
				className="TopNavItem"
				disabled={disabled}
				aria-expanded={open}
				onClick={() => topNav?.toggleMenu(label)}
			>
				{label}<span className={open ? 'chevron open' : 'chevron'} aria-hidden="true">▴</span>
			</button>
			<TopNavContents contents={contents} open={open} />
		</div>
	)
}