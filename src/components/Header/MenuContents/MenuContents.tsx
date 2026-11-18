// filename: components/Header/MenuContents/MenuContents.tsx
import MenuItem from '@/components/Header/MenuItem'
import type { MenuData } from '@/config/menu'
import './MenuContents.scss'

type MenuContentsProps = {
	contents: MenuData[];
	open: boolean;
};

export default function MenuContents({ contents, open }: MenuContentsProps) {
	return (
		<div className={open ? 'MenuContents open' : 'MenuContents'}>
			{contents.map(item => (
				<MenuItem key={item.label} label={item.label} href={item.href} contents={item.children} />
			))}
		</div>
	)
}