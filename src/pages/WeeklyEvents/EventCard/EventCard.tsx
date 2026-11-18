// filename: pages/WeeklyEvents/EventCard/EventCard.tsx
// components/EventCard/EventCard.tsx
import type { ReactNode } from 'react'
import './EventCard.scss'

type Props = {
	color: string;
	weekday: string;
	title: string;
	time: string;
	description: ReactNode;
};

export default function EventCard({ color, weekday, title, time, description }: Props) {
	const className = `EventCard EventCard--${color}`

	return (
		<div className={className}>
			<h2 className="EventCard-weekday">{weekday}</h2>
			<h3 className="EventCard-title">{title}</h3>
			<p className="EventCard-time">{time}</p>
			<div className="EventCard-description">{description}</div>
		</div>
	)
}