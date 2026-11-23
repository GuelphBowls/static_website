// src/content/groupEvents.tsx
import { Card, CardTitle, CardContent, CardContainer } from '@/components/Cards'
import '@/components/Cards/UserStyles.scss'

export default function GroupEvents() {
	return (
		<CardContainer>
			<Card color="blue">
				<CardTitle styles="bold large">Thanks for Supporting the Guelph Lawn Bowling Club</CardTitle>
				<CardContent styles="center">
					<Card color="white">
						<CardContent styles="center">
							<h2>2026 Sponsors</h2>
							<ul className='Align-left'>
								<li className='Align-left'>Brothers Brewing</li>
								<li>Royal City Brewery</li>
								<li>Wellington Brewery</li>
								<li>Kawartha Dairy</li>
								<li>Schlegel Villages</li>
							</ul>
						</CardContent>
					</Card>
				</CardContent>
			</Card>
			<Card color="yellow">
				<CardTitle styles="bold large">Helping Us Helps You</CardTitle>
				<CardContent styles="left">
					<p>
						Donate to the Guelph Lawn Bowling Club and receive a receipt you can use as a business expense. Become a major sponsor and have a tournament named after you or your business.
					</p>
					<br />
					<p>
						The Guelph Lawn Bowling Club is a not-for-profit organization offering Guelph a recreational activity that can be enjoyed by a diverse group of residents. This recreational sport club exists thanks to its volunteers, member fees, the City of Guelph, and local business donations.
					</p>
				</CardContent>
			</Card>
			<Card color="green">
				<CardTitle styles="bold large">Become a Sponsor</CardTitle>
				<CardContent styles="left">
					<p>
						We have affordable sponsorship categories that give you local publicity. Show your community spirit. Since 1838 we’ve been a part of our community. Sponsorship helps us to continue providing a sport enjoyed by all ages and abilities. Please support local lawn bowling.
					</p>
					<br />
					<a href="https://www.guelphlawnbowling.com/contact">
						Contact us for more information.
					</a>
				</CardContent>
			</Card>
		</CardContainer>
	)
}