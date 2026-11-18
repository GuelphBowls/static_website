// filename: components/Header/MenuItem/MenuItem.tsx
import { useContext } from 'react'
import type { MenuData } from '@/config/menu'
import { TopNavContext } from '@/components/Header/TopNav/TopNavContext'
import MenuContents from '@/components/Header/MenuContents/MenuContents'
import LinkIcon from '@/components/LinkIcon'
import './MenuItem.scss'

type Props = {
	label: string;
	href?: string;
	contents?: MenuData[];
};

export default function MenuItem({ label, href, contents = [] }: Props) {
	const topNav = useContext(TopNavContext)
	const open = topNav?.activeMenu === label

	if (contents.length === 0) {
		return <a className="MenuItem" href={href}>{label}<LinkIcon/></a>
	}

	return (
		<div className="MenuList">
			<button type="button" className="MenuItem" aria-expanded={open} onClick={() => topNav?.toggleMenu(label)}>
				{label}<span className={open ? 'chevron open' : 'chevron'} aria-hidden="true">▴</span>
			</button>
			<MenuContents contents={contents} open={open} />
		</div>
	)
}