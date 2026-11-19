import type { ReactNode } from "react"

export type CardColor =
	| 'blue' | 'yellow' | 'green' | 'red'
	| 'purple' | 'orange' | 'teal' | 'pink'
	| 'white'

export interface BaseCardData {
	id: string
	title: string
	content: ReactNode
	color: CardColor
}

export interface PictureCardData extends BaseCardData {
	image: string
}

export interface TextCardData extends BaseCardData {
}

export type CardData = BaseCardData | PictureCardData | TextCardData

export const hasImage = (d: CardData): d is PictureCardData =>
	'image' in d && !!d.image