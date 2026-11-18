// filename: pages/WeeklyEvents/WeeklyEvents.tsx
import EventCard from './EventCard'
import './WeeklyEvents.scss'
import { type EventData, events } from '@/config/events'

export default function WeeklyEvents() {
	return (
		<div className="WeeklyEvents">
			{events.map((event: EventData) => (
				<EventCard key={event.weekday} {...event} />
			))}
		</div>
	)
}