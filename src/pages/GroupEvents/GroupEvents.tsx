// src/content/groupEvents.tsx
import { Card, CardTitle, CardContent, CardContainer } from '@/components/Cards'
import clubhouse from '@/assets/clubhouse.avif'

export default function GroupEvents() {
	return (
		<CardContainer>
			<Card color="green">
				<CardTitle styles="bold large">Group Fun at the Club</CardTitle>
				<CardContent>
					<p>
						Consider group lawn bowling for your next corporate team-building event,
						birthday party, family reunion or social event. Lawn bowling is a fun,
						light impact sport enjoyed around the world by people from 5 to 105 years of age.
					</p>
					<p>All you need is a pair of flat-sole shoes. That’s it. It doesn’t get much easier than that.</p>
				</CardContent>
			</Card>
			<Card color="blue">
				<CardTitle styles="bold large">Groups Receive</CardTitle>
				<CardContent>
					<ul>
						<li>A lawn bowling lesson</li>
						<li>Bowls (balls) to use at the event. We have Junior Balls for young players and special equipment for those with reduced mobility</li>
						<li>Access to our club house for washrooms. Use of the clubhouse with kitchen and meeting space can be arranged</li>
						<li>Use of the facility for approximately two hours weekday afternoons or weekends. Groups of 16 people or more will have exclusive use</li>
					</ul>
				</CardContent>
			</Card>
			<Card color="yellow">
				<CardTitle styles="bold large">We Do the Set-Up</CardTitle>
				<CardContent>
					<img src={clubhouse} alt="Guelph Lawn Bowling Club clubhouse" />
					<p>We can accommodate groups of up to 40 people at our facility in the heart of Guelph (114 Gordon Street).</p>
				</CardContent>
			</Card>
			<Card color="white">
				<CardTitle styles="bold large">Parking</CardTitle>
				<CardContent>
					Parking is usually available in the lot next to the lawn bowling club at no cost, but it does get busy. If the lot is full, there is street parking in the area.
				</CardContent>
			</Card>
			<Card color="teal">
				<CardTitle styles="bold large">Weather</CardTitle>
				<CardContent>
					Hopefully it will be blue skies when you bowl with us. If it rains, we’ll do our best to reschedule your event soon after the original date, however, we’re at the mercy of the weather and other events in our calendar.
				</CardContent>
			</Card>
			<Card color="orange">
				<CardTitle styles="bold large">Charge</CardTitle>
				<CardContent>
					<p>We’re a not-for-profit club so your payment is genuinely appreciated.</p>
					<ul>
						<li>Non-members: $20 per person</li>
						<li>Families and friends of members: $15 per person</li>
						<li>Use of the clubhouse for functions has a separate cost</li>
					</ul>
				</CardContent>
			</Card>
			<Card color="red">
				<CardTitle styles="bold large">Food & Drinks</CardTitle>
				<CardContent>
					You or your caterer are responsible for food, beverages, and clean up. The club house is not a licensed facility.
				</CardContent>
			</Card>
			<Card color="purple">
				<CardTitle styles="bold large">Book Your Group Event Today</CardTitle>
				<CardContent>
					{/* TODO: rest of text cut off in screenshot */}
					Do you have an event in mind? Our group event organizer is happy to help. Contact us through
				</CardContent>
			</Card>
		</CardContainer>
	)
}