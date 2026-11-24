// filename: pages/Join/Join.tsx
import { Card, CardTitle, CardContent, CardContainer } from '@/components/Cards'
import membershipForm from '@/assets/membership_form.pdf'
import waiver from '@/assets/waiver_adult.pdf'
import './Join.scss'


export default function Join() {
	return (
		<div className="Join">
			<CardContainer>
				<Card color="blue">
					<CardTitle styles="bold large">2026 Season Fees</CardTitle>
					<CardContent styles="center">(2027 fees TBA)
						<CardContainer>
							<Card color="blue" styles="frost">
								<CardTitle styles="bold large">Adult</CardTitle>
								<CardContent>
									<p className="Join__price">$190</p>
									<p>Includes OLBA &amp; District 7 fee</p>
									<p className="Join__note">
										Children and grandchildren (age 5–17) of adult members are automatically included as members!
									</p>
								</CardContent>
							</Card>

							<Card color="blue" styles="frost">
								<CardTitle styles="bold large">Young Adult (18–25)</CardTitle>
								<CardContent>
									<p className="Join__price">$100</p>
									<p>Includes OLBA &amp; District 7 fee</p>
								</CardContent>
							</Card>

							<Card color="blue" styles="frost">
								<CardTitle styles="bold large">Pay to Play</CardTitle>
								<CardContent>
									<p className="Join__price">$10</p>
									<p>Applies to future membership</p>
									<p className="Join__note">Max 5 plays per season</p>
								</CardContent>
							</Card>

							<Card color="blue" styles="frost">
								<CardTitle styles="bold large">Private Event</CardTitle>
								<CardContent>
									<p className="Join__price">$20 per person</p>
									<p className="Join__note">Event must be scheduled in advance</p>
								</CardContent>
							</Card>

							<Card color="blue" styles="frost">
								<CardTitle styles="bold large">Learn to Bowl</CardTitle>
								<CardContent>
									<p className="Join__price">$10</p>
									<p>Applies to future membership</p>
									<p className="Join__note">Max 3 plays per season</p>
								</CardContent>
							</Card>

							<Card color="blue" styles="frost">
								<CardTitle styles="bold large">Open Bowl Mondays</CardTitle>
								<CardContent>
									<p className="Join__price">Free</p>
									<p>Play with a supervising member</p>
									<p className="Join__note">Max 3 plays per season</p>
								</CardContent>
							</Card>
						</CardContainer>
					</CardContent>
				</Card>

				<Card color="blue">
					<CardTitle styles="bold large">Joining is Easy</CardTitle>
					<CardContent styles="left">
						<p>
							New and returning members can bring their payment and completed membership form to the club
							house during the season. Don’t forget to read and fill out the insurance waiver. We will gladly receive your forms and payment via email
							or in person at
							the club.
						</p>
						<br />
						<a className="center" href="mailto:guelphlbcsecretary@gmail.com">guelphlbcsecretary@gmail.com</a>
						<br />
						<p>
							If you’re a returning member who has already completed an insurance waiver, you only need to
							submit the membership form.
						</p>
						<br/>
						<a
							className='center'
							href={membershipForm}
							target="_blank"
							rel="noreferrer"
						>
							2026 Membership Form
						</a>
						<a
							className='center'
							href={waiver}
							target="_blank"
							rel="noreferrer"
						>
							Adult Insurance Waiver
						</a>
					</CardContent>
				</Card>

				<Card color="blue">
					<CardTitle styles="bold large">New Members</CardTitle>
					<CardContent styles="left">
						<p>
							Feel free to drop by for Open Bowl Mondays at 7pm (just ask for Blake) or book an appointment by
							emailing <a href="mailto:guelphlbcevents@gmail.com">guelphlbcevents@gmail.com</a>.
						</p>
						<br/>
						<p>
							So, what are you waiting for? If you haven’t already joined, give it a try. You’re welcome to
							come out a time or two to try lawn bowling. Your best bet is to visit us on an open bowling
							night. We’ve got lots of enthusiastic members who will be happy to introduce you to the game.
						</p>
					</CardContent>
				</Card>

				<Card color="blue">
					<CardTitle styles="bold large">No Equipment Needed</CardTitle>
					<CardContent styles="left">
						<p>
							All you have to do is come out and play. We have a supply of lawn bowls for members and guests
							to use. It’s that easy! Just don’t forget sunscreen, a hat, and something non-alcoholic to keep
							hydrated.
						</p>
						<br/>
						<p>
							We do, however, ask bowlers to wear flat, soft-sole shoes to play. We prefer club members wear
							shoes that are worn for lawn bowling only as opposed to street shoes.
						</p>
					</CardContent>
				</Card>
			</CardContainer>
		</div >
	)
}