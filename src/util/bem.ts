// filename: util/bem.ts

// bem('Card', ['blue', 'fit frost']) -> "Card Card--blue Card--fit Card--frost"
export default function bem(base: string, mods: readonly (string | undefined)[] = []): string {
	const classes = [base];

	for (const mod of mods) {
		if (!mod) continue;

		for (const part of mod.split(' ')) {
			if (part) classes.push(`${base}--${part}`);
		}
	}

	return classes.join(' ');
}