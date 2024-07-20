import { StickerRenderer } from "@/lib/stickers";

export const xNeinDankeStickerRenderer: StickerRenderer = (params, ctx) => {
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	// render text
	ctx.fillStyle = params.foregroundColor;
	ctx.font = "100px sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(
		params.text1 + " nein danke",
		ctx.canvas.width / 2,
		ctx.canvas.height / 2,
	);
};
