// filename: pages/Tournaments/Tournaments.tsx
import { Card, CardTitle, CardContent, CardContainer } from '@/components/Cards'

export default function Tournaments() {
	return (
		<CardContainer>
			<Card color="blue">
				<CardTitle styles="bold large">Canada Day</CardTitle>
				<CardTitle styles="bold">July 1st, 2027</CardTitle>
				<CardContent>Time TBD</CardContent>
				<CardContent>Details to come.</CardContent>
			</Card>
			<Card color="yellow">
				<CardTitle styles="bold large">Civic Holiday</CardTitle>
				<CardTitle styles="bold">August 2nd, 2027</CardTitle>
				<CardContent>Time TBD</CardContent>
				<CardContent>Details to come.</CardContent>
			</Card>
			<Card color="green">
				<CardTitle styles="bold large">Rose Bowl</CardTitle>
				<CardTitle styles="bold">Date TBD</CardTitle>
				<CardContent>Time TBD</CardContent>
				<CardContent>Details to come.</CardContent>
			</Card>
			<Card color="red">
				<CardTitle styles="bold large">Labour Day</CardTitle>
				<CardTitle styles="bold">September 6th, 2027</CardTitle>
				<CardContent>Time TBD</CardContent>
				<CardContent>Details to come.</CardContent>
			</Card>
			<Card color="blue">
				<CardTitle styles="bold large">Club Championship &amp; Fall Meeting</CardTitle>
				<CardTitle styles="bold">Date TBD</CardTitle>
				<CardContent>Time TBD</CardContent>
				<CardContent>Potluck. Details to come.</CardContent>
			</Card>
		</CardContainer>
	)
}