// filename: components/Header/TopNavContents/TopNavContents.tsx
import TopNavItem from '@/components/Header/TopNavItem'
import type { MenuData } from '@/config/menu'
import './TopNavContents.scss'

type TopNavContentsProps = {
	contents: MenuData[];
	open: boolean;
};

export default function TopNavContents({ contents, open }: TopNavContentsProps) {
	return (
		<div className={open ? 'TopNavContents open' : 'TopNavContents'}>
			{contents.map(item => (
				<TopNavItem key={item.label} label={item.label} href={item.href} contents={item.contents} disabled={item.disabled} />
			))}
		</div>
	)
}