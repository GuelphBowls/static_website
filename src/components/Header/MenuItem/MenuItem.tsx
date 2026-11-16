import './MenuItem.scss'

type Props = {
	label: string;
	href: string;
};

export default function MenuItem({ label, href }: Props) {
	return <a className="MenuItem" href={href}>{label}</a>
}