import TopNav from './TopNav'
import './Header.scss'
import logo from '@/assets/logo.avif';

export default function Header() {
	return (
		<div className="Header">
			<img className="logo" src={logo} alt="Guelph Lawn Bowling Club Logo" />
			<TopNav />
		</div>
	)
}