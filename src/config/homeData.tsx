// src/pages/Home/homeData.tsx
import type { CardData } from '@/components/Cards/CardDataTypes'

export const homeData: CardData[] = [
	{
		id: 'welcome',
		title: 'Welcome to the Guelph Lawn Bowling Club!',
		color: 'green',
		content: 
		<div className='content--left'>
			We’re 188 years young and going strong! The Guelph Lawn Bowling Club was established in 1838 and new members are always welcome to join the fun in the heart of the Royal City. We’re the second oldest recreational sport club in Guelph (curling is the oldest).
			<br/><br/>
			<a href="https://www.cbc.ca/news/canada/kitchener-waterloo/guelph-lawn-bowling-club-lawn-bowling-beginner-1.6919931">
				Check out an article about our club from the CBC
			</a>
		</div>,
	},
	{
		id: 'reopen',
		title: 'We reopen May 2027!',
		color: 'pink',
		image: 'bowls.avif',
		content: <>Tuesdays at 6pm. <a href="/bowls">Details</a></>,
	},
	{
		id: 'garden',
		title: 'Garden Club',
		color: 'yellow',
		image: 'bowls.avif',
		content: 'Plain strings work too.',
	},
	{
		id: 'garden',
		title: 'Garden Club',
		color: 'yellow',
		image: 'bowls.avif',
		content: 'Plain strings work too.',
	},
	{
		id: 'garden',
		title: 'Garden Club',
		color: 'yellow',
		image: 'bowls.avif',
		content: 'Plain strings work too.',
	},		
]