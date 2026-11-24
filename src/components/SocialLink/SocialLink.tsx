// filename: components/SocialLink/SocialLink.tsx
import "./SocialLink.scss";

type SocialLinkProps = {
  href: string;
  logo: string;
  alt: string;
};

export default function SocialLink({ href, logo, alt }: SocialLinkProps) {
  return (
    <a className="SocialLink" href={href} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={alt} />
    </a>
  );
}