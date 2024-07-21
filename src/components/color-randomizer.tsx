import { Button } from "./ui/button";

const randomSchemes = [
	["#F4F1BB", "#ED6A5A"],
	["#95F9E3", "#564946"],
	["#F4E8C1", "#331E38"],
	["#61E294", "#731EC2"],
	["#52B2CF", "#F05D5E"],
	["#F8C7CC", "#466060"],
];

export const ColorRandomizer = ({
	onChange,
}: {
	onChange: (tuple: [string, string]) => void;
}) => {
	const handleClick = () => {
		const randomScheme =
			randomSchemes[Math.floor(Math.random() * randomSchemes.length)];
		if (!randomScheme) return;
		const scheme =
			Math.random() > 0.5 ? randomScheme : randomScheme.reverse();
		onChange(scheme as [string, string]);
	};

	return (
		<Button onClick={handleClick} className="emoji-white text-xl">
			✨<span className="sr-only">Farben zufällig</span>
		</Button>
	);
};
