import Link from "next/link";
import Image from "next/image";
import { stickers } from "@/lib/stickers";

const App = async () => {
	return (
		<main className="min-h-screen bg-lime p-8 font-plex-mono">
			{stickers.map((sticker) => (
				<div
					key={sticker.slug}
					className="flex items-center justify-center"
				>
					<Link href={`/sticker/${sticker.slug}`}>
						<Image
							alt={sticker.name}
							src={sticker.thumbnailSrc}
							width="100"
							height="100"
						/>
						<span className="sr-only">{sticker.name}</span>
					</Link>
				</div>
			))}
		</main>
	);
};

export default App;
