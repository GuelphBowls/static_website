// filename: components/Header/TopNav/Hamburger/Hamburger.tsx
import './Hamburger.scss'

interface HamburgerProps {
	isOpen: boolean;
	onClick: () => void;
	controls: string;
}


export default function Hamburger({ isOpen, onClick, controls }: HamburgerProps) {
	return (
		<button className="Hamburger"
			aria-label="Menu"
			aria-expanded={isOpen}
			aria-controls={controls}
			onClick={onClick}
		>
			<span className="Hamburger__bar" />
			<span className="Hamburger__bar" />
			<span className="Hamburger__bar" />
		</button>
	)
}