import Link from "next/link";
import Image from "next/image";
import { stickers } from "@/lib/stickers";
import { Guide } from "@/components/guide";

const App = () => {
	return (
		<>
			<div className="mb-5 flex flex-col gap-4 px-5 lg:mb-10">
				<Image
					src="/hero.jpg"
					alt="Hero"
					width="1340"
					height="1092"
					className="w-full rounded-2xl"
				/>
				<p>
					<strong>
						Willkommen im Zeitalter der Aufklebung! Wähle ein
						Vorlage und passe diese an.
					</strong>{" "}
				</p>
				<p>
					Ob Stadt, ob Land, egal ob auf deinem Laptop, Auto oder der
					nächsten Straßenlaterne, jede Aufklebung ist ein Akt des
					Widerstands und der Solidarität.
				</p>
			</div>
			<Guide className="px-5" />
			<div className="grid grid-cols-2 gap-6 p-5">
				{stickers.map((sticker) => (
					<Link
						key={sticker.slug}
						href={`/sticker/${sticker.slug}`}
						className="flex flex-col items-center justify-center gap-2 font-bold text-purple-300"
					>
						<Image
							className={`mb-2 aspect-square w-full object-cover ${sticker.shape === "circle" ? "rounded-full" : "rounded-md"}`}
							alt={sticker.name}
							src={sticker.thumbnailSrc}
							width="200"
							height="200"
						/>
						<span>{sticker.name}</span>
					</Link>
				))}
				<Link
					href="mailto:hello@aufklebung.app"
					className="flex flex-col items-center justify-center gap-2 font-bold text-purple-300"
				>
					<span className="mb-2 flex aspect-square w-full items-center justify-center rounded-full border-2 border-dashed border-gray-400 font-plex-mono text-[4rem] text-gray-400">
						+
					</span>
					<span>Eigene Ideen?</span>
				</Link>
			</div>
		</>
	);
};

export default App;
