import './Contact.scss'
import { Card, CardTitle, CardContent } from '@/components/Cards'
import EmbeddedMap from './EmbeddedMap/EmbeddedMap'
import CardContainer from '@/components/Cards/CardContainer'
import facebookLogo from '@/assets/facebook.avif'
import instagramLogo from '@/assets/instagram.avif'
import SocialLink from '@/components/SocialLink'

export default function Contact() {
	const mapSource = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1067.1704417525593!2d-80.2423260458823!3d43.53978323729701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9adb529d25f9%3A0xf97cf8d6db849d0!2sGuelph%20Lawn%20Bowling%20Club!5e1!3m2!1sen!2sca!4v1795273413870!5m2!1sen!2sca'
	return (
		<div className='Contact'>
			<CardContainer>
				<Card color='blue'>
					<CardTitle styles='bold large'>Visit Us</CardTitle>
					<CardContent styles='left'>
						The Guelph Lawn Bowling Club is located in the heart of downtown Guelph.
						The clubhouse is not staffed, please contact us to set up a meeting.
						114 Gordon Street
						Guelph, ON N1H 4H6
					</CardContent>
					<EmbeddedMap src={mapSource} />
				</Card>
				<Card color='green'>
					<CardTitle styles='bold large'>Contact Us</CardTitle>
					<CardContent styles='left'>
						<p className='Align--center'>
							<a href='mailto:GuelphLBCEvents@gmail.com?subject=Contact Us' target='_self'>GuelphLBCEvents@gmail.com</a>
						</p>
						<br />
						<p>
							We are a volunteer organization run by a dedicated group of volunteers members.
							We do not have regular office hours. However, we will make every effort to reply
							to your inquiry within 72 hours. We look forward to connecting with you soon.
						</p>
						<br />
						<p>
							Follow us on Instagram and Facebook!
							<SocialLink
								href='https://www.facebook.com/Guelph-Lawn-Bowling-Club-540343166145366/'
								logo={facebookLogo}
								alt='Guelph Lawn Bowling Club on Facebook'
							/>
							<SocialLink
								href='https://www.instagram.com/lawnbowlingguelph/'								
								logo={instagramLogo}
								alt='Guelph Lawn Bowling Club on Instagram'
							/>
						</p>
					</CardContent>
				</Card>
			</CardContainer>
		</div>
	)
}