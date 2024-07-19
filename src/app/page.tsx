"use client";
import { useState } from "react";
import { Canvas } from "@/components/canvas/canvas";
import { initialStickerParams, Sticker } from "@/data/stickers";

const App = () => {
	const [sticker, setSticker] = useState<Sticker>({
		type: "antifa",
		params: initialStickerParams.antifa,
	});

	return (
		<main className="min-h-screen bg-lime p-8 font-plex-mono">
			Aufklebung
			<div>
				<input
					type="text"
					value={sticker.params.text ?? ""}
					onChange={(e) =>
						setSticker({
							...sticker,
							params: { ...sticker.params, text: e.target.value },
						})
					}
				/>
				<select
					value={sticker.type}
					onChange={(e) =>
						setSticker({
							type: e.target.value as Sticker["type"],
							params: initialStickerParams[
								e.target.value as Sticker["type"]
							],
						})
					}
				>
					<option value="antifa">Antifa</option>
					<option value="xNeinDanke">X Nein Danke</option>
				</select>

				<Canvas sticker={sticker} />
			</div>
		</main>
	);
};

export default App;
