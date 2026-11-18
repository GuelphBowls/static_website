// filename: components/Footer/Footer.tsx
// components/Footer/Footer.tsx
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import './Footer.scss'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="Footer">
			<span>© {year} Guelph Lawn Bowling Club</span>

			<span className="Footer-built">
				Built with
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} alt="Vite" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} alt="React" />
				</a>
			</span>
		</footer>
	)
}