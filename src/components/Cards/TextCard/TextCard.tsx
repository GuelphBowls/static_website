import type { ReactNode } from 'react'
import '@/components/Cards/Cards.scss'
import './TextCard.scss'

type Props = {
	title: string;
	content: ReactNode;
	color?: string;
};

export default function TextCard({ title, content, color }: Props) {
	const className = `Card Card--${color}`

	return (
		<div className={className}>
			<div className="layout--vbox">
				<p className="Card__title">{title}</p>
				<div className="Card__content">{content}</div>
			</div>
		</div>
	)
}