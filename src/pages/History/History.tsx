// filename: pages/History/History.tsx
import './History.scss'
import historyImg from '@/assets/history.avif'

export default function History() {
	return (
		<section className="History">
			<h1>Guelph Lawn Bowling History</h1>

			<div className="History__body">
				<figure>
					<img
						src={historyImg}
						alt="Bowlers watching play on the green, 1975"
					/>
					<figcaption>
						Photograph appears courtesy of the<br />
						Guelph Public Library Archives,<br />
						Season Under Way, 1975 (F45-0-15-0-0-70)
					</figcaption>
				</figure>

				<div className="History__text">
					<p>The Victoria Bowling Club was founded in 1838 and rented greens from the Victoria Curling Club which was founded the same year. The Club was originally located on the green behind Knox Church, which is now the Baker Street parking lot. The lawn bowling and curling clubs shared the same club house. There were also some private greens located at the court house, the Ontario Agricultural College, Homewood and the Ontario reformatory.</p>

					<p>Lawn bowling was a popular summer sport and many of Guelph’s prominent citizens were members of the club, including the Honourable Hugh Guthrie, Joseph Downey, D.E. Macdonald, H.C. Scholfield and Mayor George Sleeman.</p>

					<p>In 1906, Guelph hosted a complement of British lawn bowlers for a tournament followed by a banquet at the Ontario Agricultural College. In 1919 the Guelph club initiated an annual Dominion Day Tournament. The inaugural tournament featured 64 teams of four (256 bowlers) from across Ontario to compete. The tournament awarded three trophies sponsored by three local industrialists, George Wallace, F.E. Partridge and Wilfrid Cooke.</p>

					<p>In 1949 the Victoria Lawn Bowling Club went through some significant changes. The Victoria Curling Club needed the land the bowlers rented from them so the lawn bowlers needed a new home. The city volunteered to lease a portion of Royal City Park for a nominal sum and the bowlers built new greens with 16 rinks. The club also changed its name to the Guelph Lawn Bowling Club. A new clubhouse was desperately needed and Alderman Chris Robinson managed to secure an abandoned office building on Wellington Street then had it moved close to the club’s site. In 1987 the building was renovated and enlarged.</p>

					<p>The Guelph Lawn Bowling Club was incorporated in 2001 as a non-profit organization.</p>
				</div>
			</div>
		</section>
	)
}