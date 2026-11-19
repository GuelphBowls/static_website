// CardContainer.tsx
import PictureCard from '@/components/Cards/PictureCard'
import TextCard from '@/components/Cards/TextCard'
import { type ICardContent } from '@/components/Cards/CardDataTypes'
import './CardContainer.scss'

interface Props {
	content: ICardContent[]
}

export default function CardContainer({ content }: Props) {
	return (
		<div className={'CardContainer'}>
			{content.map((datum) =>
				datum.image
					? <PictureCard key={datum.id} {...datum} />
					: <TextCard key={datum.id} {...datum} />
			)}
		</div>
	)
}