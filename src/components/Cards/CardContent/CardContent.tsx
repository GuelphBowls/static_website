import type { ReactNode } from 'react';
import './CardContent.scss'

type CardContentProps = {
	children?: ReactNode;
}

export default function CardContent({children}: CardContentProps) {
	return <div className="CardContent">
		{children}
	</div>
}