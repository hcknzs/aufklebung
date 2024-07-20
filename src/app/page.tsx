"use client";
import { useState } from "react";
import { Canvas } from "@/components/canvas/canvas";
import { Sticker, stickerConfig } from "@/data/stickers/stickers";

const App = () => {
	const [sticker, setSticker] = useState<Sticker>(stickerConfig.antifa);

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
						setSticker(
							stickerConfig[
								e.target.value as keyof typeof stickerConfig
							],
						)
					}
				>
					{Object.keys(stickerConfig).map((key) => (
						<option key={key} value={key}>
							{key}
						</option>
					))}
				</select>

				<Canvas sticker={sticker} />
			</div>
		</main>
	);
};

export default App;
