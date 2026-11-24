// filename: components/Cards/CardContent/CardContent.tsx
import type { ReactNode } from 'react';
import './CardContent.scss'
import  bem from '@/util/bem';

type CardContentProps = {
	styles?: string
	children?: ReactNode;
}

export default function CardContent({styles, children}: CardContentProps) {
	
	const className = bem('CardContent', [styles])
	return <div className={className}>
		{children}
	</div>
}