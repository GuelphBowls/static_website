// CardContainer.tsx
import PictureCard from '@/components/Cards/PictureCard'
import TextCard from '@/components/Cards/TextCard'
import { hasImage } from '@/components/Cards/CardDataTypes'
import type { CardData } from '@/components/Cards/CardDataTypes'
import './CardContainer.scss'

interface Props {
	data: CardData[]
}

export default function CardContainer({ data }: Props) {
	return (
		<div className={'CardContainer'}>
			{data.map((datum) =>
				hasImage(datum)
					? <PictureCard key={datum.id} {...datum} />
					: <TextCard key={datum.id} {...datum} />
			)}
		</div>
	)
}