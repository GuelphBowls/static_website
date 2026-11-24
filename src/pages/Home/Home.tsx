// filename: pages/Home/Home.tsx
// src/pages/Home/Home.tsx
import bowls from '@/assets/bowls.avif'
import { Card, CardTitle, CardContent, CardContainer } from '@/components/Cards'

export default function Home() {
	return (
		<div className="Home">
			<CardContainer>
				<Card color="blue">
					<CardTitle styles='bold large'>Welcome to the Guelph Lawn Bowling Club!</CardTitle>
					<CardContent styles="left">
						We’re 188 years young and going strong! The Guelph Lawn Bowling Club was established in 1838 and new members are always welcome to join the fun in the heart of the Royal City. We’re the second oldest recreational sport club in Guelph (curling is the oldest).
						<br /><br />
						<a href="https://www.cbc.ca/news/canada/kitchener-waterloo/guelph-lawn-bowling-club-lawn-bowling-beginner-1.6919931">
							Check out an article about our club from the CBC
						</a>
					</CardContent>
				</Card>
				<Card color="green">
					<CardTitle styles='bold large'>We reopen May 2027!</CardTitle>
					<CardContent>
						<img src={bowls} alt="Lawn bowls on the green" />
					</CardContent>
				</Card>
			</CardContainer>
		</div>
	)
}