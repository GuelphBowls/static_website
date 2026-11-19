import type { ICardContent } from '@/components/Cards/CardDataTypes'
import '@/components/Cards/Cards.scss'
import './TextCard.scss'

export default function TextCard({ title, content, color }: ICardContent) {
	const className = `Card Card--${color}`

	return (
		<div className={className}>
			<div className="layout--vbox">
				<p className="Card__title">{title}</p>
				{content && (<div className="Card__content">{content}</div>)}
			</div>
		</div>
	)
}