// filename: components/Header/TopNavItem/TopNavItem.tsx
import { useContext } from 'react'
import type { MenuData } from '@/config/menu'
import { TopNavContext } from '@/components/Header/TopNav/TopNavContext'
import TopNavContents from '@/components/Header/TopNavContents/TopNavContents'
import LinkIcon from '@/components/LinkIcon'
import './TopNavItem.scss'

type Props = {
	label: string;
	href?: string;
	contents?: MenuData[];
};

export default function TopNavItem({ label, href, contents = [] }: Props) {
	const topNav = useContext(TopNavContext)
	const open = topNav?.activeMenu === label

	if (contents.length === 0) {
		return <a className="TopNavItem" href={href}>{label}<LinkIcon/></a>
	}

	return (
		<div className="MenuList">
			<button type="button" className="TopNavItem" aria-expanded={open} onClick={() => topNav?.toggleMenu(label)}>
				{label}<span className={open ? 'chevron open' : 'chevron'} aria-hidden="true">▴</span>
			</button>
			<TopNavContents contents={contents} open={open} />
		</div>
	)
}