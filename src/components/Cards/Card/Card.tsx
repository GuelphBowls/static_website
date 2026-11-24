// filename: components/Cards/Card/Card.tsx
import type { ReactNode } from 'react';
import {type CardColor } from '@/components/Cards/CardDataTypes';
import bem from '@/util/bem'
import { CardColorContext } from '@/components/Cards/CardColorContext'
import './Card.scss';

type CardProps = {
	color?: CardColor
	styles?: string
	children?: ReactNode;
};

export default function Card({ color = 'blue', styles, children }: CardProps) {
	const className = bem('Card', [color, styles])

	return (
		<CardColorContext value={color}>
			<div className={className}>
				<div className="Layout--vbox">
					{children}
				</div>
			</div>
		</CardColorContext>
	)
}