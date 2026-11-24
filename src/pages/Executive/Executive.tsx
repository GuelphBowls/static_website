// filename: pages/Executive/Executive.tsx
import { Card, CardTitle, CardContent, CardContainer } from '@/components/Cards'

export default function Executive() {
	return (
		<CardContainer>
			<Card color="blue">
				<CardTitle styles="bold large">2026/2027 Executive</CardTitle>
				<CardContent styles="center">
					<CardContainer>
						<Card color="blue" styles="fit frost">
							<CardTitle styles="bold">President</CardTitle>
							<CardContent styles="center">
								<p>Blake Skinner</p>
								<p>GuelphLBC@gmail.com</p>
							</CardContent>
						</Card>				
						<Card color="blue" styles="fit frost">
							<CardTitle styles="bold">Vice President</CardTitle>
							<CardContent styles="center">
								<p>Emily Gibson</p>
								<p>glbcvp@gmail.com</p>
							</CardContent>
						</Card>
						<Card color="blue" styles="fit frost">
							<CardTitle styles="bold">Secretary</CardTitle>
							<CardContent styles="center">
								<p>Blake Grills</p>
								<p>GuelphLBCsecretary@gmail.com </p>
							</CardContent>
						</Card>
						<Card color="blue" styles="fit frost">
							<CardTitle styles="bold">Membership Secretary</CardTitle>
							<CardContent styles="center">
								<p>Barbara Chillingsworth</p>
							</CardContent>
						</Card>		
						<Card color="blue" styles="fit frost">
							<CardTitle styles="bold">Directors</CardTitle>
							<CardContent styles="center">
								<p>Ed Armstrong</p>
								<p>Jamie Ford</p>
								<p>Kaeli Sweigard</p>								
							</CardContent>
						</Card>																														
					</CardContainer>
				</CardContent>
			</Card>
		</CardContainer>
	)
}