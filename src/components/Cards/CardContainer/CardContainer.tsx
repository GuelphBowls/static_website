import type { ReactNode } from 'react';
import './CardContainer.scss'

type CardContainerProps = {
	children?: ReactNode;
};

export default function CardContainer({children}: CardContainerProps) {
	return <div className="CardContainer">{children}</div>
}