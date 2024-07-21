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
			<svg
				className="text-accent h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 14 14"
			>
				<path
					d="M4.4,8.95c3.17,0,4.55-1.33,4.55-4.55,0,3.22,1.37,4.55,4.55,4.55-3.18,0-4.55,1.37-4.55,4.55,0-3.18-1.38-4.55-4.55-4.55ZM.5,3.42c2.04,0,2.92-.86,2.92-2.92,0,2.07.88,2.92,2.92,2.92-2.04,0-2.92.88-2.92,2.92,0-2.04-.89-2.92-2.92-2.92Z"
					fill="currentColor"
					stroke="currentColor"
					stroke-linejoin="round"
				/>
			</svg>
			<span className="sr-only">Farben zufällig</span>
		</Button>
	);
};
