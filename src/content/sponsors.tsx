// src/content/groupEvents.tsx
import type { ICardContent } from '@/components/Cards/CardDataTypes'
import '@/components/Cards/UserStyles.scss'

export const content: ICardContent[] = [
	{
		title: 'Helping Us Helps You',
		titleVariant: ['left', 'large'],
		color: 'none',
		content: (
			<div className='content--left'>
				<p>
					Donate to the Guelph Lawn Bowling Club and receive a receipt you can use as a business expense. Become a major sponsor and have a tournament named after you or your business.
				</p>
				<br />
				<p>
					The Guelph Lawn Bowling Club is a not-for-profit organization offering Guelph a recreational activity that can be enjoyed by a diverse group of residents. This recreational sport club exists thanks to its volunteers, member fees, the City of Guelph, and local business donations.
				</p>
			</div>
		),
	},
	{
		title: 'Become a Sponsor',
		titleVariant: ['left'],
		color: 'none',
		content: (
			<div className='content--left'>
				<p>
					We have affordable sponsorship categories that give you local publicity. Show your community spirit. Since 1838 we’ve been a part of our community. Sponsorship helps us to continue providing a sport enjoyed by all ages and abilities. Please support local lawn bowling.
				</p>
				<br />
				<a href='https://www.guelphlawnbowling.com/contact'>
					Contact us for more information.
				</a>
			</div>
		),
	},
	{
		title: 'Thanks for Supporting the Guelph Lawn Bowling Club',
		titleVariant: ['left'],
		color: 'blue',
		content: (
			<div className='content--left'>
				<h2>2026 Sponsors</h2>
				<ul>
					<li>Brothers Brewing</li>
					<li>Royal City Brewery</li>
					<li>Wellington Brewery</li>
					<li>Kawartha Dairy</li>
					<li>Schlegel Villages</li>
				</ul>
			</div>
		),
	},
]