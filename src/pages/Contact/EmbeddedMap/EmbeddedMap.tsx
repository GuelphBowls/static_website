// filename: pages/Contact/EmbeddedMap/EmbeddedMap.tsx

type EmbeddedMapProps = {
	src: string;
	title?: string;
	height?: number;
};

export default function EmbeddedMap({ src, title = "Map", height = 400 }: EmbeddedMapProps) {
	return (
		<iframe
			src={src}
			title={title}
			width="100%"
			height={height}
			style={{ border: 0 }}
			loading="lazy"
			allowFullScreen
			referrerPolicy="no-referrer-when-downgrade"
		/>
	);
}