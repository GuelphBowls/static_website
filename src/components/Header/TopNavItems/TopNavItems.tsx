// filename: components/Header/TopNavItems/TopNavItems.tsx
import TopNavItem from '@/components/Header/TopNavItem'
import type { MenuData } from '@/config/menu'
import './TopNavItems.scss'

interface TopNavItemsProps {
	isOpen: boolean;
	menuData: MenuData[];
}

export default function TopNavItems({ isOpen, menuData }: TopNavItemsProps) {
	const itemsClassName = `TopNav__items ${isOpen ? "TopNav__items--open" : ""}`

	return (
		<div id="topnav-items" className={itemsClassName}>
			{menuData.map(item => (
				<TopNavItem key={item.label} label={item.label} href={item.href} contents={item.contents} disabled={item.disabled} />
			))}
		</div>
	)
}