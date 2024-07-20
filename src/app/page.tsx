import Link from "next/link";
import Image from "next/image";
import { stickers } from "@/lib/stickers";

const App = () => {
	return (
		<div className="grid grid-cols-2 gap-5 p-5">
			{stickers.map((sticker) => (
				<Link
					key={sticker.slug}
					href={`/sticker/${sticker.slug}`}
					className="flex flex-col items-center justify-center gap-2 font-bold text-purple-300"
				>
					<Image
						className={`aspect-square w-full object-cover ${sticker.shape === "circle" ? "rounded-full" : "rounded-md"}`}
						alt={sticker.name}
						src={sticker.thumbnailSrc}
						width="200"
						height="200"
					/>
					<span className="">{sticker.name}</span>
				</Link>
			))}
		</div>
	);
};

export default App;
