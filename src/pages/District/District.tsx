import { Card, CardTitle, CardContent, CardContainer } from '@/components/Cards'

export default function District() {
	return (
		<CardContainer>
			<Card color="blue">
				<CardTitle styles="bold large">District Events</CardTitle>
				<CardContent styles="center">
					Stay tuned for the 2027 District 7 schedule.
				</CardContent>
			</Card>
		</CardContainer>
	)
}