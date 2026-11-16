import MenuItem from '@/components/Header/MenuItem'
import type { MenuData } from '@/config/menu'
import './MenuList.scss'

type Props = {
	label: string;
	menuItems: MenuData[];
	open: boolean;
	onToggle: () => void;
};

export default function MenuList({ label, menuItems, open, onToggle }: Props) {
	return (
		<div className="MenuList">
			<div className="MenuList-label" onClick={onToggle}>
				{label}<span className={open ? 'chevron open' : 'chevron'}>▴</span>
			</div>

			<div className={open ? 'MenuList-contents open' : 'MenuList-contents'}>
				{menuItems.map(item =>
					item.href && (
						<MenuItem key={item.label} label={item.label} href={item.href} />
					)
				)}
			</div>
		</div>
	)
}