import type { ReactNode } from "react"

export type CardColor =
	| 'blue' | 'yellow' | 'green' | 'red'
	| 'purple' | 'orange' | 'teal' | 'pink'
	| 'white'

export interface ICardContent {
	id: string
	title: string
	color: CardColor
	content?: ReactNode
	image?: string
}
