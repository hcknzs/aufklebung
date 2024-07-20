import { StickerConfig, StickerRenderer } from "./stickers";

export const xNeinDankeStickerRenderer: StickerRenderer<
	StickerConfig["xNeinDanke"]
> = (sticker, ctx) => {
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	// render text
	ctx.fillStyle = "#fff";
	ctx.font = "100px sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(
		sticker.params.text + " nein danke",
		ctx.canvas.width / 2,
		ctx.canvas.height / 2,
	);
};
