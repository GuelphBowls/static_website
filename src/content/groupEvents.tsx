// src/content/groupEvents.tsx
import type { ICardContent } from '@/components/Cards/CardDataTypes'

export const content: ICardContent[] = [
	{
		id: 'group-fun',
		title: 'Group Fun at the Club',
		color: 'green',
		content: (
			<>
				<p>
					Consider group lawn bowling for your next corporate team-building event,
					birthday party, family reunion or social event. Lawn bowling is a fun,
					light impact sport enjoyed around the world by people from 5 to 105 years of age.
				</p>
				<p>All you need is a pair of flat-sole shoes. That’s it. It doesn’t get much easier than that.</p>
			</>
		),
	},
	{
		id: 'groups-receive',
		title: 'Groups Receive',
		color: 'blue',
		content: (
			<ul>
				<li>A lawn bowling lesson</li>
				<li>Bowls (balls) to use at the event. We have Junior Balls for young players and special equipment for those with reduced mobility</li>
				<li>Access to our club house for washrooms. Use of the clubhouse with kitchen and meeting space can be arranged</li>
				<li>Use of the facility for approximately two hours weekday afternoons or weekends. Groups of 16 people or more will have exclusive use</li>
			</ul>
		),
	},
	{
		id: 'setup',
		title: 'We Do the Set-Up',
		color: 'yellow',
		image: 'clubhouse.avif',
		content: <>We can accommodate groups of up to 40 people at our facility in the heart of Guelph (114 Gordon Street).</>,
	},
	{
		id: 'parking',
		title: 'Parking',
		color: 'white',
		content: <>Parking is usually available in the lot next to the lawn bowling club at no cost, but it does get busy. If the lot is full, there is street parking in the area.</>,
	},
	{
		id: 'weather',
		title: 'Weather',
		color: 'teal',
		content: <>Hopefully it will be blue skies when you bowl with us. If it rains, we’ll do our best to reschedule your event soon after the original date, however, we’re at the mercy of the weather and other events in our calendar.</>,
	},
	{
		id: 'charge',
		title: 'Charge',
		color: 'orange',
		content: (
			<>
				<p>We’re a not-for-profit club so your payment is genuinely appreciated.</p>
				<ul>
					<li>Non-members: $20 per person</li>
					<li>Families and friends of members: $15 per person</li>
					<li>Use of the clubhouse for functions has a separate cost</li>
				</ul>
			</>
		),
	},
	{
		id: 'food',
		title: 'Food & Drinks',
		color: 'red',
		content: <>You or your caterer are responsible for food, beverages, and clean up. The club house is not a licensed facility.</>,
	},
	{
		id: 'book',
		title: 'Book Your Group Event Today',
		color: 'purple',
		content: <>Do you have an event in mind? Our group event organizer is happy to help. Contact us through {/* TODO: rest of text cut off in screenshot */}</>,
	},
]