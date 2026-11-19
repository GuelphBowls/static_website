import '@/components/Cards/Cards.scss'
import {type ICardContent} from '@/components/Cards/CardDataTypes'

export default function PictureCard({ title, image, content, color }: ICardContent) {
	const className = `Card Card--${color}`
	const imgsrc = `/src/assets/${image}`

	return (
		<div className={className}>
			<div className="layout--hbox">
				<img className="Card__image" src={imgsrc}/>
				<div className="layout--vbox">
					<p className="Card__title">{title}</p>
					<div className="Card__content">{content}</div>
				</div>
			</div>
		</div>
	)
}