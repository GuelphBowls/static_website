// filename: pages/WeeklyEvents/WeeklyEvents.tsx
import { Card, CardTitle, CardContent, CardContainer } from '@/components/Cards'

export default function WeeklyEvents() {
	return (
		<CardContainer>
			<Card color="blue">
				<CardTitle styles="bold large">Monday</CardTitle>
				<CardTitle styles="bold">New Bowlers Friendly</CardTitle>
				<CardTitle>7:00pm - 10:00pm</CardTitle>
				<CardContent styles="left">
					<p>Start your week with a relaxed game! Join us every Monday evening for our Friendly Social Bowl — perfect for new bowlers. No experience needed, and if you're new, your first session is free. Come meet the community and try something new on the green!</p>
				</CardContent>
			</Card>
			<Card color="yellow">
				<CardTitle styles="bold large">Tuesday</CardTitle>
				<CardTitle styles="bold">4321 Social Bowl - $2</CardTitle>
				<CardTitle>7:00pm - 10:00pm</CardTitle>
				<CardContent styles="left">
					<p>Test your skills in a fast-paced game of 4321! Join us Tuesday nights for light competition and community fun. Just $2 to play—open to all skill levels. Come solo or bring a friend!</p>
					<br />
					<p>Matches arranged according to attendance.</p>
				</CardContent>
			</Card>
			<Card color="green">
				<CardTitle styles="bold large">Wednesday</CardTitle>
				<CardTitle styles="bold">Singles</CardTitle>
				<CardTitle>7:00pm - 10:00pm</CardTitle>
				<CardContent styles="left">
					<p>Come enjoy a friendly game of singles in a welcoming, social atmosphere. This night is all about fun, not competition. Great for bowlers who want to focus on their game at their own pace.</p>
					<br />
					<p><i>* The first Wednesday of each month the greens are closed for maintenance.</i></p>
				</CardContent>
			</Card>
			<Card color="pink">
				<CardTitle styles="bold large">Thursday</CardTitle>
				<CardTitle styles="bold">Motley - $2</CardTitle>
				<CardTitle>7:00pm - 10:00pm</CardTitle>
				<CardContent styles="left">
					<p>Join us for a relaxed evening of short-format lawn bowling! Each game is just 5 ends, keeping things quick and fun with rotating partners and opponents.</p>
					<p>Just $2 to play, and prizes every 4 weeks.</p>
					<br />
					<p>Format adjusts based on turnout—perfect for casual players looking for variety and a good time.</p>
				</CardContent>
			</Card>
			<Card color="orange">
				<CardTitle styles="bold large">Friday</CardTitle>
				<CardTitle styles="bold">Open Bowling &amp; Special Events</CardTitle>
				<CardTitle>Time varies based on event</CardTitle>
				<CardContent styles="left">
					<p>Drop by and bowl at your own pace! Our Open Bowling sessions are perfect for casual roll-ups or bringing friends to try the game.</p>
					<br />
					<p>Keep an eye out for Special Events—from theme nights to fun challenges—there's always something different happening on the green. All are welcome!</p>
				</CardContent>
			</Card>
			<Card color="purple">
				<CardTitle styles="bold large">Saturday</CardTitle>
				<CardTitle styles="bold">Open Bowling &amp; Tournaments</CardTitle>
				<CardTitle>Time varies based on event</CardTitle>
				<CardContent styles="left">
					<p>Whether you're in the mood for a relaxed roll-up or ready to test your skills, we've got you covered! Open Bowling lets you play at your own pace, while scheduled Tournaments offer a chance for friendly competition. Check the calendar for upcoming dates—everyone's welcome!</p>
				</CardContent>
			</Card>
			<Card color="teal">
				<CardTitle styles="bold large">Sunday</CardTitle>
				<CardTitle styles="bold">Youth Bowls</CardTitle>
				<CardTitle>3:30pm Start</CardTitle>
				<CardContent styles="left">
					<p style={{ textAlign: 'center' }}><b>Begins June 28th</b></p>
					<p>A fantastic opportunity for young players to get into lawn bowling! Our Youth Bowling sessions offer hands-on instruction from experienced coaches in a fun and supportive environment. Perfect for beginners—come learn the game and build skills while having a great time on the green!</p>
				</CardContent>
			</Card>
		</CardContainer>
	)
}