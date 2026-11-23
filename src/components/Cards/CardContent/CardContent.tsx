import type { ReactNode } from 'react';
import './CardContent.scss'
import { bem } from '../CardDataTypes';

type CardContentProps = {
	children?: ReactNode;
	styles?: string
}

export default function CardContent({styles, children}: CardContentProps) {
	
	const className = bem('CardContent', [styles])
	return <div className={className}>
		{children}
	</div>
}