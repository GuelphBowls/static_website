// filename: pages/WeeklyEvents/WeeklyEvents.tsx
import EventCard from './EventCard'
import './WeeklyEvents.scss'
import { type EventData, content } from '@/content/events'

export default function WeeklyEvents() {
	return (
		<div className="WeeklyEvents">
			{content.map((event: EventData) => (
				<EventCard key={event.weekday} {...event} />
			))}
		</div>
	)
}