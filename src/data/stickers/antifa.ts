import { StickerRenderer } from "@/lib/stickers";
import { renderCircularText } from "@/lib/canvas-helper";

export const antifaStickerRenderer: StickerRenderer = async (params, ctx) => {
	const halfWidth = ctx.canvas.width / 2;

	const img = new Image();
	img.src = "/antifa-flag.svg";
	await new Promise((resolve) => {
		img.onload = resolve;
	});

	ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
	const config = {
		ctx,
		radius: halfWidth - 60,
		fillStyle: params.foregroundColor,
		font: "80px IBM Plex Mono",
		angleCalculation: "auto",
		letterAngle: 0.1,
	} as const;

	// top text
	renderCircularText({
		...config,
		text: params.text1,
		position: "top",
	});

	// bottom text
	renderCircularText({
		...config,
		text: params.text2,
		position: "bottom",
	});
};
