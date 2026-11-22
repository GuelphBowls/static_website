import type { ReactNode } from 'react';
import './CardTitle.scss';
import { bem } from '@/components/Cards/CardDataTypes';
import { useCardColor } from '../CardColorContext';

type CardTitleProps = {
	children?: ReactNode;
	styles?: string;
};

export default function CardTitle({ children, styles }: CardTitleProps) {	
	const className = bem('CardTitle', [useCardColor(), styles])
	return <div className={className}>{children}</div>;
}