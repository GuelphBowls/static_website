// filename: config/events.tsx
// src/config/events.tsx
import type { ReactNode } from 'react'

export type EventData = {
	color: string;
	weekday: string;
	title: string;
	time: string;
	description: ReactNode;
};

export const events: EventData[] = [
	{
		color: 'blue',
		weekday: 'Monday',
		title: 'New Bowlers Friendly',
		time: '7:00pm - 10:00pm',
		description: <>
			<p>Start your week with a relaxed game! Join us every Monday evening for our Friendly Social Bowl — perfect for new bowlers. No experience needed, and if you're new, your first session is free. Come meet the community and try something new on the green!</p>
		</>,
	},
	{
		color: 'yellow',
		weekday: 'Tuesday',
		title: '4321 Social Bowl - $2',
		time: '7:00pm - 10:00pm',
		description: <>
			<p>Test your skills in a fast-paced game of 4321! Join us Tuesday nights for light competition and community fun. Just $2 to play—open to all skill levels. Come solo or bring a friend!</p>
			<br />
			<p>Matches arranged according to attendance.</p>
		</>,
	},
	{
		color: 'green',
		weekday: 'Wednesday',
		title: 'Singles',
		time: '7:00pm - 10:00pm',
		description: <>
			<p>Come enjoy a friendly game of singles in a welcoming, social atmosphere. This night is all about fun, not competition. Great for bowlers who want to focus on their game at their own pace.</p>
			<br />
			<p><i>* The first Wednesday of each month the greens are closed for maintenance.</i></p>
		</>,
	},
	{
		color: 'pink',
		weekday: 'Thursday',
		title: 'Motley - $2',
		time: '7:00pm - 10:00pm',
		description: <>
			<p>Join us for a relaxed evening of short-format lawn bowling! Each game is just 5 ends, keeping things quick and fun with rotating partners and opponents.</p>
			<p>Just $2 to play, and prizes every 4 weeks.</p>
			<br />
			<p>Format adjusts based on turnout—perfect for casual players looking for variety and a good time.</p>
		</>,
	},
	{
		color: 'orange',
		weekday: 'Friday',
		title: 'Open Bowling & Special Events',
		time: 'Time varies based on event',
		description: <>
			<p>Drop by and bowl at your own pace! Our Open Bowling sessions are perfect for casual roll-ups or bringing friends to try the game.</p>
			<br />
			<p>Keep an eye out for Special Events—from theme nights to fun challenges—there's always something different happening on the green. All are welcome!</p>
		</>,
	},
	{
		color: 'purple',
		weekday: 'Saturday',
		title: 'Open Bowling & Tournaments',
		time: 'Time varies based on event',
		description: <>
			<p>Whether you're in the mood for a relaxed roll-up or ready to test your skills, we've got you covered! Open Bowling lets you play at your own pace, while scheduled Tournaments offer a chance for friendly competition. Check the calendar for upcoming dates—everyone's welcome!</p>
		</>,
	},
	{
		color: 'teal',
		weekday: 'Sunday',
		title: 'Youth Bowls',
		time: '3:30pm Start',
		description: <>
			<p style={{ textAlign: 'center' }}><b>Begins June 28th</b></p>
			<p>A fantastic opportunity for young players to get into lawn bowling! Our Youth Bowling sessions offer hands-on instruction from experienced coaches in a fun and supportive environment. Perfect for beginners—come learn the game and build skills while having a great time on the green!</p>
		</>,
	},
]