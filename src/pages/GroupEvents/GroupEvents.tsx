// src/content/groupEvents.tsx
import { Card, CardTitle, CardContent, CardContainer } from '@/components/Cards'
import '@/components/Cards/UserStyles.scss'

export default function GroupEvents() {
	return (
		<CardContainer>
			<Card color="none">
				<CardTitle styles="bold large">Helping Us Helps You</CardTitle>
				<CardContent>
					<div className="content--left">
						<p>
							Donate to the Guelph Lawn Bowling Club and receive a receipt you can use as a business expense. Become a major sponsor and have a tournament named after you or your business.
						</p>
						<br />
						<p>
							The Guelph Lawn Bowling Club is a not-for-profit organization offering Guelph a recreational activity that can be enjoyed by a diverse group of residents. This recreational sport club exists thanks to its volunteers, member fees, the City of Guelph, and local business donations.
						</p>
					</div>
				</CardContent>
			</Card>
			<Card color="none">
				<CardTitle styles="bold large">Become a Sponsor</CardTitle>
				<CardContent>
					<div className="content--left">
						<p>
							We have affordable sponsorship categories that give you local publicity. Show your community spirit. Since 1838 we’ve been a part of our community. Sponsorship helps us to continue providing a sport enjoyed by all ages and abilities. Please support local lawn bowling.
						</p>
						<br />
						<a href="https://www.guelphlawnbowling.com/contact">
							Contact us for more information.
						</a>
					</div>
				</CardContent>
			</Card>
			<Card color="blue">
				<CardTitle styles="bold large">Thanks for Supporting the Guelph Lawn Bowling Club</CardTitle>
				<CardContent>
					<div className="content--left">
						<h2>2026 Sponsors</h2>
						<ul>
							<li>Brothers Brewing</li>
							<li>Royal City Brewery</li>
							<li>Wellington Brewery</li>
							<li>Kawartha Dairy</li>
							<li>Schlegel Villages</li>
						</ul>
					</div>
				</CardContent>
			</Card>
		</CardContainer>
	)
}