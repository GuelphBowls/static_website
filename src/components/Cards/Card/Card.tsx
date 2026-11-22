import type { ReactNode } from 'react';
import './Card.scss';
import { bem, type CardColor } from '@/components/Cards/CardDataTypes';
import { CardColorContext } from '@/components/Cards/CardColorContext'

type CardProps = {
	children?: ReactNode;
	color?: CardColor
};

export default function Card({ color = 'blue', children }: CardProps) {
	const className = bem('Card', [color])

	return (
		<CardColorContext value={color}>
			<div className={className}>
				<div className="layout--vbox">
					{children}
				</div>
			</div>
		</CardColorContext>
	)
}