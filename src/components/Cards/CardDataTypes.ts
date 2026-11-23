
export type CardColor =
	| 'blue' | 'yellow' | 'green' | 'red'
	| 'purple' | 'orange' | 'teal' | 'pink'
	| 'white' | 'none'

export type TitleStyles =
	'left' | 'right' | 'center'
	| 'blue' | 'yellow' | 'green' | 'red'
	| 'purple' | 'orange' | 'teal' | 'pink'
	| 'white' | 'black' | 'bold' | 'italic'
	| 'large' | 'small'

export type ContentStyles = 
	'left' | 'right' | 'center' | 'justified'

export const bem = (base: string, mods: readonly (string | undefined)[] = []) => {
	const classes = [base];

	for (const mod of mods) {
		if (!mod) continue;

		for (const part of mod.split(' ')) {
			if (part) classes.push(`${base}--${part}`);
		}
	}

	return classes.join(' ');
};
