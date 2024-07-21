import { Button } from "./ui/button";

export const ColorButton: React.FC<{
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => {
	return (
		<label className="flex cursor-pointer overflow-hidden rounded-md">
			<span className="sr-only">Farbe ändern</span>
			<input
				className="absolute w-4 translate-x-full opacity-0"
				type="color"
				value={value}
				onChange={onChange}
			/>
			<Button
				className="rounded-none"
				onClick={(ev) => ev.currentTarget.parentElement?.click()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					className="block size-6"
					viewBox="0 0 24 24"
				>
					<path
						stroke="#fff"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m18 2 4 4M7.5 20.5 19 9l-4-4L3.5 16.5 2 22l5.5-1.5Z"
					/>
				</svg>
			</Button>
			<div
				className="min-w-24 flex-1"
				style={{ backgroundColor: value }}
			/>
		</label>
	);
};
